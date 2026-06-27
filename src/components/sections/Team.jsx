import { useRef } from 'react'
import { useStaggerReveal } from '../../hooks/useScrollAnimation'
import teamData from '../../data/team.json'
import './Team.css'

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function getAvatarGradient(index) {
  const gradients = [
    'linear-gradient(135deg, #0066ff, #00e5ff)',
    'linear-gradient(135deg, #7c3aed, #a78bfa)',
    'linear-gradient(135deg, #ff6b35, #ff9a5c)',
    'linear-gradient(135deg, #00e5ff, #00ff88)',
    'linear-gradient(135deg, #ff3366, #ff6b9d)',
    'linear-gradient(135deg, #0066ff, #7c3aed)',
  ]
  return gradients[index % gradients.length]
}

const SocialLinks = ({ member }) => (
  <div className="team__socials">
    <a href={member.socials.github} className="team__social-link" aria-label={`${member.name} GitHub`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
    <a href={member.socials.linkedin} className="team__social-link" aria-label={`${member.name} LinkedIn`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>
  </div>
)

export default function Team() {
  const gridRef = useRef(null)
  useStaggerReveal(gridRef, '.stagger-item')

  const leaders = []
  const vicePresident = teamData.find(m => m.role === 'Vice President')
  const president = teamData.find(m => m.role === 'President')
  if (president) leaders.push(president)
  if (vicePresident) leaders.push(vicePresident)
  
  const members = teamData.filter(m => m.role !== 'President' && m.role !== 'Vice President')

  return (
    <section className="team section" id="team">
      <div className="section-header section-header--center">
        <div className="section-label">Our Team</div>
        <h2 className="section-title">
          Meet the <span className="gradient-text">Crew</span>
        </h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          The passionate students behind Commexus who make it all happen.
          Each one brings unique skills to the table.
        </p>
      </div>

      <div className="team__container" ref={gridRef}>
        
        {/* Leaders Section */}
        {leaders.length > 0 && (
          <div className="team__section-group">
            <h3 className="team__group-title stagger-item">Leadership</h3>
            <div className="team__leaders-grid">
              {leaders.map((member, i) => (
                <div key={member.id} className="team__card stagger-item">
                  <div className="team__card-inner">
                    
                    <div className="team__avatar team__avatar--box" style={{ background: getAvatarGradient(i) }}>
                      <img 
                        src={member.avatar || `https://i.pravatar.cc/150?u=${member.id}`} 
                        alt={member.name} 
                        className="team__avatar-image" 
                      />
                    </div>

                    <h3 className="team__name">{member.name}</h3>
                    <span className="team__role team__role--highlight">{member.role}</span>
                    <p className="team__bio">{member.bio}</p>
                    <SocialLinks member={member} />

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Members Grid */}
        <div className="team__section-group">
          <h3 className="team__group-title stagger-item">Core Team</h3>
          <div className="team__grid">
            {members.map((member, i) => (
              <div key={member.id} className="team__card stagger-item">
                <div className="team__card-inner">
                  
                  <div className="team__avatar team__avatar--box" style={{ background: getAvatarGradient(i + leaders.length) }}>
                    <img 
                      src={member.avatar || `https://i.pravatar.cc/150?u=${member.id}`} 
                      alt={member.name} 
                      className="team__avatar-image" 
                    />
                  </div>

                  <h3 className="team__name">{member.name}</h3>
                  <span className="team__role">{member.role}</span>
                  <p className="team__bio">{member.bio}</p>
                  <SocialLinks member={member} />

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
