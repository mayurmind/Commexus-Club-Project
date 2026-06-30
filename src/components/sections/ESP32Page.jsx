import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useStaggerReveal, useHeroEntrance, useCardReveal } from '../../hooks/useScrollAnimation'
import '../../styles/components/ArduinoPage.css' // Reuses the shared sub-page styling

export default function ESP32Page({ onBackToHome }) {
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
          <img src="/images/esp32-bg.png" alt="" className="arduino-hero__bg-img" />
        </div>
        <div className="container arduino-hero__content">
          <div className="arduino-hero__badge stagger-item" style={{ color: 'var(--accent-purple)', background: 'rgba(124, 58, 237, 0.05)', borderColor: 'rgba(124, 58, 237, 0.15)' }}>
            <span>⚡</span> ESP32 Guide
          </div>
          <h1 className="arduino-hero__title stagger-item">
            ESP32: Connecting Intelligence <span className="gradient-text">With the Internet</span>
          </h1>
          <p className="arduino-hero__subtitle stagger-item">
            ESP32 — The Connected Microcontroller for Modern IoT Systems
          </p>
          <p className="arduino-hero__desc stagger-item">
            ESP32 is a powerful low-cost microcontroller platform with built-in WiFi, Bluetooth, 
            and advanced processing capabilities. Designed by Espressif Systems, it enables engineers 
            and creators to build intelligent, connected devices that can sense, process, communicate, 
            and interact with the cloud.
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
        
        {/* What is ESP32 & Image showcase */}
        <section className="arduino-section">
          <div className="arduino-grid">
            <div className="col-6 stagger-item">
              <h2 className="arduino-section__title">What is ESP32?</h2>
              <p className="arduino-section__subtitle">
                ESP32 is a family of highly integrated microcontroller boards developed by Espressif Systems.
              </p>
              <p>
                Unlike traditional microcontrollers, ESP32 combines high-performance dual-core processing, wireless communication, low-power operation, and multiple hardware interfaces. It allows developers to create connected electronic systems without requiring separate WiFi or Bluetooth modules.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Unlike traditional MCUs, ESP32 integrates:</h4>
                <ul className="arduino-list">
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>High-performance dual-core processing</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Built-in 2.4 GHz WiFi and Bluetooth (Classic & BLE)</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Ultra-low power co-processor modes</span>
                  </li>
                  <li className="arduino-list-item">
                    <span className="arduino-list-bullet">›</span>
                    <span>Dozens of native GPIO pins and serial buses</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 stagger-item" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="project-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src="/images/esp32-board.jpeg" 
                    alt="ESP32 microcontroller for IoT projects" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 50%, rgba(10,12,22,0.95))' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span className="board-card__badge" style={{ color: 'var(--accent-purple)', background: 'rgba(124, 58, 237, 0.08)', borderColor: 'rgba(124, 58, 237, 0.2)' }}>IoT Platform</span>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>ESP32 Development Node</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Espressif's high-performance microcontroller offering 240MHz processing speed, native WiFi, and Bluetooth Classic/Low Energy for connected IoT setups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why ESP32 Matters */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="section-header section-header--center">
            <h2 className="arduino-section__title stagger-item">Why ESP32 Matters in Embedded Systems</h2>
            <p className="arduino-section__subtitle stagger-item">
              ESP32 represents the transition from basic standalone electronics to connected intelligent systems.
            </p>
          </div>

          <div className="arduino-pillars">
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🌐</span>
              <h3 className="arduino-pillar-card__title">Internet of Things (IoT)</h3>
              <p className="arduino-pillar-card__desc">Connecting physical hardware devices to home networks, MQTT brokers, and cloud databases.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">📡</span>
              <h3 className="arduino-pillar-card__title">Wireless Communication</h3>
              <p className="arduino-pillar-card__desc">Using WiFi and Bluetooth/BLE for local remote controls and low-power sensor mesh connections.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🧠</span>
              <h3 className="arduino-pillar-card__title">Real-Time Processing</h3>
              <p className="arduino-pillar-card__desc">Using dual cores to process sensor metrics on one core while handling WiFi network tasks on the other.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">💻</span>
              <h3 className="arduino-pillar-card__title">Embedded Programming</h3>
              <p className="arduino-pillar-card__desc">Writing optimized firmware that directly interfaces with microprocessors, flash memory, and busses.</p>
            </div>
            <div className="arduino-pillar-card stagger-item">
              <span className="arduino-pillar-card__icon">🏠</span>
              <h3 className="arduino-pillar-card__title">Smart Automation</h3>
              <p className="arduino-pillar-card__desc">Designing responsive systems that make local decisions or trigger remote actions automatically.</p>
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
                  <h3 className="arch-card__title">ESP32 Architecture</h3>
                </div>
                
                <h4 style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>THE BRAIN — DUAL-CORE PROCESSOR</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  ESP32 boards utilize a high-performance **Xtensa dual-core 32-bit LX6 microprocessor** running at clock speeds up to **240 MHz**. This enables high computational capability for reading complex sensors, running calculations, and managing wireless buffers simultaneously.
                </p>

                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>BUILT-IN WIRELESS FEATURES</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h5 style={{ color: 'var(--text-primary)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>🌐 WiFi Connectivity</h5>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      2.4 GHz 802.11 b/g/n:
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <li>• Host local Web Servers</li>
                      <li>• Cloud database integrations</li>
                      <li>• Network time synchronizations</li>
                      <li>• MQTT broker communication</li>
                    </ul>
                  </div>

                  <div>
                    <h5 style={{ color: 'var(--text-primary)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>📡 Bluetooth Support</h5>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      Classic + Low Energy (BLE):
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <li>• Bluetooth Serial pipes</li>
                      <li>• Bluetooth Low Energy beacons</li>
                      <li>• Smartwatch/Phone pairings</li>
                      <li>• Battery-friendly sensor feeds</li>
                    </ul>
                  </div>
                </div>

                <div style={{ background: 'rgba(124, 58, 237, 0.03)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(124, 58, 237, 0.08)', fontSize: '0.8rem' }}>
                  <strong>Example:</strong> An environmental sensor detects gas (Input) → ESP32 parses metrics, triggers a local buzzer output, and posts data via WiFi to an internet IoT dashboard.
                </div>
              </div>
            </div>

            {/* Programming Code Block Card */}
            <div className="col-6 stagger-item">
              <div className="project-card arch-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="arch-card__header">
                    <span className="arch-card__icon">💻</span>
                    <h3 className="arch-card__title">ESP32 Programming</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem' }}>
                    ESP32 can be programmed using the **Arduino IDE** (in C/C++), **PlatformIO**, **MicroPython** (Python), or the professional **ESP-IDF** (Espressif IoT Development Framework).
                  </p>
                  
                  <ul className="arduino-list" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
                    <li className="arduino-list-item">
                      <span className="arduino-list-bullet">›</span>
                      <span><strong>setup():</strong> Initial configuration. Configures WiFi endpoints, pin modes, and registers communication ports.</span>
                    </li>
                    <li className="arduino-list-item">
                      <span className="arduino-list-bullet">›</span>
                      <span><strong>loop():</strong> Continuous loop. Performs environmental polling, handles client web requests, and listens to incoming Bluetooth bytes.</span>
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
                    <span className="ide-mockup__title">ESP32_WiFi.ino</span>
                  </div>
                  <div className="ide-mockup__body">
                    <pre style={{ margin: 0 }}><code className="ide-code">
<span className="ide-code__keyword">#include</span> <span className="ide-code__string">&lt;WiFi.h&gt;</span><br />
<br />
<span className="ide-code__type">void</span> <span className="ide-code__function">setup</span>() &#123;<br />
&nbsp;&nbsp;<span className="ide-code__function">Serial</span>.<span className="ide-code__function">begin</span>(<span className="ide-code__number">115200</span>);<br />
&nbsp;&nbsp;<span className="ide-code__function">WiFi</span>.<span className="ide-code__function">begin</span>(<span className="ide-code__string">"SSID"</span>, <span className="ide-code__string">"PASS"</span>);<br />
&#125;<br />
<br />
<span className="ide-code__type">void</span> <span className="ide-code__function">loop</span>() &#123;<br />
&nbsp;&nbsp;<span className="ide-code__keyword">if</span> (<span className="ide-code__function">WiFi</span>.<span className="ide-code__function">status</span>() == <span className="ide-code__keyword">WL_CONNECTED</span>) &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="ide-code__function">Serial</span>.<span className="ide-code__function">println</span>(<span className="ide-code__string">"WiFi Connected!"</span>);<br />
&nbsp;&nbsp;&#125;<br />
&nbsp;&nbsp;<span className="ide-code__function">delay</span>(<span className="ide-code__number">5000</span>);<br />
&#125;
                    </code></pre>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="section-header section-header--center">
            <h2 className="arduino-section__title stagger-item">ESP32 vs Arduino</h2>
            <p className="arduino-section__subtitle stagger-item">
              A quick technical comparison detailing the hardware specifications and IoT capacity.
            </p>
          </div>

          <div className="col-12 stagger-item" style={{ overflowX: 'auto' }}>
            <table className="glass-card" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', overflow: 'hidden', padding: '0' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <th style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>Feature</th>
                  <th style={{ padding: '1rem var(--space-lg)', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>Arduino Uno</th>
                  <th style={{ padding: '1rem var(--space-lg)', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>ESP32</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                  <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>Processor</td>
                  <td style={{ padding: '1rem var(--space-lg)' }}>8-bit ATmega328P (Basic MCU)</td>
                  <td style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)' }}>32-bit Dual-Core Xtensa LX6 (High-performance)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                  <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>Clock Speed</td>
                  <td style={{ padding: '1rem var(--space-lg)' }}>16 MHz</td>
                  <td style={{ padding: '1rem var(--space-lg)' }}>Up to 240 MHz</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                  <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>WiFi Connectivity</td>
                  <td style={{ padding: '1rem var(--space-lg)' }}>None (Requires external shield)</td>
                  <td style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)' }}>Built-in 2.4 GHz WiFi</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                  <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>Bluetooth Support</td>
                  <td style={{ padding: '1rem var(--space-lg)' }}>None (Requires external module)</td>
                  <td style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)' }}>Built-in Bluetooth Classic & BLE</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                  <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>SRAM / RAM</td>
                  <td style={{ padding: '1rem var(--space-lg)' }}>2 KB</td>
                  <td style={{ padding: '1rem var(--space-lg)' }}>520 KB</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                  <td style={{ padding: '1rem var(--space-lg)', fontWeight: '600', color: 'var(--text-primary)' }}>IoT Suitability</td>
                  <td style={{ padding: '1rem var(--space-lg)' }}>Limited / Complex</td>
                  <td style={{ padding: '1rem var(--space-lg)', color: 'var(--accent-cyan)' }}>Designed specifically for IoT & Cloud</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Protocols & Dev Boards */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            
            <div className="col-12 stagger-item">
              <h2 className="arduino-section__title">Communication Protocols</h2>
              <p className="arduino-section__subtitle">ESP32 offers extensive hardware support for serial communication protocols to link controllers, chips, sensors, and screens.</p>
              
              <div className="arduino-pillars" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '0' }}>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-cyan)' }}>
                  <span className="arduino-pillar-card__icon">🔌</span>
                  <h3 className="arduino-pillar-card__title">UART</h3>
                  <p className="arduino-pillar-card__desc">Point-to-point asynchronous serial. Interfaces with GPS modules, hardware modems, and Bluetooth serial transceivers.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-purple)' }}>
                  <span className="arduino-pillar-card__icon">🔗</span>
                  <h3 className="arduino-pillar-card__title">I2C</h3>
                  <p className="arduino-pillar-card__desc">Inter-Integrated Circuit bus protocol. Connects multiple sensors, environmental meters, and OLED status screens with only two wires.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-orange)' }}>
                  <span className="arduino-pillar-card__icon">⚡</span>
                  <h3 className="arduino-pillar-card__title">SPI</h3>
                  <p className="arduino-pillar-card__desc">High-speed Serial Peripheral Interface. Handles display panels, camera modules, SD card modules, and high-frequency hardware registers.</p>
                </div>
                <div className="arduino-pillar-card" style={{ borderTop: '2px solid var(--accent-cyan)' }}>
                  <span className="arduino-pillar-card__icon">⚙️</span>
                  <h3 className="arduino-pillar-card__title">PWM</h3>
                  <p className="arduino-pillar-card__desc">Pulse Width Modulation output pins. Essential for motor speed control, LED dimming, and precision servo motor angles.</p>
                </div>
              </div>
            </div>

            <div className="col-12 stagger-item" style={{ marginTop: '2rem' }}>
              <h2 className="arduino-section__title">Popular ESP32 Development Boards</h2>
              <p className="arduino-section__subtitle">Different configurations designed for prototyping, production modules, and multimedia systems.</p>
              
              <div className="board-grid">
                <div className="board-card animate-card">
                  <div className="board-card__header">
                    <span className="board-card__badge">Standard</span>
                    <h3 className="board-card__title">ESP32 DevKit V1</h3>
                  </div>
                  <p className="board-card__desc">
                    The most common development board for hobbyists. Features full breadboard access, USB programmer, and native antenna.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Form Factor</span>
                      <span className="board-card__spec-val">30-pin DIP layout</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Features</span>
                      <span className="board-card__spec-val">WiFi + BT, MicroUSB</span>
                    </div>
                  </div>
                </div>

                <div className="board-card animate-card">
                  <div className="board-card__header">
                    <span className="board-card__badge" style={{ color: 'var(--accent-purple)', background: 'rgba(124, 58, 237, 0.08)', borderColor: 'rgba(124, 58, 237, 0.2)' }}>Product Module</span>
                    <h3 className="board-card__title">ESP32 WROOM</h3>
                  </div>
                  <p className="board-card__desc">
                    A shield-soldered module designed specifically for integration in custom PCBs and commercial hardware products.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Form Factor</span>
                      <span className="board-card__spec-val">Surface Mount (SMD)</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Features</span>
                      <span className="board-card__spec-val">FCC Certified Shield</span>
                    </div>
                  </div>
                </div>

                <div className="board-card animate-card">
                  <div className="board-card__header">
                    <span className="board-card__badge" style={{ color: 'var(--accent-orange)', background: 'rgba(255, 107, 53, 0.08)', borderColor: 'rgba(255, 107, 53, 0.2)' }}>Multimedia</span>
                    <h3 className="board-card__title">ESP32-CAM</h3>
                  </div>
                  <p className="board-card__desc">
                    An ultra-small board combining the ESP32 chip with an OV2640 camera connector, micro-SD slot, and flash LED.
                  </p>
                  <div className="board-card__specs">
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Resolution</span>
                      <span className="board-card__spec-val">2 MP Camera</span>
                    </div>
                    <div className="board-card__spec">
                      <span className="board-card__spec-name">Applications</span>
                      <span className="board-card__spec-val">Face Recog, Streaming</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Popular ESP32 Libraries */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="section-header section-header--center">
            <h2 className="arduino-section__title stagger-item">Popular ESP32 Libraries</h2>
            <p className="arduino-section__subtitle stagger-item">
              Pre-written code collections that simplify network requests, security, protocols, and hardware peripherals.
            </p>
          </div>

          <div className="library-grid">
            <div className="library-card stagger-item animate-card">
              <div className="library-card__header">
                <span style={{ fontSize: '1.5rem' }}>🌐</span>
                <h3 className="library-card__title">1. WiFi Library</h3>
              </div>
              <p className="library-card__purpose">
                Connects ESP32 to access points, manages connections, and configurations.
              </p>
              <div className="library-card__details">
                <div className="library-card__details-title">Applications</div>
                <ul className="library-card__items">
                  <li className="library-card__item">Internet cloud logging</li>
                  <li className="library-card__item">Hosting web portals</li>
                  <li className="library-card__item">Network synchronization</li>
                </ul>
              </div>
            </div>

            <div className="library-card stagger-item">
              <div className="library-card__header">
                <span style={{ fontSize: '1.5rem' }}>🖥️</span>
                <h3 className="library-card__title">2. WebServer</h3>
              </div>
              <p className="library-card__purpose">
                Hosts HTML/CSS control panels directly on the ESP32 for browser control.
              </p>
              <div className="library-card__details">
                <div className="library-card__details-title">Applications</div>
                <ul className="library-card__items">
                  <li className="library-card__item">Browser control panels</li>
                  <li className="library-card__item">Wireless toggles & switches</li>
                  <li className="library-card__item">Local sensor monitoring</li>
                </ul>
              </div>
            </div>

            <div className="library-card stagger-item">
              <div className="library-card__header">
                <span style={{ fontSize: '1.5rem' }}>⚡</span>
                <h3 className="library-card__title">3. ESPAsyncWebServer</h3>
              </div>
              <p className="library-card__purpose">
                Creates asynchronous, non-blocking HTTP web servers.
              </p>
              <div className="library-card__details">
                <div className="library-card__details-title">Advantages</div>
                <ul className="library-card__items">
                  <li className="library-card__item">Supports multiple client hooks</li>
                  <li className="library-card__item">Faster system loop speeds</li>
                  <li className="library-card__item">Perfect for IoT dashboards</li>
                </ul>
              </div>
            </div>

            <div className="library-card stagger-item">
              <div className="library-card__header">
                <span style={{ fontSize: '1.5rem' }}>🔵</span>
                <h3 className="library-card__title">4. BluetoothSerial</h3>
              </div>
              <p className="library-card__purpose">
                Implements Bluetooth Classic serial port profiles for wireless commands.
              </p>
              <div className="library-card__details">
                <div className="library-card__details-title">Applications</div>
                <ul className="library-card__items">
                  <li className="library-card__item">Mobile terminal interfaces</li>
                  <li className="library-card__item">Wireless robot control</li>
                  <li className="library-card__item">Legacy serial updates</li>
                </ul>
              </div>
            </div>

            <div className="library-card stagger-item">
              <div className="library-card__header">
                <span style={{ fontSize: '1.5rem' }}>🔋</span>
                <h3 className="library-card__title">5. BLE Library</h3>
              </div>
              <p className="library-card__purpose">
                Creates low-power Bluetooth beacons, services, and client profiles.
              </p>
              <div className="library-card__details">
                <div className="library-card__details-title">Applications</div>
                <ul className="library-card__items">
                  <li className="library-card__item">Smart bands & trackers</li>
                  <li className="library-card__item">BLE proximity beacons</li>
                  <li className="library-card__item">Battery friendly gadgets</li>
                </ul>
              </div>
            </div>

            <div className="library-card stagger-item">
              <div className="library-card__header">
                <span style={{ fontSize: '1.5rem' }}>📡</span>
                <h3 className="library-card__title">6. PubSubClient</h3>
              </div>
              <p className="library-card__purpose">
                Implements MQTT protocol clients for cloud-integrated IoT messaging.
              </p>
              <div className="library-card__details">
                <div className="library-card__details-title">Applications</div>
                <ul className="library-card__items">
                  <li className="library-card__item">AWS IoT / Adafruit IO feeds</li>
                  <li className="library-card__item">Subscribing to remote triggers</li>
                  <li className="library-card__item">Fast publishing sensor arrays</li>
                </ul>
              </div>
            </div>

            <div className="library-card stagger-item">
              <div className="library-card__header">
                <span style={{ fontSize: '1.5rem' }}>📋</span>
                <h3 className="library-card__title">7. ArduinoJson</h3>
              </div>
              <p className="library-card__purpose">
                Efficient JSON parsing, serialization, and filtering for web API hooks.
              </p>
              <div className="library-card__details">
                <div className="library-card__details-title">Applications</div>
                <ul className="library-card__items">
                  <li className="library-card__item">HTTP API responses</li>
                  <li className="library-card__item">Formatting payload packages</li>
                  <li className="library-card__item">Configuration files saving</li>
                </ul>
              </div>
            </div>

            <div className="library-card stagger-item">
              <div className="library-card__header">
                <span style={{ fontSize: '1.5rem' }}>⏰</span>
                <h3 className="library-card__title">8. NTPClient</h3>
              </div>
              <p className="library-card__purpose">
                Queries Network Time Protocol servers to synchronize clock time.
              </p>
              <div className="library-card__details">
                <div className="library-card__details-title">Applications</div>
                <ul className="library-card__items">
                  <li className="library-card__item">Digital clocks scheduling</li>
                  <li className="library-card__item">Database logging timestamps</li>
                  <li className="library-card__item">Automation timetables</li>
                </ul>
              </div>
            </div>

            <div className="library-card stagger-item">
              <div className="library-card__header">
                <span style={{ fontSize: '1.5rem' }}>🌈</span>
                <h3 className="library-card__title">9. FastLED</h3>
              </div>
              <p className="library-card__purpose">
                High-performance animations for WS2812B/Neopixel addressable LED strips.
              </p>
              <div className="library-card__details">
                <div className="library-card__details-title">Applications</div>
                <ul className="library-card__items">
                  <li className="library-card__item">Decorative smart lights</li>
                  <li className="library-card__item">Visual status updates</li>
                  <li className="library-card__item">LED matrices animations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Library Ecosystem Card */}
          <div className="project-card stagger-item" style={{ marginTop: '2rem', borderLeft: '3px solid var(--accent-purple)' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>ESP32 Library Ecosystem</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              With thousands of community-developed libraries, ESP32 allows rapid development of complex connected robotics, IoT hubs, sensor meshes, and wireless automation systems. Libraries eliminate the need to write custom sockets, TLS protocols, or JSON validators, letting engineers focus on solving real-world challenges.
            </p>
          </div>
        </section>

        {/* ESP32 in Robotics & Projects Showcase */}
        <section className="arduino-section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="arduino-grid">
            
            <div className="col-12 stagger-item">
              <h2 className="arduino-section__title">ESP32 in Robotics</h2>
              <p className="arduino-section__subtitle">By combining processing capacity and wireless connections, ESP32 powers autonomous connected drones, telemetry rovers, and smart bots.</p>
              
              <div className="arduino-grid" style={{ marginBottom: '1.5rem' }}>
                <div className="col-6">
                  <div className="project-card" style={{ borderLeft: '3px solid var(--accent-purple)' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>🌐 WiFi Remote Robot</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      <strong>Working:</strong> Hosts local web sockets → Client connects via phone browser → Sends steering signals → ESP32 adjusts motor outputs.
                    </p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <strong>Components:</strong> ESP32, L298N Motor Driver, Li-Ion Pack, Rover Chassis.
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="project-card" style={{ borderLeft: '3px solid var(--accent-orange)' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>📷 Vision Monitoring Rover</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      <strong>Working:</strong> ESP32-CAM captures JPG stream → Broadcasts video feed to local network → Detects motion and triggers alarms.
                    </p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <strong>Components:</strong> ESP32-CAM, PIR Motion Sensor, SG90 Servo, Battery.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commexus Club Projects Showcase */}
            <div className="col-12 stagger-item" style={{ marginTop: '2rem' }}>
              <h2 className="arduino-section__title">ESP32 Projects <span className="gradient-text">(Commexus Showcase)</span></h2>
              <p className="arduino-section__subtitle">Connected smart hardware solutions built and deployed by Commexus members.</p>

              <div className="board-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                <div className="project-card animate-card">
                  <h3 className="project-card__title">IoT Smart Home Hub</h3>
                  <div className="project-card__features">
                    <div className="project-card__features-title">Features</div>
                    <div className="project-card__feature">Dashboard web controls</div>
                    <div className="project-card__feature">Automated power relays</div>
                    <div className="project-card__feature">Blynk/IFTTT triggers</div>
                  </div>
                  <div className="project-card__components">
                    <div className="project-card__components-title">Hardware</div>
                    <div className="project-card__tags">
                      <span className="project-card__tag">ESP32 DevKit</span>
                      <span className="project-card__tag">Relay Shield</span>
                      <span className="project-card__tag">WiFi Server</span>
                    </div>
                  </div>
                </div>

                <div className="project-card animate-card">
                  <h3 className="project-card__title">IoT Weather Station</h3>
                  <div className="project-card__features">
                    <div className="project-card__features-title">Features</div>
                    <div className="project-card__feature">Cloud logging updates</div>
                    <div className="project-card__feature">Local OLED display</div>
                    <div className="project-card__feature">High humidity alert</div>
                  </div>
                  <div className="project-card__components">
                    <div className="project-card__components-title">Hardware</div>
                    <div className="project-card__tags">
                      <span className="project-card__tag">ESP32 WROOM</span>
                      <span className="project-card__tag">DHT22 Sensor</span>
                      <span className="project-card__tag">SSD1306 OLED</span>
                    </div>
                  </div>
                </div>

                <div className="project-card animate-card">
                  <h3 className="project-card__title">Smart Security System</h3>
                  <div className="project-card__features">
                    <div className="project-card__features-title">Features</div>
                    <div className="project-card__feature">WiFi video streaming</div>
                    <div className="project-card__feature">Telegram alert captures</div>
                    <div className="project-card__feature">Motion alarm triggering</div>
                  </div>
                  <div className="project-card__components">
                    <div className="project-card__components-title">Hardware</div>
                    <div className="project-card__tags">
                      <span className="project-card__tag">ESP32-CAM</span>
                      <span className="project-card__tag">PIR Sensor</span>
                      <span className="project-card__tag">Buzzer Alert</span>
                    </div>
                  </div>
                </div>

                <div className="project-card animate-card">
                  <h3 className="project-card__title">WiFi Controlled Robot</h3>
                  <div className="project-card__features">
                    <div className="project-card__features-title">Features</div>
                    <div className="project-card__feature">Web Socket controls</div>
                    <div className="project-card__feature">Low latency steering</div>
                    <div className="project-card__feature">Live telemetry logs</div>
                  </div>
                  <div className="project-card__components">
                    <div className="project-card__components-title">Hardware</div>
                    <div className="project-card__tags">
                      <span className="project-card__tag">ESP32 Node</span>
                      <span className="project-card__tag">L298N Board</span>
                      <span className="project-card__tag">DC Motors</span>
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
              <h2 className="arduino-section__title">ESP32 in Industry</h2>
              <p className="arduino-section__subtitle">ESP32 boards are widely integrated in commercial IoT solutions and industrial testing rigs.</p>
              <p style={{ marginBottom: '1rem' }}>
                Skills acquired during ESP32 projects directly transfer to industrial-level engineering roles:
              </p>
              <ul className="arduino-list">
                <li className="arduino-list-item">
                  <span className="arduino-list-bullet">›</span>
                  <span><strong>Smart Devices:</strong> Developing commercial wearables, home appliances, and consumer electronics modules.</span>
                </li>
                <li className="arduino-list-item">
                  <span className="arduino-list-bullet">›</span>
                  <span><strong>Industrial IoT:</strong> Designing remote factory monitoring stations and low-power telemetry nodes.</span>
                </li>
                <li className="arduino-list-item">
                  <span className="arduino-list-bullet">›</span>
                  <span><strong>Autonomous Systems:</strong> Directing connected warehouse AGVs, drone arrays, and automation networks.</span>
                </li>
              </ul>
            </div>

            <div className="col-6 stagger-item">
              <div className="project-card" style={{ background: 'var(--bg-secondary)', borderStyle: 'dashed' }}>
                <h3 className="project-card__title" style={{ color: 'var(--accent-purple)' }}>Learning Path Through ESP32</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1rem' }}>
                  <div style={{ borderLeft: '2px solid rgba(0, 229, 255, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>BEGINNER</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>GPIO Control & Sensors</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Mastering standard inputs/outputs, reading digital and analog sensors, and using basic serial monitors.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(124, 58, 237, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>INTERMEDIATE</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>WiFi & Local Servers</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Configuring WiFi connections, hosting local web portals, and implementing classic Bluetooth commands.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(255, 107, 53, 0.3)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>ADVANCED</div>
                    <h5 style={{ color: 'var(--text-primary)', margin: '2px 0' }}>IoT Cloud Platforms</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Connecting telemetry nodes to databases (AWS IoT, Blynk), creating custom PCBs, and developing commercial-grade products.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="arduino-cta stagger-item">
          <div className="glass-card arduino-cta__card">
            <h2 className="arduino-cta__title">Start Building. Start Connecting. <span className="gradient-text">Start Engineering.</span></h2>
            <p className="arduino-cta__text">
              Explore ESP32 projects with Commexus Club, build smart internet-connected hardware, and turn your ideas into functional IoT systems.
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
