'use client'

import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { 
  FloatingParticles, 
  CoffeeCup, 
  Laptop, 
  CodeBrackets, 
  BinaryRain,
  PizzaSlice,
  EnergyDrink
} from './Scene3D'

export default function ThreeBackground({ 
  mousePosition, 
  scrollY 
}: { 
  mousePosition: { x: number, y: number }
  scrollY: number 
}) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        
        {/* Lighting setup for orange/black theme */}
        <ambientLight intensity={0.3} />
        <pointLight position={[15, 10, 10]} intensity={2} color="#ff8800" />
        <pointLight position={[-15, -10, -10]} intensity={1.2} color="#ff6600" />
        <pointLight position={[0, 15, 5]} intensity={1.5} color="#ffaa33" />
        <pointLight position={[0, -15, 5]} intensity={0.8} color="#ff8800" />
        <spotLight
          position={[0, 20, 10]}
          angle={0.4}
          penumbra={1}
          intensity={1.5}
          color="#ff8800"
          castShadow
        />
        
        {/* Sleepless Coding Saga themed elements */}
        <FloatingParticles count={200} mousePosition={mousePosition} />
        
        {/* Coffee cups - essential for sleepless coding! */}
        <CoffeeCup position={[-12, 6, -8]} mousePosition={mousePosition} scrollY={scrollY} />
        <CoffeeCup position={[14, -4, -10]} mousePosition={mousePosition} scrollY={scrollY} />
        <CoffeeCup position={[-8, -7, -12]} mousePosition={mousePosition} scrollY={scrollY} />
        
        {/* Laptops */}
        <Laptop position={[10, 3, -15]} mousePosition={mousePosition} scrollY={scrollY} />
        <Laptop position={[-14, -3, -14]} mousePosition={mousePosition} scrollY={scrollY} />
        
        {/* Pizza for late night fuel */}
        <PizzaSlice position={[16, 8, -12]} mousePosition={mousePosition} scrollY={scrollY} />
        
        {/* Energy drink */}
        <EnergyDrink position={[-16, 4, -10]} mousePosition={mousePosition} scrollY={scrollY} />
        
        {/* Code symbols orbiting */}
        <CodeBrackets mousePosition={mousePosition} scrollY={scrollY} />
        
        {/* Binary rain falling */}
        <BinaryRain scrollY={scrollY} mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}
