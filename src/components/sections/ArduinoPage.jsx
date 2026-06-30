import { useEffect, useRef } from 'react'
import { useStaggerReveal } from '../../hooks/useScrollAnimation'
import '../../styles/components/ArduinoPage.css'

export default function ArduinoPage({ onBackToHome }) {
  const containerRef = useRef(null)
  useStaggerReveal(containerRef, '.stagger-item')

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="arduino-page" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="arduino-hero">
        <div className="arduino-hero__bg">
          <img src="/images/arduino-robot.jpeg" alt="" className="arduino-hero__bg-img" />
        </div>
        <div className="container arduino-hero__content">
          <div className="arduino-hero__badge stagger-item">
            <span>⚙️</span> Arduino Guide
          </div>
          <h1 className="arduino-hero__title stagger-item">
            Arduino: Turning Ideas Into <span className="gradient-text">Real-World Electronics</span>
          </h1>
          <p className="arduino-hero__subtitle stagger-item">
            Arduino — Open-Source Electronics & Prototyping Platform
          </p>
          <p className="arduino-hero__desc stagger-item">
            Arduino is an open-source electronics platform that enables students, engineers, and creators 
            to design interactive projects by combining hardware, software, sensors, and automation. 
            From simple LED experiments to advanced robotics systems, Arduino provides a powerful 
            foundation for learning embedded systems, programming, and hardware development.
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
        
        {/* What is Arduino & Image showcase */}
        <section className="arduino-section">
          <div className="arduino-grid">
            <div className="col-6 stagger-item">
              <h2 className="arduino-section__title">What is Arduino?</h2>
              <p className="arduino-section__subtitle">
                Arduino is a family of open-source microcontroller-based development boards designed to make electronics and programming accessible.
              </p>
              <p>
                It allows users to read data from sensors, process information, and control external devices like motors, displays, LEDs, and communication modules. Arduino bridges the gap between software and hardware, making it one of the most popular platforms for embedded system development.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>An Arduino board contains:</h4>
                <ul className="arduino-list">
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>A microcontroller that acts as the brain</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Digital and analog input/output pins</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Communication interfaces</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Power management circuits</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>USB programming support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 stagger-item" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="project-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src="/images/arduino-robot.jpeg" 
                    alt="Arduino-powered robot built by club members" 
                    style={{ width: '100%', height: '100%', object-fit: 'cover', filter: 'brightness(0.9)' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 50%, rgba(10,12,22,0.95))' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span className="board-card__badge">Commexus Build</span>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Arduino Robotics Platform</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    An autonomous, sensor-integrated robotics platform designed and programmed by Commexus Club members using the ATmega328P microcontroller.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Arduino Matters */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="section-header section-header--center">
            <h2 className="arduino-section__title stagger-item">Why Arduino Matters in Engineering</h2>
            <p className="arduino-section__subtitle stagger-item">
              Arduino is often the first step toward understanding how modern electronic systems work.
            </p>
          </div>

          <div className="arduino-pillars">
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">💻</span>
              <h3 className="arduino-pillar-card__title">Embedded Programming</h3>
              <p className="arduino-pillar-card__desc">Writing programs that directly interact with and control physical hardware components.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🔌</span>
              <h3 className="arduino-pillar-card__title">Circuit Design</h3>
              <p className="arduino-pillar-card__desc">Understanding electrical connections and component schematics for building circuits.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">📡</span>
              <h3 className="arduino-pillar-card__title">Sensor Integration</h3>
              <p className="arduino-pillar-card__desc">Collecting data from the physical environment using temperature, motion, or light sensors.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🤖</span>
              <h3 className="arduino-pillar-card__title">Automation</h3>
              <p className="arduino-pillar-card__desc">Creating smart, responsive systems that perform actions automatically based on inputs.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🛠️</span>
              <h3 className="arduino-pillar-card__title">Hardware Prototyping</h3>
              <p className="arduino-pillar-card__desc">Rapidly assembling and testing engineering design concepts in a physical mockup.</p>
            </div>
          </div>
        </section>

        {/* Architecture & Programming */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            
            {/* Architecture Card */}
            <div className="col-6 stagger-item">
              <div className="project-card arch-card">
                <div className="arch-card__header">
                  <span className="arch-card__icon">🧠</span>
                  <h3 className="arch-card__title">Arduino Architecture</h3>
                </div>
                
                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>THE BRAIN — MICROCONTROLLER</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                  Arduino boards use microcontrollers such as the <strong>ATmega328P</strong> (Arduino Uno), <strong>ATmega2560</strong> (Arduino Mega), or <strong>SAMD21</strong> (Arduino Zero). The microcontroller executes instructions written in C/C++ based Arduino language.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <h5 style={{ color: 'var(--text-primary)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>🔌 Input System</h5>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      Receives environment readings:
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <li>• Temp & Humidity</li>
                      <li>• Ultrasonic & IR</li>
                      <li>• Motion & Light</li>
                      <li>• Accelerometers</li>
                    </ul>
                  </div>

                  <div>
                    <h5 style={{ color: 'var(--text-primary)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>⚙️ Output System</h5>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      Controls external devices:
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <li>• LEDs & Buzzers</li>
                      <li>• DC & Servo Motors</li>
                      <li>• Relays & Switches</li>
                      <li>• LCD & OLED Displays</li>
                    </ul>
                  </div>
                </div>

                <div style={{ marginTop: '1rem', background: 'rgba(0,229,255,0.03)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0,229,255,0.08)', fontSize: '0.8rem' }}>
                  <strong>Example:</strong> Obstacle detected (Input) → Arduino processes distance logic → Commands motor driver to change direction (Output).
                </div>
              </div>
            </div>

            {/* Programming Code Block Card */}
            <div className="col-6 stagger-item">
              <div className="project-card arch-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="arch-card__header">
                    <span className="arch-card__icon">💻</span>
                    <h3 className="arch-card__title">Arduino Programming</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem' }}>
                    Arduino programming is based on a simplified C/C++ dialect. A basic Arduino sketch consists of two fundamental structure functions:
                  </p>
                  
                  <ul className="arduino-list" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
                    <li className="arduino-list-item">
                      <span className="arduino-list-bullet">›</span>
                      <span><strong>setup():</strong> Runs once when the board starts. Used for pin modes, speed settings, and library setups.</span>
                    </li>
                    <li className="arduino-list-item">
                      <span className="arduino-list-bullet">›</span>
                      <span><strong>loop():</strong> Runs continuously. Used for reading sensors, running loops, logic rules, and output states.</span>
                    </li>
                  </ul>
                </div>

                <div className="ide-mockup">
                  <div className="ide-mockup__header">
                    <div className="ide-mockup__dots">
                      <span className="ide-mockup__dot ide-mockup__dot--red" />
                      <span className="ide-mockup__dot ide-mockup__dot--yellow" />
                      <span className="ide-mockup__dot ide-mockup__dot--green" />
                    </div>
                    <span className="ide-mockup__title">Smart_LED.ino</span>
                  </div>
                  <div className="ide-mockup__body">
                    <pre style={{ margin: 0 }}><code className="ide-code">
<span className="ide-code__comment">// Runs once at startup</span><br />
<span className="ide-code__type">void</span> <span className="ide-code__function">setup</span>() &#123;<br />
&nbsp;&nbsp;<span className="ide-code__function">pinMode</span>(<span className="ide-code__number">13</span>, <span className="ide-code__keyword">OUTPUT</span>); <span className="ide-code__comment">// onboard LED</span><br />
&#125;<br />
<br />
<span className="ide-code__comment">// Loops endlessly</span><br />
<span className="ide-code__type">void</span> <span className="ide-code__function">loop</span>() &#123;<br />
&nbsp;&nbsp;<span className="ide-code__function">digitalWrite</span>(<span className="ide-code__number">13</span>, <span className="ide-code__keyword">HIGH</span>);<br />
&nbsp;&nbsp;<span className="ide-code__function">delay</span>(<span className="ide-code__number">1000</span>);<br />
&nbsp;&nbsp;<span className="ide-code__function">digitalWrite</span>(<span className="ide-code__number">13</span>, <span className="ide-code__keyword">LOW</span>);<br />
&nbsp;&nbsp;<span className="ide-code__function">delay</span>(<span className="ide-code__number">1000</span>);<br />
&#125;
                    </code></pre>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </section>

        {/* Communication Protocols & Popular Boards */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            
            <div className="col-12 stagger-item">
              <h2 className="arduino-section__title">Communication Protocols</h2>
              <p className="arduino-section__subtitle">Arduino supports multiple industry standard communication protocols for exchanging data with other modules, sensors, and computers.</p>
              
              <div className="arduino-pillars" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '0' }}>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-cyan)' }}>
                  <span className="arduino-pillar-card__icon">🔌</span>
                  <h3 className="arduino-pillar-card__title">UART (Serial)</h3>
                  <p className="arduino-pillar-card__desc">Point-to-point asynchronous serial interface. Commonly used for PC logging, Bluetooth modules, and GPS integrations.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-purple)' }}>
                  <span className="arduino-pillar-card__icon">🔗</span>
                  <h3 className="arduino-pillar-card__title">I2C (Two-Wire)</h3>
                  <p className="arduino-pillar-card__desc">Synchronous protocol allowing multiple slave devices with only 2 wires. Widely used for OLED displays and sensors.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-orange)' }}>
                  <span className="arduino-pillar-card__icon">⚡</span>
                  <h3 className="arduino-pillar-card__title">SPI (High-Speed)</h3>
                  <p className="arduino-pillar-card__desc">Very high-speed synchronous interface. Perfect for SD card shields, RF transceivers, and complex graphics displays.</p>
                </div>
              </div>
            </div>

            <div className="col-12 stagger-item" style={{ marginTop: '2rem' }}>
              <h2 className="arduino-section__title">Popular Arduino Boards</h2>
              <p className="arduino-section__subtitle">Microcontrollers designed for different form factors, input densities, and processing requirements.</p>
              
              <div className="board-grid">
                <div className="board-card">
                  <div className="board-card__header">
                    <span className="board-card__badge">Standard</span>
                    <h3 className="board-card__title">Arduino Uno</h3>
                  </div>
                  <p className="board-card__desc">
                    The most popular microcontroller board for beginners. Easy to prototype with and widely documented.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Chip</span>
                      <span className="board-card__spec-val">ATmega328P</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">I/O Pins</span>
                      <span className="board-card__spec-val">14 Digital, 6 Analog</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Memory</span>
                      <span className="board-card__spec-val">32 KB Flash</span>
                    </div>
                  </div>
                </div>

                <div className="board-card">
                  <div className="board-card__header">
                    <span className="board-card__badge" style={{ color: 'var(--accent-purple)', background: 'rgba(124, 58, 237, 0.08)', borderColor: 'rgba(124, 58, 237, 0.2)' }}>Heavy Duty</span>
                    <h3 className="board-card__title">Arduino Mega</h3>
                  </div>
                  <p className="board-card__desc">
                    Designed for complex, larger automated systems and robotics which require dozens of digital pins and more memory.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Chip</span>
                      <span className="board-card__spec-val">ATmega2560</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">I/O Pins</span>
                      <span className="board-card__spec-val">54 Digital, 16 Analog</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Memory</span>
                      <span className="board-card__spec-val">256 KB Flash</span>
                    </div>
                  </div>
                </div>

                <div className="board-card">
                  <div className="board-card__header">
                    <span className="board-card__badge" style={{ color: 'var(--accent-cyan)', background: 'rgba(0, 229, 255, 0.08)', borderColor: 'rgba(0, 229, 255, 0.2)' }}>Compact</span>
                    <h3 className="board-card__title">Arduino Nano</h3>
                  </div>
                  <p className="board-card__desc">
                    A small, complete, and breadboard-friendly version of the Uno. Ideal for wearables and tiny smart devices.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Chip</span>
                      <span className="board-card__spec-val">ATmega328</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">I/O Pins</span>
                      <span className="board-card__spec-val">14 Digital, 8 Analog</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Memory</span>
                      <span className="board-card__spec-val">32 KB Flash</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Arduino in Robotics & Projects Showcase */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            
            <div className="col-12 stagger-item">
              <h2 className="arduino-section__title">Arduino in Robotics</h2>
              <p className="arduino-section__subtitle">Because it can easily control servo mechanisms, motors, and decode various sensor data, Arduino is the heart of amateur and educational robotics.</p>
              
              <div className="arduino-grid" style={{ marginBottom: '1.5rem' }}>
                <div className="col-6">
                  <div className="project-card" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>🤖 Line Following Robot</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      <strong>Working:</strong> Infrared sensors track reflectivity → Arduino determines direction shift → Controls motor driver to align paths.
                    </p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <strong>Components:</strong> Arduino, IR Sensors, Motor Shield, Chassis, Motors.
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="project-card" style={{ borderLeft: '3px solid var(--accent-orange)' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>🛰️ Obstacle Avoiding Robot</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      <strong>Working:</strong> Ultrasonic distance sensor emits pings → Obstacle distance detected → Arduino directs motor driver to redirect robot.
                    </p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <strong>Components:</strong> Arduino, Ultrasonic Sensor, Servo Motor, Motor Driver.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commexus Club Projects Showcase */}
            <div className="col-12 stagger-item" style={{ marginTop: '2rem' }}>
              <h2 className="arduino-section__title">Arduino Projects <span className="gradient-text">(Commexus Showcase)</span></h2>
              <p className="arduino-section__subtitle">Real solutions designed, built, and programmed by Commexus Club students.</p>

              <div className="board-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                <div className="project-card">
                  <h3 className="project-card__title">Smart Home Automation</h3>
                  <div className="project-card__features">
                    <div className="project-card__features-title">Features</div>
                    <div className="project-card__feature">Appliance Relay Control</div>
                    <div className="project-card__feature">Sensor Automation</div>
                    <div className="project-card__feature">Bluetooth App Control</div>
                  </div>
                  <div className="project-card__components">
                    <div className="project-card__components-title">Hardware</div>
                    <div className="project-card__tags">
                      <span className="project-card__tag">Arduino Uno</span>
                      <span className="project-card__tag">Relays</span>
                      <span className="project-card__tag">HC-05 BT</span>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <h3 className="project-card__title">Automatic Door System</h3>
                  <div className="project-card__features">
                    <div className="project-card__features-title">Features</div>
                    <div className="project-card__feature">Human Motion Detection</div>
                    <div className="project-card__feature">Servo Lock Control</div>
                    <div className="project-card__feature">Security Notifications</div>
                  </div>
                  <div className="project-card__components">
                    <div className="project-card__components-title">Hardware</div>
                    <div className="project-card__tags">
                      <span className="project-card__tag">Arduino Nano</span>
                      <span className="project-card__tag">PIR Sensor</span>
                      <span className="project-card__tag">Servo Motor</span>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <h3 className="project-card__title">Mini Radar System</h3>
                  <div className="project-card__features">
                    <div className="project-card__features-title">Features</div>
                    <div className="project-card__feature">180° Sweep Scanning</div>
                    <div className="project-card__feature">Distance Estimation</div>
                    <div className="project-card__feature">Sonar Visualization</div>
                  </div>
                  <div className="project-card__components">
                    <div className="project-card__components-title">Hardware</div>
                    <div className="project-card__tags">
                      <span className="project-card__tag">Arduino Uno</span>
                      <span className="project-card__tag">HC-SR04</span>
                      <span className="project-card__tag">Micro Servo</span>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <h3 className="project-card__title">Weather Station</h3>
                  <div className="project-card__features">
                    <div className="project-card__features-title">Features</div>
                    <div className="project-card__feature">Real-time Humidity</div>
                    <div className="project-card__feature">Temperature logs</div>
                    <div className="project-card__feature">OLED Status Screen</div>
                  </div>
                  <div className="project-card__components">
                    <div className="project-card__components-title">Hardware</div>
                    <div className="project-card__tags">
                      <span className="project-card__tag">Arduino Uno</span>
                      <span className="project-card__tag">DHT11 Sensor</span>
                      <span className="project-card__tag">LCD/I2C Shield</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Embedded Systems Integration & Learning Path */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            <div className="col-6 stagger-item">
              <h2 className="arduino-section__title">Arduino & Embedded Systems</h2>
              <p className="arduino-section__subtitle">Arduino provides the key educational foundation for professional electrical engineering domains.</p>
              <p style={{ marginBottom: '1rem' }}>
                Learning Arduino directly facilitates the transition into industrial-grade technology. The fundamentals of digital architecture, clock speeds, pin mapping, register control, and serial buses directly transfer to complex engineering:
              </p>
              <ul className="arduino-list">
                <li className="arduino-list-item">
                  <span className="arduino-list-bullet">›</span>
                  <span><strong>Embedded C:</strong> Code optimization, timer configurations, and bare-metal programming.</span>
                </li>
                <li className="arduino-list-item">
                  <span className="arduino-list-bullet">›</span>
                  <span><strong>ESP32 & IoT:</strong> Adding wireless, web requests, cloud dashboards, and edge nodes.</span>
                </li>
                <li className="arduino-list-item">
                  <span className="arduino-list-bullet">›</span>
                  <span><strong>Industry Fields:</strong> Applied automotive sensor rigs, industrial PLCs, and product testing boards.</span>
                </li>
              </ul>
            </div>

            <div className="col-6 stagger-item">
              <div className="project-card" style={{ background: 'var(--bg-secondary)', borderStyle: 'dashed' }}>
                <h3 className="project-card__title" style={{ color: 'var(--accent-cyan)' }}>Learning Path Through Arduino</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1rem' }}>
                  <div style={{ borderLeft: '2px solid rgba(0, 229, 255, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>LEVEL 1</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>The Basics</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Familiarity with digital inputs, analog sensors, switches, and basic conditional program structure.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(124, 58, 237, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>LEVEL 2</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>Hardware Control</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Mastering DC and servo motors, screen displays, and bus communication protocols (I2C/SPI).</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(255, 107, 53, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>LEVEL 3</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>Advanced Systems</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Integrating autonomous algorithms, complex robotics structures, wireless transceivers, and smart home automation projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="arduino-cta stagger-item">
          <div className="glass-card arduino-cta__card">
            <h2 className="arduino-cta__title">Start Building. Start Experimenting. <span className="gradient-text">Start Engineering.</span></h2>
            <p className="arduino-cta__text">
              Explore Arduino projects with Commexus Club, build real hardware prototypes, and turn your ideas into working electronic designs. Let's make an impact together!
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
