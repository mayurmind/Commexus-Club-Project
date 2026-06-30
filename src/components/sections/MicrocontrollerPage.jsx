import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useStaggerReveal, useHeroEntrance, useCardReveal } from '../../hooks/useScrollAnimation'
import '../../styles/components/ArduinoPage.css' // Reuses the shared sub-page styling

export default function MicrocontrollerPage({ onBackToHome }) {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  useStaggerReveal(containerRef, '.stagger-item')
  useHeroEntrance(heroRef)
  useCardReveal(containerRef, '.animate-card')

  // Force scroll to top on mount — clears GSAP scroll memory to prevent mid-page start
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.scrollTo(0, 0)
    ScrollTrigger.clearScrollMemory()

    const raf = requestAnimationFrame(() => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
      ScrollTrigger.refresh()
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="arduino-page" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="arduino-hero" ref={heroRef}>
        <div className="arduino-hero__bg">
          <img src="/images/microcontroller-bg.png" alt="" className="arduino-hero__bg-img" />
        </div>
        <div className="container arduino-hero__content">
          <div className="arduino-hero__badge stagger-item" style={{ color: 'var(--accent-orange)', background: 'rgba(255, 107, 53, 0.05)', borderColor: 'rgba(255, 107, 53, 0.15)' }}>
            <span>🧠</span> Microcontroller Guide
          </div>
          <h1 className="arduino-hero__title stagger-item">
            Microcontroller: The Brain Behind <span className="gradient-text">Smart Electronics</span>
          </h1>
          <p className="arduino-hero__subtitle stagger-item">
            A complete computer on a single chip, enabling devices to sense, process, and control the world.
          </p>
          <p className="arduino-hero__desc stagger-item">
            A microcontroller (MCU) is a compact integrated circuit designed to perform dedicated control tasks 
            within an embedded system. By combining a processor, memory, and input/output peripherals on a single chip, 
            microcontrollers act as the intelligence inside billions of everyday devices.
          </p>
          <div className="arduino-hero__actions stagger-item">
            <button className="btn btn-primary" onClick={onBackToHome}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: 'rotate(180deg)' }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container">
        
        {/* What is a Microcontroller & Image Showcase */}
        <section className="arduino-section">
          <div className="arduino-grid">
            <div className="col-6 stagger-item">
              <h2 className="arduino-section__title">What is a Microcontroller?</h2>
              <p className="arduino-section__subtitle">
                A microcontroller is a programmable integrated circuit engineered for specific, dedicated control tasks.
              </p>
              <p>
                Unlike general-purpose computers that run complex operating systems and multiple heavy applications, microcontrollers are built to execute a single program with high reliability, low latency, and low power consumption. Everything required to control an electronic system is contained within a single chip.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>A typical microcontroller integrates:</h4>
                <ul className="arduino-list">
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>CPU (Central Processing Unit) for command execution</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Flash Memory (permanent code storage) & RAM (temporary run variables)</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>GPIO Pins (Digital & Analog Input/Output interfaces)</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>ADC (Analog-to-Digital Converter), Timers, and Communication modules</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 stagger-item" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="project-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src="/images/atmega328-chip.png" 
                    alt="ATmega328 microchip used in Arduino boards" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 50%, rgba(10,12,22,0.95))' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span className="board-card__badge" style={{ color: 'var(--accent-orange)', background: 'rgba(255, 107, 53, 0.08)', borderColor: 'rgba(255, 107, 53, 0.2)' }}>ATmega328P Chip</span>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Integrated Silicon Architecture</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    An 8-bit AVR microcontroller that serves as the processing brain of the Arduino Uno, housing CPU registers, SRAM, EEPROM, and flash memory on a single die.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Microcontrollers Matter */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="section-header section-header--center">
            <h2 className="arduino-section__title stagger-item">Why Microcontrollers Matter</h2>
            <p className="arduino-section__subtitle stagger-item">
              They are the foundation of embedded engineering, robotics, automation, and the Internet of Things (IoT).
            </p>
          </div>

          <div className="arduino-pillars">
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🌡️</span>
              <h3 className="arduino-pillar-card__title">Process Sensor Data</h3>
              <p className="arduino-pillar-card__desc">Interpreting analog voltages or digital serial packets from temperature, distance, or motion detectors.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">⚙️</span>
              <h3 className="arduino-pillar-card__title">Control Actuators</h3>
              <p className="arduino-pillar-card__desc">Driving stepper motor drivers, relays, displays, and servo mechanisms with precise timings.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">📡</span>
              <h3 className="arduino-pillar-card__title">Interface Protocols</h3>
              <p className="arduino-pillar-card__desc">Exchanging telemetry packets with other chips using SPI, I2C, UART, or wireless modems.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🤖</span>
              <h3 className="arduino-pillar-card__title">Automate Decisions</h3>
              <p className="arduino-pillar-card__desc">Running locally compiled conditional algorithms to activate systems without human intervention.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🔋</span>
              <h3 className="arduino-pillar-card__title">Low Power Draw</h3>
              <p className="arduino-pillar-card__desc">Utilizing deep sleep co-processor modes to operate off small lithium batteries for years.</p>
            </div>
          </div>
        </section>

        {/* Internal Architecture & Signals */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            
            {/* Architecture Card */}
            <div className="col-6 stagger-item">
              <div className="project-card arch-card" style={{ height: '100%' }}>
                <div className="arch-card__header">
                  <span className="arch-card__icon">🧠</span>
                  <h3 className="arch-card__title">Internal MCU Architecture</h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
                  <div>
                    <strong style={{ color: 'var(--accent-cyan)' }}>CPU (Central Processing Unit):</strong> The logic brain that executes firmware instructions, runs arithmetic operations, and manages system data registers.
                  </div>
                  <div>
                    <strong style={{ color: 'var(--accent-orange)' }}>Flash Memory (ROM):</strong> Non-volatile memory storing permanent program code (retained when powered off).
                  </div>
                  <div>
                    <strong style={{ color: 'var(--accent-purple)' }}>RAM (Random Access Memory):</strong> Temporary runtime storage for variables and operational states (cleared on reset).
                  </div>
                  <div>
                    <strong style={{ color: 'var(--accent-cyan)' }}>EEPROM Memory:</strong> Non-volatile memory storing device settings or calibration indices that persist across power losses.
                  </div>
                  <div>
                    <strong style={{ color: 'var(--accent-orange)' }}>GPIO (General Purpose Input/Output):</strong> Peripheral lines configured to sense input triggers or drive output mechanisms.
                  </div>
                </div>
              </div>
            </div>

            {/* Signals Card */}
            <div className="col-6 stagger-item">
              <div className="project-card arch-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="arch-card__header">
                    <span className="arch-card__icon">⚡</span>
                    <h3 className="arch-card__title">Analog and Digital Signals</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1.2rem' }}>
                    Microcontrollers must handle two distinct physical signal domains:
                  </p>
                  
                  <div style={{ borderLeft: '3px solid var(--accent-cyan)', paddingLeft: '1rem', marginBottom: '1rem' }}>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>Digital Signals</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Represent binary discrete states: HIGH (1 or VCC) and LOW (0 or Ground). Ideal for toggling relay lines, monitoring button clicks, or serial transceivers.
                    </p>
                  </div>

                  <div style={{ borderLeft: '3px solid var(--accent-orange)', paddingLeft: '1rem' }}>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>Analog Signals</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Represent continuous changing ranges (e.g. 0V to 5V). Temperature, pressure, and sound produce analog curves. An **ADC (Analog-to-Digital Converter)** translates these curves into digital numbers.
                    </p>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 107, 53, 0.03)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 107, 53, 0.08)', fontSize: '0.8rem', marginTop: '1rem' }}>
                  <strong>ADC Conversion:</strong> A thermistor outputs 2.5V → The 10-bit ADC translates it to the integer 512 → Embedded program calculates a temperature value of 25°C.
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Communication & Multi-Bit Types */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            
            <div className="col-12 stagger-item">
              <h2 className="arduino-section__title">Standard Communication Interfaces</h2>
              <p className="arduino-section__subtitle">Peripherals used to transfer data between microcontrollers, sensor chips, and graphical displays.</p>
              
              <div className="arduino-pillars" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '0' }}>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-cyan)' }}>
                  <span className="arduino-pillar-card__icon">🔌</span>
                  <h3 className="arduino-pillar-card__title">UART</h3>
                  <p className="arduino-pillar-card__desc">Serial transmit (TX) and receive (RX) lines. Great for interfacing GPS boards, Bluetooth Serial modules, and debugger terminals.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-orange)' }}>
                  <span className="arduino-pillar-card__icon">🔗</span>
                  <h3 className="arduino-pillar-card__title">I2C</h3>
                  <p className="arduino-pillar-card__desc">Uses Serial Data (SDA) and Serial Clock (SCL) lines. Supports multiple chips on a single bus. Ideal for OLED screens and environmental sensors.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-purple)' }}>
                  <span className="arduino-pillar-card__icon">⚡</span>
                  <h3 className="arduino-pillar-card__title">SPI</h3>
                  <p className="arduino-pillar-card__desc">A high-speed four-wire synchronous data bus. Ideal for TFT screens, SD card modules, and low-latency digital registers.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-cyan)' }}>
                  <span className="arduino-pillar-card__icon">⚙️</span>
                  <h3 className="arduino-pillar-card__title">PWM</h3>
                  <p className="arduino-pillar-card__desc">Pulse Width Modulation pins. Generates variable average voltages to adjust motor speeds, position servos, and dim LED panels.</p>
                </div>
              </div>
            </div>

            <div className="col-12 stagger-item" style={{ marginTop: '2rem' }}>
              <h2 className="arduino-section__title">Types of Microcontrollers</h2>
              <p className="arduino-section__subtitle">Microcontrollers categorized by processor bit-width and computational capacity.</p>
              
              <div className="board-grid">
                <div className="board-card animate-card">
                  <div className="board-card__header">
                    <span className="board-card__badge">Simple</span>
                    <h3 className="board-card__title">8-bit Microcontrollers</h3>
                  </div>
                  <p className="board-card__desc">
                    Features simple architecture, very low power consumption, and simple registers. Excellent for educational labs, household sensors, and basic logic.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Examples</span>
                      <span className="board-card__spec-val">ATmega328P, ATmega2560</span>
                    </div>
                  </div>
                </div>

                <div className="board-card animate-card">
                  <div className="board-card__header">
                    <span className="board-card__badge" style={{ color: 'var(--accent-purple)', background: 'rgba(124, 58, 237, 0.08)', borderColor: 'rgba(124, 58, 237, 0.2)' }}>Industrial</span>
                    <h3 className="board-card__title">16-bit Microcontrollers</h3>
                  </div>
                  <p className="board-card__desc">
                    Offers a compromise between raw speed and low power draw. Features larger memory capacities and integrated hardware math units.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Applications</span>
                      <span className="board-card__spec-val">Automotive ECUs, machinery</span>
                    </div>
                  </div>
                </div>

                <div className="board-card animate-card">
                  <div className="board-card__header">
                    <span className="board-card__badge" style={{ color: 'var(--accent-orange)', background: 'rgba(255, 107, 53, 0.08)', borderColor: 'rgba(255, 107, 53, 0.2)' }}>High-Performance</span>
                    <h3 className="board-card__title">32-bit Microcontrollers</h3>
                  </div>
                  <p className="board-card__desc">
                    Combines high clock speeds, advanced peripherals, floating-point units, and wireless modules. Built for real-time multitasking and edge computing.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Examples</span>
                      <span className="board-card__spec-val">ESP32, STM32, RP2040</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Microcontroller Families & MCU vs MPU */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            
            {/* MCU Families Table */}
            <div className="col-12 stagger-item">
              <h2 className="arduino-section__title">Popular Microcontroller Families</h2>
              <p className="arduino-section__subtitle">Silicon families engineered by major semiconductor firms.</p>
              
              <div style={{ overflowX: 'auto' }}>
                <table className="glass-card" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', overflow: 'hidden', padding: '0' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <th style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>Family</th>
                      <th style={{ padding: '1rem var(--space-lg)', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>Manufacturer</th>
                      <th style={{ padding: '1rem var(--space-lg)', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>Common Applications</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>ATmega</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Microchip Technology</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Arduino Uno, Arduino Mega, consumer items</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>ESP32</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Espressif Systems</td>
                      <td style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)' }}>IoT networks, WiFi node arrays, BLE beacons</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>STM32</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>STMicroelectronics</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Industrial automations, robotic controllers, flight decks</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>RP2040</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Raspberry Pi</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Education, hardware prototypes, custom layouts</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>PIC</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Microchip Technology</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Consumer electronics, motor controls, industrial tools</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>MSP430</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Texas Instruments</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Ultra-low-power medical monitors, smart meters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* MCU vs MPU Table */}
            <div className="col-12 stagger-item" style={{ marginTop: '2rem' }}>
              <h2 className="arduino-section__title">Microcontroller vs Microprocessor</h2>
              <p className="arduino-section__subtitle">An essential comparison between integrated microcontrollers and general-purpose microprocessors.</p>
              
              <div style={{ overflowX: 'auto' }}>
                <table className="glass-card" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', overflow: 'hidden', padding: '0' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <th style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>Feature</th>
                      <th style={{ padding: '1rem var(--space-lg)', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>Microcontroller (MCU)</th>
                      <th style={{ padding: '1rem var(--space-lg)', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>Microprocessor (MPU)</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>CPU Core</td>
                      <td style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)' }}>Built-in on the silicon die</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Built-in on the silicon die</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>RAM & ROM Memory</td>
                      <td style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)' }}>Built-in on the same chip</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>External (Requires separate RAM/Flash chips)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>GPIO Pins & Buses</td>
                      <td style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)' }}>Built-in (Direct pin connections)</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>External (Requires interface controllers)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>Power Draw</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Very Low (Milliwatts range)</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>High (Watts range)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>Hardware Cost</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Low (Typically $1 to $5)</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>High (Typically $50 to $300+)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>Designed For</td>
                      <td style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)' }}>Dedicated control tasks (Embedded)</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>General-purpose computing tasks (OS, Apps)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>Examples</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>ATmega328, ESP32, STM32</td>
                      <td style={{ padding: '1rem var(--space-lg)' }}>Intel Core, AMD Ryzen, Apple M-Series</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* Real World Applications & Learning Path */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            <div className="col-6 stagger-item">
              <h2 className="arduino-section__title">Real-World Applications</h2>
              <p className="arduino-section__subtitle">Microcontrollers power billions of products globally across many industries.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
                <div>
                  <h5 style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>🚗 Automotive</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ABS systems, engine control units (ECU), airbag triggers, and active steering sensors.</p>
                </div>
                <div>
                  <h5 style={{ color: 'var(--accent-orange)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>🏠 Consumer Goods</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Washing machines, microwave panels, smart air conditioners, and TV remote controllers.</p>
                </div>
                <div>
                  <h5 style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>🩺 Medical Tools</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Infusion pumps, blood pressure cuffs, clinical health sensors, and portable diagnostics.</p>
                </div>
                <div>
                  <h5 style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>🏭 Factory Systems</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Programmable Logic Controllers (PLCs), motor drivers, automated sorting, and telemetry lines.</p>
                </div>
                <div>
                  <h5 style={{ color: 'var(--accent-orange)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>🤖 Robotics & Drones</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Autonomous flight decks, robotic joints, sensor integration, and AGV warehouse steering.</p>
                </div>
                <div>
                  <h5 style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>🌐 Internet of Things</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Smart light controls, remote moisture probes, automatic weather systems, and home alarms.</p>
                </div>
              </div>
            </div>

            <div className="col-6 stagger-item">
              <div className="project-card" style={{ background: 'var(--bg-secondary)', borderStyle: 'dashed' }}>
                <h3 className="project-card__title" style={{ color: 'var(--accent-orange)' }}>Educational Learning Path</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1rem' }}>
                  <div style={{ borderLeft: '2px solid rgba(0, 229, 255, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>BEGINNER</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>GPIO Control & Logic</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Learning digital logic, reading push buttons, blinking status LEDs, and using basic IDE serial terminals.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(255, 107, 53, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>INTERMEDIATE</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>Timers, Interrupts & Protocols</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Implementing hardware timer ticks, servicing external interrupts, and polling I2C/SPI sensors.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(124, 58, 237, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>ADVANCED</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>Multitasking RTOS & PCBs</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Developing with Real-Time Operating Systems (RTOS), configuring raw registers, designing custom PCBs, and testing signals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Takeaways */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            <div className="col-6 stagger-item">
              <h2 className="arduino-section__title">Microcontrollers in Commexus</h2>
              <p className="arduino-section__subtitle">At Commexus Club, microcontrollers are the foundation of every embedded engineering project.</p>
              <p>
                Members learn to configure hardware pins, code compiled firmware, and build physical prototypes using Arduino, ESP32, and STM32 boards. Through collaborative workshops and hardware sprints, students build actual solutions in:
              </p>
              <ul className="arduino-list" style={{ marginTop: '0.75rem' }}>
                <li className="arduino-list-item"><span className="arduino-list-bullet">›</span><span>Embedded C programming</span></li>
                <li className="arduino-list-item"><span className="arduino-list-bullet">›</span><span>Sensor interfacing & analog parsing</span></li>
                <li className="arduino-list-item"><span className="arduino-list-bullet">›</span><span>Robotics kinematics & navigation control</span></li>
                <li className="arduino-list-item"><span className="arduino-list-bullet">›</span><span>IoT cloud database connections</span></li>
                <li className="arduino-list-item"><span className="arduino-list-bullet">›</span><span>Custom PCB schematic design & physical assembly</span></li>
              </ul>
            </div>

            <div className="col-6 stagger-item">
              <div className="project-card" style={{ borderLeft: '3px solid var(--accent-purple)' }}>
                <h3 className="project-card__title">Key Takeaways</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
                  <div>
                    <strong>1. Complete Computer:</strong> A microcontroller is an entire computer system condensed onto a single silicon chip (CPU, RAM, ROM, I/O peripherals).
                  </div>
                  <div>
                    <strong>2. Hardware Core:</strong> It coordinates all processing, scheduling, and sensor interfacing inside an embedded system.
                  </div>
                  <div>
                    <strong>3. Foundation Skills:</strong> Learning MCU registers and coding syntax forms the entry path to advanced fields like real-time OS, edge AI, and connected cloud nodes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="arduino-cta stagger-item">
          <div className="glass-card arduino-cta__card">
            <h2 className="arduino-cta__title">Start Inventing. Start Automating. <span className="gradient-text">Start Engineering.</span></h2>
            <p className="arduino-cta__text">
              Join Commexus workshops, learn register configurations, and build the physical brains for smart hardware prototypes.
            </p>
            <button className="btn btn-primary" onClick={onBackToHome}>
              <span>Return to Commexus Home</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </section>

      </div>
    </div>
  )
}
