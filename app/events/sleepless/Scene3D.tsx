'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Text } from '@react-three/drei'

export function FloatingParticles({ count = 500, mousePosition }: { count?: number, mousePosition: { x: number, y: number } }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor })
    }
    return temp
  }, [count])
  
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      
      dummy.position.set(
        xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      mesh.current!.setMatrixAt(i, dummy.matrix)
    })
    mesh.current!.instanceMatrix.needsUpdate = true
  })
  
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, particles.length]}>
      <sphereGeometry args={[0.3, 8, 8]} />
      <meshStandardMaterial
        color="#ff8800"
        emissive="#ff8800"
        emissiveIntensity={0.6}
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </instancedMesh>
  )
}

// Coffee Cup Component
export function CoffeeCup({ position, mousePosition, scrollY }: { position: [number, number, number], mousePosition: { x: number, y: number }, scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const steamRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1
      
      // Subtle floating motion
      groupRef.current.position.x = position[0]
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.3 - (scrollY * 0.003)
      groupRef.current.position.z = position[2] - scrollY * 0.005
    }
    
    if (steamRef.current) {
      // Steam rises smoothly
      steamRef.current.children.forEach((child, i) => {
        child.position.y = ((state.clock.elapsedTime * 0.5 + i * 0.5) % 3)
        child.scale.setScalar(1 - (child.position.y / 3) * 0.8)
        child.position.x = Math.sin(state.clock.elapsedTime + i) * 0.2
      })
    }
  })
  
  return (
    <group ref={groupRef} position={position}>
      {/* Mug body - black ceramic */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.3, 1.1, 2.2, 32]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.1}
          roughness={0.3}
        />
      </mesh>
      
      {/* Inner rim detail */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[1.31, 1.31, 0.1, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>
      
      {/* Coffee inside - hot orange glow */}
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.3, 32]} />
        <meshStandardMaterial
          color="#ff8800"
          emissive="#ff8800"
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
      
      {/* Coffee surface glow */}
      <mesh position={[0, 1.05, 0]}>
        <circleGeometry args={[1.2, 32]} />
        <meshStandardMaterial
          color="#ffaa33"
          emissive="#ff8800"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
          side={2}
        />
      </mesh>
      
      {/* Mug handle - realistic C-shape */}
      <mesh position={[1.4, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.7, 0.15, 16, 32, Math.PI * 1.3]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.1}
          roughness={0.4}
        />
      </mesh>
      
      {/* Handle inner side - for depth */}
      <mesh position={[1.4, 0, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.7, 0.12, 16, 32, Math.PI * 1.3]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.15}
          roughness={0.3}
        />
      </mesh>
      
      {/* Steam particles */}
      <group ref={steamRef} position={[0, 1.5, 0]}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, i * 0.8, 0]}>
            <sphereGeometry args={[0.15, 8, 8]} />
            <meshStandardMaterial
              color="#ffffff"
              transparent
              opacity={0.4 - i * 0.1}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}

// Laptop Component
export function Laptop({ position, mousePosition, scrollY }: { position: [number, number, number], mousePosition: { x: number, y: number }, scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const screenRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
      groupRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.3) * 0.3 - scrollY * 0.004
      groupRef.current.position.x = position[0]
    }
    
    if (screenRef.current) {
      // Subtle screen animation
      screenRef.current.rotation.x = -0.3 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
    
    if (glowRef.current) {
      // Gentle pulsing glow
      const intensity = 0.6 + Math.sin(state.clock.elapsedTime * 0.8) * 0.2
      const mat = glowRef.current.material
      if (Array.isArray(mat)) {
        mat.forEach((m) => {
          if ('opacity' in m) {
            ;(m as THREE.Material & { opacity: number }).opacity = intensity
          }
        })
      } else {
        if ('opacity' in mat) {
          ;(mat as THREE.Material & { opacity: number }).opacity = intensity
        }
      }
    }
  })
  
  return (
    <group ref={groupRef} position={position} rotation={[0, Math.PI / 4, 0]}>
      {/* Keyboard base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial
          color="#2a2a2a"
          emissive="#9013fe"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Screen */}
      <mesh ref={screenRef} position={[0, 1.2, -0.9]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[2.8, 2, 0.1]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#7064fc"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Screen glow */}
      <mesh ref={glowRef} position={[0, 1.2, -0.85]} rotation={[-0.3, 0, 0]}>
        <planeGeometry args={[2.6, 1.8]} />
        <meshStandardMaterial
          color="#ff8800"
          emissive="#ff8800"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}

// Code Brackets floating around
export function CodeBrackets({ mousePosition, scrollY }: { mousePosition: { x: number, y: number }, scrollY: number }) {
  const group = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (group.current) {
      // Smooth rotation animation
      group.current.rotation.x = scrollY * 0.0001
      group.current.rotation.y = state.clock.elapsedTime * 0.1
      
      // Subtle scale based on scroll
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05
      group.current.scale.setScalar(scale)
    }
  })
  
  const symbols = ['{ }', '< >', '[ ]', '( )', '//', '==', '++', '--']
  
  return (
    <group ref={group}>
      {symbols.map((symbol, i) => {
        const angle = (i / symbols.length) * Math.PI * 2
        const radius = 18
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = (i % 2 === 0 ? 8 : -8) + Math.sin(i) * 5
        
        return (
          <Text
            key={i}
            position={[x, y, z]}
            fontSize={1.5}
            color="#ff8800"
            anchorX="center"
            anchorY="middle"
          >
            {symbol}
          </Text>
        )
      })}
    </group>
  )
}

