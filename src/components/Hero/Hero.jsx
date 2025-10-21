import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa'
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="https://kit-santiago-portfolio-resume.s3.ap-southeast-1.amazonaws.com/SANTIAGO_RESUME.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary-hero"
                >
                  View Resume
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-secondary-hero">
                  Get In Touch
                </Link>
              </motion.div>
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
              <motion.div
                className="profile-main"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/profile-image.jpg" 
                  alt="Kit Nicholas Santiago" 
                  className="profile-image"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="floating-badge-circle"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                  <span className="floating-badge-text">TECH VOLUNTEER • GOOGLE DEVELOPERS CLUB</span>
              </motion.div>

              {/* Info Badge */}
              <motion.div
                className="profile-info-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="info-badge-content">
                  <span className="info-badge-number">Officer</span>
                  <span className="info-badge-label">AWS Learning Club</span>
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
              <span className="stat-minimal-number">5+</span>
              <span className="stat-minimal-label">Hackathons</span>
            </div>
            <div className="stat-divider-minimal"></div>
            <div className="stat-minimal-item">
              <span className="stat-minimal-number">4th</span>
              <span className="stat-minimal-label">Year Student</span>
            </div>
            <div className="stat-divider-minimal"></div>
            <div className="stat-minimal-item">
              <span className="stat-minimal-number">6+</span>
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
          <motion.a
            href="https://github.com/goodboykit"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-minimal"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kit-nicholas-santiago-0bb647201/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-minimal"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/goodboykit"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-minimal"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="mailto:santiagonikos@gmail.com"
            className="social-link-minimal"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
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
