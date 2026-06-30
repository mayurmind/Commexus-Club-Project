import { useRef } from 'react'
import { useStaggerReveal } from '../../hooks/useScrollAnimation'
import teamData from '../../data/team.json'
import '../../styles/components/Team.css'

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
