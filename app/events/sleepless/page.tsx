'use client'

import { useState, useEffect, useRef, Suspense, useMemo } from 'react'
import dynamic from 'next/dynamic'
import styles from './page.module.css'

const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
  ssr: false,
  loading: () => null
})

const FLOATING_SYMBOLS = ['{}', '[]', '<>', '()', '//', '==', '!=', '++']

export default function Sleepless() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [normalizedMouse, setNormalizedMouse] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [badgeAnimated, setBadgeAnimated] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const particleConfigs = useMemo(
    () =>
      Array.from({ length: 15 }, (_, index) => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: index,
        duration: 30 + Math.random() * 20
      })),
    []
  )

  const floatingSymbolConfigs = useMemo(
    () =>
      FLOATING_SYMBOLS.map((symbol, index) => ({
        symbol,
        left: 10 + index * 11,
        delay: index * 3,
        duration: 40 + Math.random() * 20
      })),
    []
  )

  useEffect(() => {
    setIsVisible(true)
    setTimeout(() => setBadgeAnimated(true), 500)
    
    // Remove countdown functionality since event is over
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      // Normalize mouse position to -1 to 1 range
      setNormalizedMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleApply = () => {
    // Registration link
    window.open('https://sleepless-coding-saga-2-de03.devfolio.co/', '_blank')
  }

  const handleViewDetails = () => {
    // Replace with your Google Drive PDF link
    window.open('https://drive.google.com/file/d/1Y6Fk_MkAACe_USUAdNEC_c4v-SEcrahC/view?usp=sharing', '_blank')
  }

  return (
    <div className={styles.container}>
      {/* 3D Background */}
      <Suspense fallback={null}>
        <ThreeBackground mousePosition={normalizedMouse} scrollY={scrollY} />
      </Suspense>

      {/* Animated Background Gradient */}
      <div 
        className={styles.mouseGradient}
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 136, 0, 0.2), transparent 80%)`
        }}
      />

      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroContent}>
          <div className={`${styles.badge} ${badgeAnimated ? styles.badgeStable : ''}`}>
            FLAGSHIP HACKATHON
          </div>
          
          <div className={styles.titleMascotWrapper}>
            <div className={styles.mascotBadge}>
              <img 
                src="/Events/pics/MASCOT (COLOR).png" 
                alt="Sleepless Coding Saga Mascot" 
                className={styles.mascotImg}
              />
            </div>
            <h1 className={`${styles.title} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.2s' }}>
              <span className={styles.glitchWrapper}>
                <span className={styles.glitch} data-text="Sleepless Coding Saga 3.0">
                  Sleepless Coding Saga 3.0
                </span>
              </span>
            </h1>
          </div>
          
          <p className={`${styles.tagline} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.4s' }}>
            36 Hours. Infinite Possibilities. One Epic Journey.
          </p>
          <div className={styles.eventDetails}>
            <div className={styles.detailItem}>
              <span className={styles.icon}>📅</span>
              <span>25-26 October 2025</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.icon}>⏱️</span>
              <span>36 Hours</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.icon}>💻</span>
              <span>Hackathon</span>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.ctaButton} onClick={handleApply} disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>
              Registration Closed
              <span className={styles.arrow}>✓</span>
            </button>
            <button className={styles.viewDetailsButton} onClick={handleViewDetails}>
              📄 View Details
            </button>
          </div>
        </div>

        {/* Remove Countdown Timer Section */}
        {/* <div className={`${styles.countdown} ${isVisible ? styles.fadeInUp : ''}`} style={{ animationDelay: '0.6s' }}>
          ...
        </div> */}

        {/* Animated Code Rain Effect */}
        <div className={styles.codeRain}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.codeColumn} style={{ left: `${i * 5}%`, animationDelay: `${i * 0.1}s` }}>
              {'</>'}
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <div className={styles.aboutText}>
            <p>
              The flagship hackathon of the Coding Club, <strong>Code Geass</strong> successfully concluded - bigger, 
              bolder, and more ingenious than ever!
            </p>
            <p>
              This year's edition challenged participants to <strong>reimagine how technology can 
              seamlessly weave into our everyday routines</strong>. From streamlining mundane tasks to 
              crafting experiences that make life smarter, faster, and more connected - it was all about 
              innovation that touches the ordinary and makes it extraordinary.
            </p>
            <p>
              Over <strong>36 intense hours</strong> of creativity, logic, and caffeine, teams 
              collaborated to bring their boldest ideas to life. Code Geass: The Sleepless Coding Saga 
              pushed the boundaries of what's possible - one line of code at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className={styles.themes}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Hackathon Themes</h2>
          <p className={styles.themesIntro}>
            Build smart, practical, and creative solutions that make life simpler and better. 
            Choose from these themes or create your own problem statement:
          </p>
          <div className={styles.themeGrid}>
            <div className={styles.themeCard}>
              <div className={styles.themeIcon}>🌐</div>
              <h3>Browser Extensions</h3>
              <p>
                Enhance productivity, security, accessibility, or the overall user experience within 
                browsers. Build extensions that make the web smarter, faster, or more intuitive.
              </p>
            </div>
            <div className={styles.themeCard}>
              <div className={styles.themeIcon}>🤖</div>
              <h3>Bots for Various Platforms</h3>
              <p>
                Create smart, reliable bots that automate responses, manage tasks, or facilitate 
                interactions across messaging platforms and productivity tools.
              </p>
            </div>
            <div className={styles.themeCard}>
              <div className={styles.themeIcon}>⚡</div>
              <h3>Automations That Make Life Simple</h3>
              <p>
                Build tools or systems that simplify tasks, optimize workflows, or remove friction 
                from daily routines using AI or traditional logic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className={styles.prizes}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Prizes & Recognition</h2>
          <div className={styles.prizeGrid}>
            <div className={styles.prizeCard}>
              <div className={styles.prizeRank}>🥇</div>
              <h3>Grand Prize</h3>
              <p className={styles.prizeAmount}>₹4,000</p>
              <p>Worth of goodies</p>
            </div>
            <div className={styles.prizeCard}>
              <div className={styles.prizeRank}>🥈</div>
              <h3>Runner Up</h3>
              <p className={styles.prizeAmount}>₹3,000</p>
              <p>Worth of goodies</p>
            </div>
            <div className={styles.prizeCard}>
              <div className={styles.prizeRank}>🥉</div>
              <h3>Second Runner Up</h3>
              <p className={styles.prizeAmount}>₹2,000</p>
              <p>Worth of goodies</p>
            </div>
            <div className={styles.prizeCard}>
              <div className={styles.prizeRank}>⭐</div>
              <h3>Just Juniors Gold</h3>
              <p className={styles.prizeAmount}>₹1,500</p>
              <p>Best hack by 2029/2030 batch</p>
            </div>
            <div className={styles.prizeCard}>
              <div className={styles.prizeRank}>⭐</div>
              <h3>Just Juniors Silver</h3>
              <p className={styles.prizeAmount}>₹1,000</p>
              <p>Best hack by 2029/2030 batch</p>
            </div>
            <div className={styles.prizeCard}>
              <div className={styles.prizeRank}>💡</div>
              <h3>Best Problem Statement</h3>
              <p className={styles.prizeAmount}>₹2,000</p>
              <p>Most unique problem identified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timeline}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Event Timeline</h2>
          <div className={styles.timelineList}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Oct 22</div>
              <div className={styles.timelineContent}>
                <h3>Registration Closed</h3>
                <p>End of Day</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Oct 23</div>
              <div className={styles.timelineContent}>
                <h3>Shortlisted Candidates Announced</h3>
                <p>Confirmation sent via email</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Oct 25</div>
              <div className={styles.timelineContent}>
                <h3>Hackathon Began</h3>
                <p>9:00 AM at IIT Dharwad Permanent Campus</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Oct 26</div>
              <div className={styles.timelineContent}>
                <h3>Event Concluded</h3>
                <p>9:00 PM - Presentations to follow on 1st November, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className={styles.registration}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Event Information</h2>
          <div className={styles.registrationInfo}>
            <div className={styles.infoCard}>
              <h3>📝 Team Size</h3>
              <p>2-4 members per team</p>
            </div>
            <div className={styles.infoCard}>
              <h3>🎓 Eligibility</h3>
              <p>Students from any institute in India</p>
            </div>
            <div className={styles.infoCard}>
              <h3>✨ Selection</h3>
              <p>Teams shortlisted based on initial ideation</p>
            </div>
            <div className={styles.infoCard}>
              <h3>📍 Venue</h3>
              <p>IIT Dharwad Permanent Campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Thank You for Being Part of the Saga!</h2>
          <p className={styles.ctaText}>
            Sleepless Coding Saga 3.0 has successfully concluded. Thank you to all participants, mentors and Organizers for making this event extraordinary!
          </p>
          {/* <button className={styles.ctaButtonLarge} onClick={handleApply}>
            Register for Sleepless Coding Saga 3.0
            <span className={styles.arrow}>→</span>
          </button> */}
        </div>
      </section>

      {/* Floating particles animation */}
      <div className={styles.particles}>
        {particleConfigs.map((config, index) => (
          <span
            key={`particle-${index}`}
            className={styles.particle}
            style={{
              top: `${config.top}%`,
              left: `${config.left}%`,
              animationDelay: `${config.delay}s`,
              animationDuration: `${config.duration}s`
            }}
          />
        ))}
      </div>

      {/* Floating Code Symbols */}
      <div className={styles.floatingSymbols}>
        {floatingSymbolConfigs.map((config, index) => (
          <span
            key={`symbol-${index}`}
            className={styles.floatingSymbol}
            style={{
              left: `${config.left}%`,
              animationDelay: `${config.delay}s`,
              animationDuration: `${config.duration}s`
            }}
          >
            {config.symbol}
          </span>
        ))}
      </div>

    </div>
  )
}
