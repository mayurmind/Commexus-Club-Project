import { useEffect, useRef, useState } from 'react'
import GlobeMap from '../GlobeMap'
import { getRandomCircuitBg } from '../../utils/randomBg'
import './Hero.css'

export default function Hero({ onNavigate }) {
  const bgStyle = useRef({ backgroundImage: getRandomCircuitBg() }).current;

  return (
    <section className="hero section" id="home" style={bgStyle}>
      <div className="hero__bg-image" aria-hidden="true">
        <img
          src="/images/circuit-board-macro.jpg"
          alt=""
          className="hero__bg-img"
          loading="eager"
        />
      </div>
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="container" style={{ height: '100%', position: 'relative' }}>

      <div className="hero__content">
        <div className="hero__layout">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              R. C. Patel Institute of Technology
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line">COMM</span>
              <span className="hero__title-line gradient-text">EXUS</span>
            </h1>

            <p className="hero__subtitle">Where Code Meets Circuits</p>

            <p className="hero__description">
              Empowering students through hands-on workshops, hackathons, and projects
              in embedded systems, IoT, and beyond. Build real hardware. Write real code.
              Make real impact.
            </p>

            <div className="hero__actions">
              <button
                className="btn btn-primary"
                onClick={() => onNavigate?.('#about')}
              >
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => onNavigate?.('#contact')}
              >
                Join Us
              </button>
            </div>
          </div>

          <div className="hero__visual">
            <GlobeMap />
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>

      <div className="hero__bottom-fade" aria-hidden="true" />
      </div>
    </section>
  )
}
