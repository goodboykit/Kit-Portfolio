import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const categories = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'E-Commerce',
    'Branding',
    'Full Stack'
  ]

  return (
    <footer className="footer">
      {/* Categories Banner */}
      <div className="footer-categories">
        <div className="categories-marquee">
          {categories.map((category, idx) => (
            <React.Fragment key={idx}>
              <span className="category-item">{category}</span>
              <span className="category-divider">✦</span>
            </React.Fragment>
          ))}
          {categories.map((category, idx) => (
            <React.Fragment key={`repeat-${idx}`}>
              <span className="category-item">{category}</span>
              <span className="category-divider">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          {/* Studio Section */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0 * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <motion.h4
              className="footer-title"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span
                className="title-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span> STUDIO
            </motion.h4>
            <div className="footer-buttons">
              <motion.div whileHover={{ scale: 1.02, y: -2 }}>
                <Link to="/about" className={`footer-pill-btn ${isActive('/about') ? 'footer-pill-btn-filled' : ''}`}>ABOUT</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }}>
                <Link to="/projects" className={`footer-pill-btn ${isActive('/projects') ? 'footer-pill-btn-filled' : ''}`}>PROJECTS</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }}>
                <Link to="/skills" className={`footer-pill-btn ${isActive('/skills') ? 'footer-pill-btn-filled' : ''}`}>SKILLS</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }}>
                <Link to="/showcase" className={`footer-pill-btn ${isActive('/showcase') ? 'footer-pill-btn-filled' : ''}`}>SHOWCASE</Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="footer-vertical-divider"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>

          {/* Discover Section */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 1 * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <motion.h4
              className="footer-title"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span
                className="title-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
              >
                ✦
              </motion.span> DISCOVER
            </motion.h4>
            <div className="footer-buttons">
              <motion.div whileHover={{ scale: 1.02, y: -2 }}>
                <Link to="/projects" className="footer-pill-btn">WEB DEVELOPMENT</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }}>
                <Link to="/projects" className="footer-pill-btn">MOBILE APPS</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }}>
                <Link to="/skills" className="footer-pill-btn">FULL STACK</Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="footer-vertical-divider"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>

          {/* Contact Section */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 2 * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <motion.h4
              className="footer-title"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span
                className="title-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
              >
                ✦
              </motion.span> CONTACT
            </motion.h4>
            <div className="footer-buttons">
              <motion.a
                href="tel:+13109850496"
                className="footer-pill-btn footer-pill-btn-outline"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                (310) 985-0496
              </motion.a>
              <motion.a
                href="mailto:santiagonikos@gmail.com"
                className="footer-pill-btn footer-pill-btn-filled"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                SANTIAGONIKOS@GMAIL.COM
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="footer-vertical-divider"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          ></motion.div>

          {/* Location Section */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 3 * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <motion.h4
              className="footer-title"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span
                className="title-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
              >
                ✦
              </motion.span> LOCATION
            </motion.h4>
            <div className="footer-buttons">
              <motion.span
                className="footer-pill-btn footer-pill-btn-outline"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                BELLFLOWER, CA
              </motion.span>
              <motion.span
                className="footer-pill-btn footer-pill-btn-outline"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                MANILA, PH
              </motion.span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.8 }}
        ></motion.div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <motion.div
              className="footer-logo"
              initial={{ opacity: 0.5, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                className="logo-icon"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
              <span className="logo-text">Kit Nicholas</span>
            </motion.div>

            <motion.p
              className="footer-copyright"
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              ALL RIGHTS RESERVED TO <strong>KIT NICHOLAS SANTIAGO</strong> {currentYear}
            </motion.p>

            <div className="footer-socials">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.5, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                whileHover={{ y: -2, scale: 1.03, rotate: 1 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.5, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                whileHover={{ y: -2, scale: 1.03, rotate: 1 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.5, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                whileHover={{ y: -2, scale: 1.03, rotate: 1 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
