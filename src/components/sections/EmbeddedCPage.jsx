import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useStaggerReveal, useHeroEntrance, useCardReveal } from '../../hooks/useScrollAnimation'
import '../../styles/components/ArduinoPage.css' // Reuses the shared sub-page styling

export default function EmbeddedCPage({ onBackToHome }) {
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
          <img src="/images/embedded-c-bg.png" alt="" className="arduino-hero__bg-img" />
        </div>
        <div className="container arduino-hero__content">
          <div className="arduino-hero__badge stagger-item" style={{ color: 'var(--accent-orange)', background: 'rgba(255, 107, 53, 0.05)', borderColor: 'rgba(255, 107, 53, 0.15)' }}>
            <span>💻</span> Embedded C Guide
          </div>
          <h1 className="arduino-hero__title stagger-item">
            Embedded C: The Language Behind <span className="gradient-text">Smart Electronics</span>
          </h1>
          <p className="arduino-hero__subtitle stagger-item">
            Embedded C — Programming the Intelligence Inside Hardware
          </p>
          <p className="arduino-hero__desc stagger-item">
            Embedded C is a specialized programming approach used to control microcontrollers and embedded systems 
            by directly interacting with hardware registers and memory. From automotive controllers to robotics 
            and IoT networks, Embedded C allows engineers to write fast, efficient programs that connect digital logic 
            to the physical world.
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
        
        {/* What is Embedded C & Image Showcase */}
        <section className="arduino-section">
          <div className="arduino-grid">
            <div className="col-6 stagger-item">
              <h2 className="arduino-section__title">What is Embedded C?</h2>
              <p className="arduino-section__subtitle">
                Embedded C is an extension of the standard C programming language designed specifically for low-level system design.
              </p>
              <p>
                Unlike normal desktop software applications that execute on top of complex operating systems (like Windows or macOS), Embedded C programs run directly on bare-metal microcontrollers (such as ATmega328, ESP32, and ARM Cortex). This enables developers to control electronic hardware registers, pins, timers, and communication buses with absolute speed and reliability.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Core hardware components you control:</h4>
                <ul className="arduino-list">
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Sensors (Analog/Digital inputs)</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Motors, Relays, and Solenoids (Outputs)</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Displays (OLED, LCD, segment screens)</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Communication modules (WiFi, Bluetooth, CAN, RF)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 stagger-item" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="project-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src="/images/embedded-c-code.jpg" 
                    alt="Embedded C programming on screen" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 50%, rgba(10,12,22,0.95))' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span className="board-card__badge" style={{ color: 'var(--accent-orange)', background: 'rgba(255, 107, 53, 0.08)', borderColor: 'rgba(255, 107, 53, 0.2)' }}>System Language</span>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Hardware-Level Software Logic</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Writing highly efficient, compile-optimized instructions in C that directly manipulate peripheral registers, interrupts, and hardware status lines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Embedded C is Important */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="section-header section-header--center">
            <h2 className="arduino-section__title stagger-item">Why Embedded C is Critical</h2>
            <p className="arduino-section__subtitle stagger-item">
              It acts as the bridge connecting: Software Logic → Microcontroller → Hardware Action.
            </p>
          </div>

          <div className="arduino-pillars">
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🔌</span>
              <h3 className="arduino-pillar-card__title">Hardware Control</h3>
              <p className="arduino-pillar-card__desc">Interfacing directly with hardware pins, low-level internal registers, and peripheral buses.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">⏱️</span>
              <h3 className="arduino-pillar-card__title">Real-Time Programming</h3>
              <p className="arduino-pillar-card__desc">Creating deterministic code loops that respond instantly to hardware interrupts and sensory updates.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">💾</span>
              <h3 className="arduino-pillar-card__title">Memory Management</h3>
              <p className="arduino-pillar-card__desc">Optimizing ROM and RAM allocation where resources are measured in kilobytes instead of gigabytes.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🤝</span>
              <h3 className="arduino-pillar-card__title">Hardware Interfacing</h3>
              <p className="arduino-pillar-card__desc">Configuring communication timings to coordinate multiple integrated circuit chips together.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">⚡</span>
              <h3 className="arduino-pillar-card__title">System Optimization</h3>
              <p className="arduino-pillar-card__desc">Structuring hardware-polling routines to maximize execution speed and reduce power drain.</p>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="section-header section-header--center">
            <h2 className="arduino-section__title stagger-item">Embedded System Architecture</h2>
            <p className="arduino-section__subtitle stagger-item">
              An embedded system coordinates hardware components across three distinct operational layers.
            </p>
          </div>

          <div className="arduino-pillars">
            <div className="arduino-pillar-card stagger-item" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>LAYER 01</div>
              <h4 style={{ color: 'var(--text-primary)', margin: '0.4rem 0' }}>Input Layer</h4>
              <p className="arduino-pillar-card__desc">Sensors capture real-world variables (temperature, light, proximity, acceleration) and convert them to raw voltages.</p>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', marginTop: '0.5rem' }}>DHT11, Ultrasonic, PIR, MPU6050</div>
            </div>

            <div className="arduino-pillar-card stagger-item" style={{ borderLeft: '3px solid var(--accent-orange)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>LAYER 02</div>
              <h4 style={{ color: 'var(--text-primary)', margin: '0.4rem 0' }}>Processing Layer</h4>
              <p className="arduino-pillar-card__desc">The microcontroller executes the compiled Embedded C binary to parse raw signals and make automated decisions.</p>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-orange)', marginTop: '0.5rem' }}>ATmega328, ESP32, ARM Cortex</div>
            </div>

            <div className="arduino-pillar-card stagger-item" style={{ borderLeft: '3px solid var(--accent-purple)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>LAYER 03</div>
              <h4 style={{ color: 'var(--text-primary)', margin: '0.4rem 0' }}>Output Layer</h4>
              <p className="arduino-pillar-card__desc">The system drives actuators, switches, or displays to impact the physical world based on processing actions.</p>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-purple)', marginTop: '0.5rem' }}>DC/Servo Motors, Relays, OLEDs</div>
            </div>
          </div>
        </section>

        {/* Software & Hardware Concepts */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            
            {/* Programming Concepts */}
            <div className="col-6 stagger-item">
              <div className="project-card arch-card">
                <div className="arch-card__header">
                  <span className="arch-card__icon">⚙️</span>
                  <h3 className="arch-card__title">Programming Concepts</h3>
                </div>
                
                <ul className="arduino-list" style={{ fontSize: '0.9rem' }}>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span><strong>Variables & Data Types:</strong> Used for storing system states and sensor records. Common types include <code>int</code>, <code>float</code>, <code>char</code>, and unsigned data arrays.</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span><strong>Conditional Logic:</strong> Decision-making control. Example: If temperature exceeds 30°C (Input), toggle the fan relay pin (Output).</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span><strong>Iteration Loops:</strong> Continuous status checks. <code>while(1)</code> loops keep the microcontroller running and scanning pins.</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span><strong>Functions:</strong> Segmenting routines into clean, reusable modules to minimize compile sizes.</span>
                  </li>
                </ul>

                <div className="ide-mockup" style={{ marginTop: '1.5rem' }}>
                  <div className="ide-mockup__header">
                    <div className="ide-mockup__dots">
                      <span className="ide-mockup__dot ide-mockup__dot--red" />
                      <span className="ide-mockup__dot ide-mockup__dot--yellow" />
                      <span className="ide-mockup__dot ide-mockup__dot--green" />
                    </div>
                    <span className="ide-mockup__title">automation.c</span>
                  </div>
                  <div className="ide-mockup__body">
                    <pre style={{ margin: 0 }}><code className="ide-code">
<span className="ide-code__keyword">void</span> <span className="ide-code__function">checkSystem</span>() &#123;<br />
&nbsp;&nbsp;<span className="ide-code__type">int</span> temp = <span className="ide-code__function">readSensor</span>(<span className="ide-code__number">A0</span>);<br />
&nbsp;&nbsp;<span className="ide-code__keyword">if</span> (temp &gt; <span className="ide-code__number">30</span>) &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="ide-code__function">digitalWrite</span>(<span className="ide-code__number">FAN_PIN</span>, <span className="ide-code__keyword">HIGH</span>);<br />
&nbsp;&nbsp;&#125; <span className="ide-code__keyword">else</span> &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="ide-code__function">digitalWrite</span>(<span className="ide-code__number">FAN_PIN</span>, <span className="ide-code__keyword">LOW</span>);<br />
&nbsp;&nbsp;&#125;<br />
&#125;
                    </code></pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware Concepts */}
            <div className="col-6 stagger-item">
              <div className="project-card arch-card" style={{ height: '100%' }}>
                <div className="arch-card__header">
                  <span className="arch-card__icon">🔌</span>
                  <h3 className="arch-card__title">Hardware-Level Concepts</h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div>
                    <h5 style={{ color: 'var(--accent-orange)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>GPIO (General Purpose Input Output)</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Pins configured as **Inputs** (buttons, sensor logic lines) or **Outputs** (driving LEDs, triggering relays, steering motors).
                    </p>
                  </div>

                  <div>
                    <h5 style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Registers</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Special hardware memory locations. Writing values directly to registers configures chip speeds and registers peripheral states with zero delay.
                    </p>
                  </div>

                  <div>
                    <h5 style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Hardware Interrupts</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Tells the CPU to freeze current execution to handle urgent events (like emergency stops or communication data arrivals) immediately.
                    </p>
                  </div>

                  <div>
                    <h5 style={{ color: 'var(--accent-orange)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Timers & PWM</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Internal counters used for precise hardware delays, clock synchronization, or generating PWM signals to dim LEDs and spin motors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Communication & Tools */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            
            <div className="col-12 stagger-item">
              <h2 className="arduino-section__title">Communication Protocol Programming</h2>
              <p className="arduino-section__subtitle">Embedded C is used to program standard transceivers to serialize and shift data between microchips.</p>
              
              <div className="arduino-pillars" style={{ marginTop: '0' }}>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-cyan)' }}>
                  <span className="arduino-pillar-card__icon">🔌</span>
                  <h3 className="arduino-pillar-card__title">UART</h3>
                  <p className="arduino-pillar-card__desc">Transmits serial characters. Used to program GPS receivers, HC-05 Bluetooth modules, and basic CLI terminals.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-orange)' }}>
                  <span className="arduino-pillar-card__icon">🔗</span>
                  <h3 className="arduino-pillar-card__title">I2C</h3>
                  <p className="arduino-pillar-card__desc">Two-wire synchronous bus. Interconnects digital thermometers, barometers, and OLED graphical modules.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-purple)' }}>
                  <span className="arduino-pillar-card__icon">⚡</span>
                  <h3 className="arduino-pillar-card__title">SPI</h3>
                  <p className="arduino-pillar-card__desc">Four-wire high-speed bus. Manages data transfer for SD storage shields, radio units, and display controllers.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-cyan)' }}>
                  <span className="arduino-pillar-card__icon">🚗</span>
                  <h3 className="arduino-pillar-card__title">CAN Bus</h3>
                  <p className="arduino-pillar-card__desc">Controller Area Network. Used for robust, noise-resistant communication in automotive electronics and factory grids.</p>
                </div>
              </div>
            </div>

            <div className="col-12 stagger-item" style={{ marginTop: '2rem' }}>
              <h2 className="arduino-section__title">Popular Embedded C Development Tools</h2>
              <p className="arduino-section__subtitle">The compilers, debuggers, and IDEs used by embedded engineers to design firmware.</p>
              
              <div className="board-grid">
                <div className="board-card animate-card">
                  <div className="board-card__header">
                    <span className="board-card__badge">Hobbyist</span>
                    <h3 className="board-card__title">Arduino IDE</h3>
                  </div>
                  <p className="board-card__desc">
                    The entry-level standard. Simplifies C++ compiler configurations to allow quick sketch uploads to Arduino and ESP32.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">License</span>
                      <span className="board-card__spec-val">Open Source</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Best For</span>
                      <span className="board-card__spec-val">Prototypes, Education</span>
                    </div>
                  </div>
                </div>

                <div className="board-card animate-card">
                  <div className="board-card__header">
                    <span className="board-card__badge" style={{ color: 'var(--accent-purple)', background: 'rgba(124, 58, 237, 0.08)', borderColor: 'rgba(124, 58, 237, 0.2)' }}>Professional</span>
                    <h3 className="board-card__title">PlatformIO</h3>
                  </div>
                  <p className="board-card__desc">
                    An advanced ecosystem embedded in VS Code. Provides direct library managers, automated builds, and multi-board testing.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">License</span>
                      <span className="board-card__spec-val">Free Community</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Best For</span>
                      <span className="board-card__spec-val">Professional code loops</span>
                    </div>
                  </div>
                </div>

                <div className="board-card animate-card">
                  <div className="board-card__header">
                    <span className="board-card__badge" style={{ color: 'var(--accent-orange)', background: 'rgba(255, 107, 53, 0.08)', borderColor: 'rgba(255, 107, 53, 0.2)' }}>Industrial</span>
                    <h3 className="board-card__title">STM32Cube / Keil</h3>
                  </div>
                  <p className="board-card__desc">
                    Professional grade compilers. Offers step-by-step register debugging, clock trees configs, and compiler optimizations for ARM controllers.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">License</span>
                      <span className="board-card__spec-val">Proprietary / Paid</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Best For</span>
                      <span className="board-card__spec-val">ARM chips, mass products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Embedded C Projects Showcase */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="section-header section-header--center">
            <h2 className="arduino-section__title stagger-item">Embedded C Projects <span className="gradient-text">(Commexus Showcase)</span></h2>
            <p className="arduino-section__subtitle stagger-item">
              Practical automation and robotic control systems engineered by club members.
            </p>
          </div>

          <div className="board-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <div className="project-card animate-card">
              <h3 className="project-card__title">LED Control System</h3>
              <div className="project-card__features">
                <div className="project-card__features-title">Core Concepts</div>
                <div className="project-card__feature">GPIO Pin registers</div>
                <div className="project-card__feature">Digital signal timing</div>
                <div className="project-card__feature">PWM brightness loops</div>
              </div>
              <div className="project-card__components">
                <div className="project-card__components-title">Hardware</div>
                <div className="project-card__tags">
                  <span className="project-card__tag">ATmega328P</span>
                  <span className="project-card__tag">RGB Arrays</span>
                  <span className="project-card__tag">PWM Outputs</span>
                </div>
              </div>
            </div>

            <div className="project-card animate-card">
              <h3 className="project-card__title">Automatic Door System</h3>
              <div className="project-card__features">
                <div className="project-card__features-title">Core Concepts</div>
                <div className="project-card__feature">Sensor parsing triggers</div>
                <div className="project-card__feature">Servo controller sweep</div>
                <div className="project-card__feature">Safety limit stops</div>
              </div>
              <div className="project-card__components">
                <div className="project-card__components-title">Hardware</div>
                <div className="project-card__tags">
                  <span className="project-card__tag">Arduino Uno</span>
                  <span className="project-card__tag">PIR sensor</span>
                  <span className="project-card__tag">Servo Motor</span>
                </div>
              </div>
            </div>

            <div className="project-card animate-card">
              <h3 className="project-card__title">Robot Control System</h3>
              <div className="project-card__features">
                <div className="project-card__features-title">Core Concepts</div>
                <div className="project-card__feature">Motor steering logic</div>
                <div className="project-card__feature">Obstacle avoidance rules</div>
                <div className="project-card__feature">Telemetry logging</div>
              </div>
              <div className="project-card__components">
                <div className="project-card__components-title">Hardware</div>
                <div className="project-card__tags">
                  <span className="project-card__tag">ESP32 Core</span>
                  <span className="project-card__tag">Ultrasonic</span>
                  <span className="project-card__tag">Motor Shield</span>
                </div>
              </div>
            </div>

            <div className="project-card animate-card">
              <h3 className="project-card__title">Smart Monitoring</h3>
              <div className="project-card__features">
                <div className="project-card__features-title">Core Concepts</div>
                <div className="project-card__feature">Sensor arrays polling</div>
                <div className="project-card__feature">I2C Screen graphics</div>
                <div className="project-card__feature">Network API updates</div>
              </div>
              <div className="project-card__components">
                <div className="project-card__components-title">Hardware</div>
                <div className="project-card__tags">
                  <span className="project-card__tag">ESP32 DevKit</span>
                  <span className="project-card__tag">DHT22 Module</span>
                  <span className="project-card__tag">OLED Screen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded C Applications & Learning Path */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            <div className="col-6 stagger-item">
              <h2 className="arduino-section__title">Embedded C Applications</h2>
              <p className="arduino-section__subtitle">Embedded C powers the technology that drives modern society.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.25rem' }}>🚗</span>
                  <div>
                    <h5 style={{ color: 'var(--text-primary)', margin: 0 }}>Automotive Systems</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Powers Anti-lock Braking Systems (ABS), engine control units (ECU), and sensor meshes.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.25rem' }}>🤖</span>
                  <div>
                    <h5 style={{ color: 'var(--text-primary)', margin: 0 }}>Robotics & Automation</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Directs kinematics equations, sensor metrics parsing, and motor trajectory sweeps.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.25rem' }}>🌐</span>
                  <div>
                    <h5 style={{ color: 'var(--text-primary)', margin: 0 }}>IoT Smart Devices</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Handles remote data relays, low-power states, and cloud wireless updates.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.25rem' }}>🩺</span>
                  <div>
                    <h5 style={{ color: 'var(--text-primary)', margin: 0 }}>Medical Devices</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Controls clinical health monitors, heart rate monitors, and diagnostics systems.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 stagger-item">
              <div className="project-card" style={{ background: 'var(--bg-secondary)', borderStyle: 'dashed' }}>
                <h3 className="project-card__title" style={{ color: 'var(--accent-orange)' }}>Learning Path</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1rem' }}>
                  <div style={{ borderLeft: '2px solid rgba(0, 229, 255, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>BEGINNER</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>C Syntax & Flow</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Learning C datatypes, loop syntax, conditional statements, and console log builders.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(255, 107, 53, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>INTERMEDIATE</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>GPIO & Interfacing</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Programming GPIO lines, configuring timers, and reading analog-to-digital sensor inputs.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(124, 58, 237, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>ADVANCED</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>Real-Time OS & Kernels</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Structuring Real-Time Operating Systems (RTOS), writing custom drivers, and configuring registers on ARM Cortex.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="arduino-cta stagger-item">
          <div className="glass-card arduino-cta__card">
            <h2 className="arduino-cta__title">Start Coding. Start Controlling. <span className="gradient-text">Start Engineering.</span></h2>
            <p className="arduino-cta__text">
              Master Embedded C with Commexus Club, build hardware intelligence, and program innovation from the ground up.
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