// export function HelixDNA({ scrollY }: { scrollY: number }) {
//   const helixRef = useRef<THREE.Group>(null)
  
//   const helixPoints = useMemo(() => {
//     const points = []
//     for (let i = 0; i < 100; i++) {
//       const angle = (i / 100) * Math.PI * 8
//       const radius = 5
//       const x = Math.cos(angle) * radius
//       const y = (i / 100) * 30 - 15
//       const z = Math.sin(angle) * radius
//       points.push(new THREE.Vector3(x, y, z))
//     }
//     return points
//   }, [])
  
//   useFrame((state) => {
//     if (helixRef.current) {
//       helixRef.current.rotation.y = state.clock.elapsedTime * 0.2 + scrollY * 0.001
//       helixRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2
//     }
//   })
  
//   return (
//     <group ref={helixRef} position={[20, 0, -20]}>
//       {helixPoints.map((point, i) => (
//         <mesh key={i} position={point}>
//           <sphereGeometry args={[0.3, 8, 8]} />
//           <meshStandardMaterial
//             color={i % 2 === 0 ? '#9013fe' : '#7064fc'}
//             emissive={i % 2 === 0 ? '#9013fe' : '#7064fc'}
//             emissiveIntensity={0.5}
//           />
//         </mesh>
//       ))}
//     </group>
//   )
// }

// Binary Rain (Matrix style)
export function BinaryRain({ scrollY, mousePosition }: { scrollY: number, mousePosition: { x: number, y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  
  const columns = useMemo(() => {
    const cols = []
    for (let i = 0; i < 20; i++) {
      cols.push({
        x: (Math.random() - 0.5) * 60,
        z: -5 - Math.random() * 15,
        speed: 0.5 + Math.random() * 1,
        offset: Math.random() * 20
      })
    }
    return cols
  }, [])
  
  useFrame((state) => {
    if (groupRef.current) {
      // Smooth falling animation
      groupRef.current.children.forEach((child, i) => {
        const col = columns[i]
        child.position.y = ((state.clock.elapsedTime * col.speed + col.offset) % 40) - 20 - scrollY * 0.003
        child.position.x = col.x
      })
    }
  })
  
  return (
    <group ref={groupRef}>
      {columns.map((col, i) => (
        <Text
          key={i}
          position={[col.x, 0, col.z]}
          fontSize={0.8}
          color="#ff8800"
          anchorX="center"
          anchorY="middle"
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </Text>
      ))}
    </group>
  )
}

// Pizza slice for late night coding
export function PizzaSlice({ position, mousePosition, scrollY }: { position: [number, number, number], mousePosition: { x: number, y: number }, scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation and floating
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.4 - scrollY * 0.003
      groupRef.current.position.x = position[0]
    }
  })
  
  // Create pizza slice shape
  const shape = useMemo(() => {
    const pizzaShape = new THREE.Shape()
    pizzaShape.moveTo(0, 0)
    pizzaShape.lineTo(2, 0)
    pizzaShape.arc(-2, 0, 2, 0, Math.PI / 3, false)
    pizzaShape.lineTo(0, 0)
    return pizzaShape
  }, [])
  
  return (
    <group ref={groupRef} position={position}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <extrudeGeometry args={[shape, { depth: 0.2, bevelEnabled: false }]} />
        <meshStandardMaterial
          color="#ffcc00"
          emissive="#ff8800"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Pepperoni spots */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          position={[
            0.5 + Math.random() * 0.8,
            0.15,
            0.3 + Math.random() * 0.5
          ]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <circleGeometry args={[0.15, 16]} />
          <meshStandardMaterial
            color="#cc0000"
            emissive="#cc0000"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

// Energy drink can
export function EnergyDrink({ position, mousePosition, scrollY }: { position: [number, number, number], mousePosition: { x: number, y: number }, scrollY: number }) {
  const canRef = useRef<THREE.Mesh>(null)
  const labelRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (canRef.current) {
      // Gentle spinning and floating
      canRef.current.rotation.y = state.clock.elapsedTime * 0.4
      canRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.4) * 0.3 - scrollY * 0.004
      canRef.current.position.z = position[2] - scrollY * 0.005
    }
  })
  
  return (
    <mesh ref={canRef} position={position}>
      <cylinderGeometry args={[0.4, 0.4, 2, 32]} />
      <meshStandardMaterial
        color="#00ff88"
        emissive="#00ff88"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}
