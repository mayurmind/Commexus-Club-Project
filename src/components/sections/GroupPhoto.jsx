import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import '../../styles/components/GroupPhoto.css'

export default function GroupPhoto() {
  const { addRef } = useScrollAnimation()

  return (
    <section className="group-photo section" id="group-photo">
      <div className="section-header section-header--center">
        <div className="section-label">Our Team</div>
        <h2 className="section-title">
          Meet the <span className="gradient-text">Commexus Family</span>
        </h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          United by a passion for technology, hardware, and innovation.
        </p>
      </div>

      <div className="group-photo__container" ref={addRef}>
        <div className="group-photo__wrapper glass-card">
          <img 
            src="/images/group-photo.jpeg" 
            alt="Commexus Club Group" 
            className="group-photo__img"
            loading="lazy"
          />
          <div className="group-photo__overlay">
            <div className="group-photo__glow" aria-hidden="true" />
            <div className="group-photo__content">
              <h3 className="group-photo__heading">Building the Future Together</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
