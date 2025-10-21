import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import './About.css'

const About = () => {
  const [certModal, setCertModal] = useState(null)

  useEffect(() => {
    if (certModal) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [certModal])
  return (
    <>
      {/* Marquee Section - Cream Background */}
      <section className="about-marquee">
        <div className="marquee-content">
          <span className="marquee-item">Passionate Developer ✦</span>
          <span className="marquee-item">Creative Problem Solver ✦</span>
          <span className="marquee-item">Lifelong Learner ✦</span>
          <span className="marquee-item">Detail Oriented ✦</span>
          <span className="marquee-item">Passionate Developer ✦</span>
          <span className="marquee-item">Creative Problem Solver ✦</span>
          <span className="marquee-item">Lifelong Learner ✦</span>
          <span className="marquee-item">Detail Oriented ✦</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-container">
          <div>
            {/* Section Header */}
            <motion.div
              className="about-header"
              initial={{ opacity: 0.5, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="about-badge">• About Me</span>
            </motion.div>

            {/* Main Content Grid */}
            <div className="about-content">
              <motion.div
                className="about-text-section"
                initial={{ opacity: 0.5, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h2 className="about-title">
                  <TypeAnimation
                    sequence={[
                      'Building innovative',
                      3000,
                      'Creating powerful',
                      3000,
                      'Designing modern',
                      3000,
                      'Developing scalable',
                      3000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                  <br />
                  digital solutions
                </h2>
                <p className="about-description">
                  Hi! I'm Kit Nicholas Santiago, a 4th year IT student specializing in Mobile and Web Application
                  development. Currently studying at National University Manila in the Philippines,
                  I bring a unique perspective to software development, blending international experience with
                  technical expertise.
                </p>
                <p className="about-description">
                  My journey includes active participation in tech communities like Google Developers Students Club
                  and AWS Learning Club, where I've developed projects using React, Flutter, Node.js, and cloud technologies.
                  I've competed in multiple hackathons achieving top placements, and I'm passionate about creating
                  user-centered applications that solve real-world problems.
                </p>
                <p className="about-description">
                  Currently seeking internship opportunities to apply my skills in mobile and web development,
                  contribute to innovative projects, and continue growing as a developer.
                </p>
              </motion.div>

              <motion.div
                className="about-image-section"
                initial={{ opacity: 0.5, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                <div className="about-image-wrapper">
                  <div className="about-image-placeholder"></div>
                  <div className="about-badge-float">
                    <span>Creative</span>
                  </div>
                </div>
              </motion.div>
            </div>



            {/* Education Section */}
            <motion.div
              className="about-education"
              initial={{ opacity: 0.5, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="education-title">Education</h3>

              <motion.div
                className="education-item"
                initial={{ opacity: 0.5, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ x: 3, scale: 1.01 }}
              >
                <div className="education-item-inner">
                  <div className="education-logo">
                    <img src="/images/logos/NU_shield.svg" alt="National University" className="school-logo" />
                  </div>

                  <div className="education-content">
                    <div className="education-header">
                      <div className="education-degree">BS Information Technology</div>
                      <div className="education-date">2026 (Anticipated)</div>
                    </div>
                    <div className="education-school">National University - Manila</div>
                    <div className="education-location">Manila, Philippines</div>
                    <ul className="education-details">
                      <li>Fourth-year student, specializing in Mobile and Web Application</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="education-item"
                initial={{ opacity: 0.5, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ x: 3, scale: 1.01 }}
              >
                <div className="education-item-inner">
                  <div className="education-logo">
                    <img src="/images/logos/nsnu-logo-1947-transparent.png" alt="Nazareth School" className="school-logo" />
                  </div>

                  <div className="education-content">
                    <div className="education-header">
                      <div className="education-degree">Senior High - STEM Strand</div>
                      <div className="education-date">8/2020 - 6/2022</div>
                    </div>
                    <div className="education-school">Nazareth School of National University Manila</div>
                    <div className="education-location">Philippines</div>
                    <ul className="education-details">
                      <li>Graduated with High Honors with consistent academic excellence throughout the Senior High School</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              className="about-achievements"
              initial={{ opacity: 0.5, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="achievements-title">Achievements</h3>
              <div className="achievements-grid">
                <motion.div
                  className="achievement-item"
                  initial={{ opacity: 0.5, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ x: 3, scale: 1.02, rotate: 0.2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="achievement-rank">Top 1</div>
                  <div className="achievement-details">
                    <div className="achievement-title">Senior High School IT Immersion</div>
                    <div className="achievement-description">User Interface Design: Online Thrift Mobile Application</div>
                    <div className="achievement-year">S.Y 2022-2023</div>
                  </div>
                </motion.div>

                <motion.div
                  className="achievement-item"
                  initial={{ opacity: 0.5, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  whileHover={{ x: 3, scale: 1.02, rotate: -0.2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="achievement-rank">Top 7</div>
                  <div className="achievement-details">
                    <div className="achievement-title">Dela Salle University Hacker-Cup Hackathon</div>
                    <div className="achievement-year">S.Y 2023-2024</div>
                  </div>
                </motion.div>

                <motion.div
                  className="achievement-item"
                  initial={{ opacity: 0.5, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ x: 3, scale: 1.02, rotate: 0.2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="achievement-rank">Top 3</div>
                  <div className="achievement-details">
                    <div className="achievement-title">Ideathon Hackathon GDSC</div>
                    <div className="achievement-description">Google Developers Students Club (National University Manila)</div>
                    <div className="achievement-year">S.Y 2024-2025</div>
                  </div>
                </motion.div>

                <motion.div
                  className="achievement-item"
                  initial={{ opacity: 0.5, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  whileHover={{ x: 3, scale: 1.02, rotate: -0.2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="achievement-rank">Top 5</div>
                  <div className="achievement-details">
                    <div className="achievement-title">Dela Salle University Innovative Hacker-Cup Hackathon</div>
                    <div className="achievement-year">S.Y 2024-2025</div>
                  </div>
                </motion.div>

                <motion.div
                  className="achievement-item"
                  initial={{ opacity: 0.5, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ x: 3, scale: 1.02, rotate: 0.2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="achievement-rank">Top 11</div>
                  <div className="achievement-details">
                    <div className="achievement-title">GDSC InnOlympics Hackathon</div>
                    <div className="achievement-description">Google Developers Students Club (PLM Manila)</div>
                    <div className="achievement-year">S.Y 2024-2025</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              className="about-certifications"
              initial={{ opacity: 0.5, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="certifications-title">Certifications</h3>
              <div className="certifications-grid">
                <motion.div
                  className="certification-item"
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCertModal({ org: 'NATIONAL UNIVERSITY', name: 'Data Privacy Orientation', date: '02/14/2024', image: '/images/certifications/CEASdataprivacy.png' })}
                >
                  <div className="certification-badge">NU</div>
                  <div className="certification-content">
                    <div className="certification-name">Data Privacy Orientation</div>
                    <div className="certification-date">02/14/2024</div>
                  </div>
                  <div className="certification-hover-preview">
                    <img src="/images/certifications/CEASdataprivacy.png" alt="Data Privacy Certificate" />
                  </div>
                </motion.div>
                <motion.div
                  className="certification-item"
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCertModal({ org: 'NATIONAL UNIVERSITY', name: 'Concourse: Charting New Horizons in Technology', date: '02/12/2025', image: '/images/certifications/Concourse.png' })}
                >
                  <div className="certification-badge">NU</div>
                  <div className="certification-content">
                    <div className="certification-name">Concourse: Charting New Horizons in Technology</div>
                    <div className="certification-date">02/12/2025</div>
                  </div>
                  <div className="certification-hover-preview">
                    <img src="/images/certifications/Concourse.png" alt="Concourse Certificate" />
                  </div>
                </motion.div>
                <motion.div
                  className="certification-item"
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCertModal({ org: 'CISCO', name: 'Python Essentials 1 and 2', date: '12/04/2023', image: '/images/certifications/Python Essentials.png' })}
                >
                  <div className="certification-badge">CISCO</div>
                  <div className="certification-content">
                    <div className="certification-name">Python Essentials 1 and 2</div>
                    <div className="certification-date">12/04/2023</div>
                  </div>
                  <div className="certification-hover-preview">
                    <img src="/images/certifications/Python Essentials.png" alt="Python Essentials Certificate" />
                  </div>
                </motion.div>
                <motion.div
                  className="certification-item"
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCertModal({ org: 'FORTINET', name: 'Introduction to the Threat Landscape 3.0', date: '06/06/2025', image: '/images/certifications/IntroThreatLandscape.png' })}
                >
                  <div className="certification-badge">FORTINET</div>
                  <div className="certification-content">
                    <div className="certification-name">Introduction to the Threat Landscape 3.0</div>
                    <div className="certification-date">06/06/2025</div>
                  </div>
                  <div className="certification-hover-preview">
                    <img src="/images/certifications/IntroThreatLandscape.png" alt="Threat Landscape Certificate" />
                  </div>
                </motion.div>

                <motion.div
                  className="certification-item"
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCertModal({ org: 'FORTINET', name: 'Certified Fundamentals Cybersecurity', date: '06/09/2025', image: '/images/certifications/CerttifiedFundamentals.png' })}
                >
                  <div className="certification-badge">FORTINET</div>
                  <div className="certification-content">
                    <div className="certification-name">Certified Fundamentals Cybersecurity</div>
                    <div className="certification-date">06/09/2025</div>
                  </div>
                  <div className="certification-hover-preview">
                    <img src="/images/certifications/CerttifiedFundamentals.png" alt="Cybersecurity Certificate" />
                  </div>
                </motion.div>

                <motion.div
                  className="certification-item"
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCertModal({ org: 'FORTINET', name: 'Getting Started in Cybersecurity 3.0', date: '06/09/2026', image: '/images/certifications/GettingStartedCyber.png' })}
                >
                  <div className="certification-badge">FORTINET</div>
                  <div className="certification-content">
                    <div className="certification-name">Getting Started in Cybersecurity 3.0</div>
                    <div className="certification-date">06/09/2026</div>
                  </div>
                  <div className="certification-hover-preview">
                    <img src="/images/certifications/GettingStartedCyber.png" alt="Getting Started Certificate" />
                  </div>
                </motion.div>

                <motion.div
                  className="certification-item"
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCertModal({ org: 'AWS CLOUD CLUBS', name: 'International Leader\'s Discussion', date: '08/11/2024', image: '/images/certifications/Certificate of Partcipation copy.png' })}
                >
                  <div className="certification-badge">AWS</div>
                  <div className="certification-content">
                    <div className="certification-name">International Leader's Discussion</div>
                    <div className="certification-date">08/11/2024</div>
                  </div>
                  <div className="certification-hover-preview">
                    <img src="/src/assets/images/certifications/Certificate of Partcipation copy.png" alt="AWS Leader Certificate" />
                  </div>
                </motion.div>

                <motion.div
                  className="certification-item"
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCertModal({ org: 'GOOGLE DEVELOPER STUDENT CLUBS', name: 'Intro to Flutter: UI/UX Design', date: '02/21/2024', image: '/images/certifications/Certificate of Participation - Kit Nicholas Santiago.png' })}
                >
                  <div className="certification-badge">GDSC</div>
                  <div className="certification-content">
                    <div className="certification-name">Intro to Flutter: UI/UX Design</div>
                    <div className="certification-date">02/21/2024</div>
                  </div>
                  <div className="certification-hover-preview">
                    <img src="/src/assets/images/certifications/Certificate of Participation - Kit Nicholas Santiago.png" alt="Flutter Certificate" />
                  </div>
                </motion.div>

                <motion.div
                  className="certification-item"
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCertModal({ org: 'NATIONAL UNIVERSITY', name: 'We Lead: Accelerate your leadership skills', date: '03/06/2024', image: '/images/certifications/WeLead:Accelerate.png' })}
                >
                  <div className="certification-badge">NU</div>
                  <div className="certification-content">
                    <div className="certification-name">We Lead: Accelerate your leadership skills</div>
                    <div className="certification-date">03/06/2024</div>
                  </div>
                  <div className="certification-hover-preview">
                    <img src="/images/certifications/WeLead:Accelerate.png" alt="Leadership Certificate" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {certModal && (
              <div className="modal-overlay" onClick={() => setCertModal(null)}>
                <motion.div
                  className="modal-card"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <button className="modal-close-btn" onClick={() => setCertModal(null)} aria-label="Close">
                    ×
                  </button>
                  <div className="modal-header-cert">
                    <div className="modal-image-wrap">
                      {certModal.image ? (
                        <img
                          className="modal-image-cert"
                          src={certModal.image}
                          alt={`${certModal.org} - ${certModal.name}`}
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                      ) : null}
                      <div className="modal-image-placeholder-cert">
                        <span className="placeholder-org">{certModal.org}</span>
                        <span className="placeholder-name">{certModal.name}</span>
                      </div>
                    </div>
                    <div className="modal-badge-org">{certModal.org}</div>
                    <h4 className="modal-title-cert">{certModal.name}</h4>
                    <div className="modal-date-cert">Issued: {certModal.date}</div>
                  </div>
                  <div className="modal-body-cert">
                    <div className="modal-meta">
                      <span className="meta-chip">{certModal.org}</span>
                      <span className="meta-sep">•</span>
                      <span className="meta-date">{certModal.date}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Philosophy Section */}
            <motion.div
              className="about-philosophy"
              initial={{ opacity: 0.5, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="philosophy-content">
                <span className="philosophy-quote">"</span>
                <h3 className="philosophy-text">
                  Building innovative solutions through clean code, continuous learning, and a passion
                  for creating meaningful digital experiences
                </h3>
                <div className="philosophy-author">
                  <span className="author-name">My Approach</span>
                  <span className="author-divider">—</span>
                  <span className="author-title">Mobile & Web Development</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
