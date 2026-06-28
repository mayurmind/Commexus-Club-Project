import { useRef, useEffect, useState } from 'react'
import { useStaggerReveal } from '../../hooks/useScrollAnimation'
import '../../styles/components/About.css'

const stats = [
  { value: 50, suffix: '+', label: 'Active Members' },
  { value: 20, suffix: '+', label: 'Events Hosted' },
  { value: 10, suffix: '+', label: 'Projects Built' },
  { value: 15, suffix: '+', label: 'Workshops' },
]

const pillars = [
  {
    icon: '⚡',
    title: 'Our Mission',
    description: 'Bridge the gap between theory and practice. We empower students to build real embedded systems, write production code, and solve engineering problems hands-on.',
  },
  {
    icon: '🔭',
    title: 'Our Vision',
    description: 'Create a community of makers and innovators at RCPIT who push boundaries in IoT, robotics, and embedded computing — one project at a time.',
  },
  {
    icon: '🛠️',
    title: 'What We Do',
    description: 'From Arduino workshops to PCB design sessions, hackathons to industry talks — we provide the platform, tools, and mentorship for every aspiring engineer.',
  },
]

const showcase = [
  {
    src: '/images/arduino-robot.jpg',
    alt: 'Arduino-powered robot built by club members',
    label: 'Robotics',
  },
  {
    src: '/images/esp32-board.jpeg',
    alt: 'ESP32 microcontroller for IoT projects',
    label: 'IoT & ESP32',
  },
  {
    src: '/images/embedded-c-code.jpg',
    alt: 'Embedded C programming on screen',
    label: 'Embedded C',
  },
  {
    src: '/images/atmega328-chip.png',
    alt: 'ATmega328 microchip used in Arduino boards',
    label: 'Microcontrollers',
  },
]

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const duration = 2000
          const startTime = performance.now()

          function animate(currentTime) {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            start = Math.floor(eased * target)
            setCount(start)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="about__stat-value">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const cardsRef = useRef(null)
  const showcaseRef = useRef(null)
  useStaggerReveal(cardsRef, '.stagger-item')
  useStaggerReveal(showcaseRef, '.showcase-item')

  return (
    <section className="about section" id="about">
      <div className="section-header section-header--center">
        <div className="section-label">About Us</div>
        <h2 className="section-title">
          Built by Students, <span className="gradient-text">for Students</span>
        </h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Commexus Club is a student-led technical community at R. C. Patel Institute of Technology,
          Shirpur. We believe the best way to learn engineering is by building things.
        </p>
      </div>

      <div className="about__pillars" ref={cardsRef}>
        {pillars.map((pillar, i) => (
          <div key={i} className="about__pillar glass-card stagger-item">
            <span className="about__pillar-icon">{pillar.icon}</span>
            <h3 className="about__pillar-title">{pillar.title}</h3>
            <p className="about__pillar-desc">{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* Hardware Showcase */}
      <div className="about__showcase" ref={showcaseRef}>
        <h3 className="about__showcase-title">What We Work With</h3>
        <div className="about__showcase-grid">
          {showcase.map((item, i) => (
            <div key={i} className="about__showcase-card showcase-item">
              <div className="about__showcase-img-wrap">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="about__showcase-img"
                  loading="lazy"
                />
                <div className="about__showcase-overlay" />
              </div>
              <span className="about__showcase-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about__stats">
        {stats.map((stat, i) => (
          <div key={i} className="about__stat">
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            <span className="about__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="about__circuit-decoration" aria-hidden="true">
        <svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50 H100 L120 30 H200 L220 50 H300 L310 40 H400" stroke="rgba(0,229,255,0.1)" strokeWidth="1" />
          <circle cx="100" cy="50" r="3" fill="rgba(0,229,255,0.3)" />
          <circle cx="200" cy="30" r="3" fill="rgba(0,229,255,0.3)" />
          <circle cx="300" cy="50" r="3" fill="rgba(0,229,255,0.3)" />
        </svg>
      </div>
    </section>
  )
}
