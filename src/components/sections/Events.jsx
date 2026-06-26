import { useRef } from 'react'
import { useStaggerReveal } from '../../hooks/useScrollAnimation'
import eventsData from '../../data/events.json'
import './Events.css'

const tagColors = {
  Workshop: { bg: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff', border: 'rgba(0, 229, 255, 0.3)' },
  Masterclass: { bg: 'rgba(124, 58, 237, 0.1)', color: '#a78bfa', border: 'rgba(124, 58, 237, 0.3)' },
  Hackathon: { bg: 'rgba(255, 107, 53, 0.1)', color: '#ff6b35', border: 'rgba(255, 107, 53, 0.3)' },
  Talk: { bg: 'rgba(0, 255, 136, 0.1)', color: '#00ff88', border: 'rgba(0, 255, 136, 0.3)' },
}

const eventImages = {
  1: '/images/arduino-robot.jpg',
  2: '/images/embedded-c-code.jpg',
  3: '/images/circuit-board-macro.jpg',
  4: '/images/esp32-board.jpeg',
  5: '/images/pcb-board-red.jpg',
  6: '/images/code-screen.jpeg',
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    year: date.getFullYear(),
  }
}

export default function Events() {
  const timelineRef = useRef(null)
  useStaggerReveal(timelineRef, '.stagger-item')

  return (
    <section className="events section" id="events">
      <div className="section-label">Events</div>
      <h2 className="section-title">
        Upcoming <span className="gradient-text">Events</span>
      </h2>
      <p className="section-subtitle">
        From hands-on workshops to intense hackathons — there's always something
        happening at Commexus. Mark your calendar.
      </p>

      <div className="events__timeline" ref={timelineRef}>
        <div className="events__timeline-line" aria-hidden="true" />

        {eventsData.map((event, i) => {
          const date = formatDate(event.date)
          const tagStyle = tagColors[event.tag] || tagColors.Workshop
          const eventImg = eventImages[event.id]

          return (
            <div
              key={event.id}
              className={`events__card glass-card stagger-item ${i % 2 === 0 ? 'events__card--left' : 'events__card--right'}`}
            >
              <div className="events__card-accent" />

              {eventImg && (
                <div className="events__card-thumb">
                  <img
                    src={eventImg}
                    alt=""
                    className="events__card-thumb-img"
                    loading="lazy"
                  />
                  <div className="events__card-thumb-overlay" />
                  <div className="events__card-date events__card-date--overlay">
                    <span className="events__card-day">{date.day}</span>
                    <span className="events__card-month">{date.month}</span>
                  </div>
                </div>
              )}

              <div className="events__card-body">
                <div className="events__card-header">
                  <span
                    className="events__card-tag"
                    style={{
                      background: tagStyle.bg,
                      color: tagStyle.color,
                      borderColor: tagStyle.border,
                    }}
                  >
                    {event.tag}
                  </span>
                  <span className="events__card-time">{event.time}</span>
                </div>

                <h3 className="events__card-title">{event.title}</h3>
                <p className="events__card-desc">{event.description}</p>

                <div className="events__card-location">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 7.5 4 7.5s4-4 4-7.5c0-2.21-1.79-4-4-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5S6.17 3.5 7 3.5s1.5.67 1.5 1.5S7.83 6.5 7 6.5z" fill="currentColor"/>
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
