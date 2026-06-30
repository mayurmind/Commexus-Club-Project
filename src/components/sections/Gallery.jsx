import { useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { galleryImages } from '../../data/gallery/index.js'
import '../../styles/components/Gallery.css'

export default function Gallery() {
  const containerRef = useRef(null)
  
  // Create 4 different arrays of images by shuffling or slicing so rows look slightly different
  const rows = [
    [...galleryImages].sort(() => 0.5 - Math.random()),
    [...galleryImages].sort(() => 0.5 - Math.random()),
    [...galleryImages].sort(() => 0.5 - Math.random()),
    [...galleryImages].sort(() => 0.5 - Math.random()),
  ]

  return (
    <section className="gallery section" id="gallery">
      <div className="section-header section-header--center">
        <div className="section-label">Moments</div>
        <h2 className="section-title gallery__title">
          Our <span className="gradient-text">Gallery</span>
        </h2>
        <div className="section-divider" />
        <p className="gallery__subtitle">
          Reliving our best moments, from late-night coding sessions to massive tech fests.
        </p>
      </div>

      <div className="gallery__marquee-container" ref={containerRef}>
        {rows.map((rowImages, rowIndex) => (
          <div 
            key={`row-${rowIndex}`} 
            className={`gallery__marquee-row ${rowIndex % 2 === 0 ? 'scroll-left' : 'scroll-right'}`}
          >
            {/* Render the images twice to create the seamless infinite scroll effect */}
            <div className="gallery__marquee-track">
              {rowImages.map((photo, i) => (
                <div key={`track1-${i}`} className="gallery__marquee-item">
                  <img src={photo.url} alt="Gallery" loading="lazy" />
                  <div className="gallery__marquee-overlay"></div>
                </div>
              ))}
            </div>
            <div className="gallery__marquee-track">
              {rowImages.map((photo, i) => (
                <div key={`track2-${i}`} className="gallery__marquee-item">
                  <img src={photo.url} alt="Gallery" loading="lazy" />
                  <div className="gallery__marquee-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Gradients on the edges to fade out the scrolling images */}
        <div className="gallery__marquee-fade gallery__marquee-fade-left"></div>
        <div className="gallery__marquee-fade gallery__marquee-fade-right"></div>
      </div>
    </section>
  )
}
