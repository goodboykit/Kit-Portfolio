import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      toast.success('Thank you for subscribing!')
      setEmail('')
    }
  }

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
          <div className="footer-section">
            <h4 className="footer-title">
              <span className="title-icon">✦</span> STUDIO
            </h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/showcase">Showcase</Link></li>
            </ul>
          </div>

          {/* Discover Section */}
          <div className="footer-section">
            <h4 className="footer-title">
              <span className="title-icon">✦</span> DISCOVER
            </h4>
            <div className="footer-discover-tags">
              <Link to="/projects" className="discover-tag">Web Development</Link>
              <Link to="/projects" className="discover-tag">UI/UX</Link>
              <Link to="/projects" className="discover-tag">Mobile</Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-title">
              <span className="title-icon">✦</span> CONTACT
            </h4>
            <div className="footer-contact-info">
              <a href="mailto:santiagonikos@gmail.com" className="contact-link">
                santiagonikos@gmail.com
              </a>
              <a href="tel:+13109850496" className="contact-link">
                +1 (310) 985-0496
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section">
            <h4 className="footer-title">
              <span className="title-icon">✦</span> NEWSLETTER
            </h4>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-logo">
              <span className="logo-icon">✦</span>
              <span className="logo-text">Portfolio</span>
            </div>

            <p className="footer-copyright">
              ALL RIGHTS RESERVED TO <strong>KIT NICHOLAS SANTIAGO</strong> {currentYear}
            </p>

            <div className="footer-socials">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaTiktok />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
