import { useState, useRef } from 'react'
import { useStaggerReveal } from '../../hooks/useScrollAnimation'
import { categories, allPhotos } from '../../data/gallery/index.js'
import '../../styles/components/Gallery.css'

const ITEMS_PER_PAGE = 6

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [currentPage, setCurrentPage] = useState(1)
  const gridRef = useRef(null)

  // Re-trigger animation when category or page changes
  useStaggerReveal(gridRef, '.stagger-item', [activeCategory, currentPage])

  const filteredPhotos = allPhotos.filter(p => p.category === activeCategory)
  
  const totalPages = Math.ceil(filteredPhotos.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentPhotos = filteredPhotos.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <section className="gallery section" id="gallery">
      <div className="section-header section-header--center">
        <h2 className="section-title gallery__title">
        <span className="gradient-text">Gallery</span>
        </h2>
        <p className="gallery__subtitle">
          Reliving our best moments, from late-night coding sessions to massive tech fests.
        </p>
      </div>

      <div className="gallery__container">
        
        {/* Categories / Filters */}
        <div className="gallery__filters-wrapper">
          <div className="gallery__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery__filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
            <button className="gallery__filter-nav-btn" aria-label="Scroll filters right">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="gallery__grid" ref={gridRef}>
          {currentPhotos.map((photo, index) => (
            <div key={`${photo.id}-${index}`} className="gallery__item stagger-item">
              <div className="gallery__image-wrapper">
                <img src={photo.url} alt={photo.alt || photo.category} className="gallery__image" loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="gallery__pagination">
            <button 
              className="gallery__page-btn gallery__page-nav"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i + 1}
                className={`gallery__page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button 
              className="gallery__page-btn gallery__page-nav"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
