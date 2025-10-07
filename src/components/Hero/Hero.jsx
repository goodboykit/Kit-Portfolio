import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
        <div className="hero-container">
          {/* Grid-based Layout */}
          <div className="hero-grid">
            {/* Main Title Section */}
            <motion.div
              className="hero-main-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-badge">
                <span className="badge-icon">✦</span>
                <span>Welcome</span>
              </div>

              <h1 className="hero-main-title">
                Creative
                <br />
                Developer
              </h1>

              <p className="hero-label">Building Digital Experiences</p>
            </motion.div>

            {/* Center Image/Visual */}
            <motion.div
              className="hero-center-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="visual-container">
                <div className="visual-bg"></div>
                <div className="visual-overlay">
                  <div className="play-btn">
                    <span>▶</span>
                  </div>
                </div>
              </div>
              <div className="floating-badge yellow-circle">
                <span className="rotating-text">Portfolio</span>
              </div>
            </motion.div>

            {/* Animated Subtitle */}
            <motion.div
              className="hero-typing-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="typing-icon">✦</div>
              <div className="typing-content">
                <p className="typing-label">I specialize in</p>
                <div className="typing-animation">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Development',
                      2000,
                      'UI/UX Design',
                      2000,
                      'Creative Solutions',
                      2000,
                      'Web Applications',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              className="hero-cta-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3>Let's Work Together</h3>
              <p>Building exceptional digital experiences with modern technologies</p>
              <Link to="/contact" className="cta-arrow-btn">
                →
              </Link>
            </motion.div>

            {/* Small Info Card */}
            <motion.div
              className="hero-info-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="info-image"></div>
              <div className="info-text">
                <p className="info-label">Recent Work</p>
                <Link to="/projects" className="info-link">
                  View Projects →
                </Link>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="hero-socials-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="socials-label">Follow Me</div>
              <div className="socials-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaTwitter />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="scroll-line"></div>
          <span className="scroll-text">Scroll</span>
        </motion.div>
      </section>
  )
}

export default Hero
