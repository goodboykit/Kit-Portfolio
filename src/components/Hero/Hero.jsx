import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Minimalistic Grid Layout */}
        <div className="hero-minimalistic-grid">

          {/* Left - Name & Title */}
          <motion.div
            className="hero-name-block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: y1, opacity }}
          >
            <div className="name-badge">
              <span className="badge-diamond">✦</span>
              <span className="badge-label">HELLO, I'M</span>
            </div>

            <h1 className="hero-main-name">
              Kit Nicholas
              <br />
              <span className="hero-last-name">Santiago</span>
            </h1>

            <div className="hero-animated-role">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Mobile App Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'IT Student',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="animated-role-text"
              />
            </div>

            <p className="hero-short-bio">
              4th year IT student specializing in Mobile & Web Applications.
              Building innovative digital solutions.
            </p>

            <div className="hero-cta-group">
              <Link to="/projects" className="btn-primary-hero">
                View Projects
              </Link>
              <Link to="/contact" className="btn-secondary-hero">
                Get In Touch
              </Link>
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            className="hero-profile-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ y: y2 }}
          >
            <div className="profile-wrapper">
              <div className="profile-main">
                <div className="profile-overlay">
                  <span className="profile-initial">K</span>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="floating-badge-circle"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="floating-badge-text">TOP 1 • UI DESIGN • COMPETITION</span>
              </motion.div>

              {/* Info Badge */}
              <motion.div
                className="profile-info-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="info-badge-content">
                  <span className="info-badge-number">5+</span>
                  <span className="info-badge-label">Hackathon Wins</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Stats - Minimalistic */}
        <motion.div
          className="hero-stats-minimal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stat-minimal-item">
            <span className="stat-minimal-number">20+</span>
            <span className="stat-minimal-label">Projects</span>
          </div>
          <div className="stat-divider-minimal"></div>
          <div className="stat-minimal-item">
            <span className="stat-minimal-number">4+</span>
            <span className="stat-minimal-label">Years Exp</span>
          </div>
          <div className="stat-divider-minimal"></div>
          <div className="stat-minimal-item">
            <span className="stat-minimal-number">8+</span>
            <span className="stat-minimal-label">Certifications</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="hero-social-minimal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link-minimal">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-minimal">
            <FaLinkedin />
          </a>
          <a href="mailto:santiagonikos@gmail.com" className="social-link-minimal">
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="hero-bg-minimal">
        <motion.div
          className="bg-circle-minimal circle-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="bg-circle-minimal circle-2"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 6 + 3 + 'px',
              height: Math.random() * 6 + 3 + 'px',
              borderRadius: '50%',
              background: `rgba(255, ${Math.random() > 0.5 ? 215 : 107}, ${Math.random() > 0.5 ? 0 : 74}, ${Math.random() * 0.3 + 0.1})`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
