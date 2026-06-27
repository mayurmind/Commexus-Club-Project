import { useState, useRef } from 'react'
import { useStaggerReveal } from '../../hooks/useScrollAnimation'
import './Contact.css'

export default function Contact() {
  const sectionRef = useRef(null)
  useStaggerReveal(sectionRef, '.stagger-item')

  const [status, setStatus] = useState(null)
  const [resultMessage, setResultMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setResultMessage('Sending...')
    
    const formData = new FormData(event.target)
    formData.append("access_key", "f5169a42-8946-4bee-8f6a-63b219f4d2b6")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setResultMessage("✓ Message sent successfully! We'll get back to you soon.")
        event.target.reset()
      } else {
        setStatus('error')
        setResultMessage(data.message || "Error submitting form. Please try again.")
      }
    } catch (error) {
      setStatus('error')
      setResultMessage("Network error. Please try again later.")
    }

    setTimeout(() => {
      setStatus(null)
      setResultMessage("")
    }, 5000)
  }

  return (
    <section className="contact section" id="contact">

      <div className="section-header section-header--center">
        <div className="section-label">Get in Touch</div>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Have a question, want to collaborate, or interested in joining?
          Drop us a message and we'll get back to you.
        </p>
      </div>

      <div className="contact__grid" ref={sectionRef}>
        <form className="contact__form glass-card stagger-item" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <div className="contact__field">
              <label htmlFor="contact-name" className="contact__label">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="glass-input"
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email" className="contact__label">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="glass-input"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="contact-subject" className="contact__label">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              className="glass-input"
              placeholder="What's this about?"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message" className="contact__label">Message</label>
            <textarea
              id="contact-message"
              name="message"
              className="glass-input contact__textarea"
              placeholder="Your message..."
              rows={5}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary contact__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            {status !== 'sending' && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 2L7 9M14 2l-4 12-3-5-5-3 12-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>

          {status && (
            <div className={`contact__status contact__status--${status}`}>
              {resultMessage}
            </div>
          )}
        </form>

        <div className="contact__info stagger-item">
          <div className="contact__info-card glass-card">
            <div className="contact__info-icon">📧</div>
            <div>
              <h4 className="contact__info-title">Email</h4>
              <a href="mailto:commexus@rcpit.ac.in" className="contact__info-value">
                commexus@rcpit.ac.in
              </a>
            </div>
          </div>

          <div className="contact__info-card glass-card">
            <div className="contact__info-icon">📍</div>
            <div>
              <h4 className="contact__info-title">Location</h4>
              <p className="contact__info-value">
                R. C. Patel Institute of Technology<br />
                Shirpur, Maharashtra 425405
              </p>
            </div>
          </div>


          <div className="contact__socials-row">
            <a href="#" className="contact__social" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="contact__social" aria-label="Twitter/X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="contact__social" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
