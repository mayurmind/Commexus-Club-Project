import { useEffect, useState } from 'react'
import '../../styles/components/LoadingScreen.css'

export default function LoadingScreen({ onComplete }) {
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 2000)

    // Unmount completely after 2.5 seconds (gives 500ms for fade animation)
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete()
    }, 2500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className={`loading-screen ${isFading ? 'loading-screen--fade-out' : ''}`}>
      <div className="loading-screen__content">
        <svg className="loading-screen__circuit" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-cyan, #00e5ff)" />
              <stop offset="100%" stopColor="var(--accent-purple, #7c3aed)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <g filter="url(#glow)">
            {/* Center Node */}
            <circle cx="100" cy="100" r="10" className="circuit-node circuit-node--center" />
            
            {/* Branch 1 (Top Left) */}
            <path d="M100 100 L 70 70 L 30 70" className="circuit-line circuit-line--1" />
            <circle cx="30" cy="70" r="4" className="circuit-node circuit-node--end" />
            
            {/* Branch 2 (Top Right) */}
            <path d="M100 100 L 130 70 L 170 70" className="circuit-line circuit-line--2" />
            <circle cx="170" cy="70" r="4" className="circuit-node circuit-node--end" />
            
            {/* Branch 3 (Bottom Left) */}
            <path d="M100 100 L 70 130 L 30 130" className="circuit-line circuit-line--3" />
            <circle cx="30" cy="130" r="4" className="circuit-node circuit-node--end" />
            
            {/* Branch 4 (Bottom Right) */}
            <path d="M100 100 L 130 130 L 170 130" className="circuit-line circuit-line--4" />
            <circle cx="170" cy="130" r="4" className="circuit-node circuit-node--end" />
            
            {/* Branch 5 (Top) */}
            <path d="M100 100 L 100 30" className="circuit-line circuit-line--5" />
            <circle cx="100" cy="30" r="4" className="circuit-node circuit-node--end" />
            
            {/* Branch 6 (Bottom) */}
            <path d="M100 100 L 100 170" className="circuit-line circuit-line--6" />
            <circle cx="100" cy="170" r="4" className="circuit-node circuit-node--end" />
          </g>
        </svg>
        
        <div className="loading-screen__logo">
          COMMEXUS
        </div>
        
        <div className="loading-screen__terminal-text">
          <span className="blink-text">_</span> SYSTEM BOOT SEQUENCE
        </div>

        <div className="loading-screen__bar">
          <div className="loading-screen__bar-fill"></div>
        </div>
      </div>
    </div>
  )
}
