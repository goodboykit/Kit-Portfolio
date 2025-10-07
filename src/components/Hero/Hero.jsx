import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiFlutter, SiMongodb } from 'react-icons/si'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Charlotte Evelyn Style Layout */}
        <div className="hero-grid-layout">
          {/* Top Left - Large Name Section */}
          <motion.div
            className="hero-name-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-large-name">
              Kit Nicholas
              <br />
              <span className="hero-surname">Santiago</span>
            </h1>

            <div className="hero-role-badge">
              <span className="role-line">—</span>
              <p className="role-text">
                PRO<br />
                DEVELOPER
              </p>
            </div>
          </motion.div>

          {/* Center - Large Profile Image with Play Button */}
          <motion.div
            className="hero-profile-main"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="profile-main-image">
              <div className="profile-image-inner">
                <span className="profile-letter">K</span>
              </div>

              {/* Play Button Overlay */}
              <div className="profile-play-button">
                <span>▶</span>
              </div>
            </div>

            {/* Floating Yellow Badge */}
            <motion.div
              className="floating-yellow-badge"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="badge-text">SHOOT FOR THE MOON</span>
            </motion.div>

            {/* Scroll Down Circle */}
            <div className="scroll-circle-badge">
              <span className="scroll-text">SCROLL<br />DOWN</span>
              <span className="scroll-arrow">↓</span>
            </div>
          </motion.div>

          {/* Top Right - Quote Card */}
          <motion.div
            className="hero-quote-card"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="quote-icon">"</span>
            <h3 className="quote-text">
              My code is a
              <br />
              <span className="quote-highlight">innovation</span>
            </h3>
          </motion.div>

          {/* Right Side - Instagram Card */}
          <motion.div
            className="hero-instagram-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="instagram-text">
              STAY TUNED FOR NEWS
              <br />
              AND NEW WORK ON
              <br />
              GITHUB
            </p>
            <FaGithub className="instagram-icon" />
            <div className="instagram-divider"></div>
            <div className="instagram-image">
              <div className="instagram-img-placeholder"></div>
            </div>
          </motion.div>

          {/* Right Side - Contact CTA */}
          <motion.div
            className="hero-contact-cta"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="cta-title">CONTACT<br />WITH ME</h3>
            <div className="cta-arrow-circle">
              <span>→</span>
            </div>
          </motion.div>

          {/* Bottom Left - Camera Icon Card */}
          <motion.div
            className="hero-camera-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="camera-icon-wrapper">
              <FaReact className="camera-icon" />
            </div>
          </motion.div>

          {/* Bottom Left - CTA Text */}
          <motion.div
            className="hero-bottom-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="bottom-cta-text">
              LET'S TAKE YOUR<br />
              <span className="cta-highlight">PROJECTS</span> TO THE<br />
              NEXT LEVEL
            </h3>
          </motion.div>

          {/* Bottom Right - Small Profile Card */}
          <motion.div
            className="hero-small-profile"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="small-profile-image">
              <div className="small-profile-placeholder"></div>
            </div>
            <div className="small-profile-info">
              <p className="small-profile-name">KIT NICHOLAS</p>
              <p className="small-profile-title">WAS A 4TH YEAR IT STUDENT<br />AND DEVELOPER</p>
              <Link to="/projects" className="small-profile-link">
                ALL PROJECTS →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="hero-bg-decoration">
        <div className="bg-blur-circle circle-1"></div>
        <div className="bg-blur-circle circle-2"></div>
      </div>
    </section>
  )
}

export default Hero
