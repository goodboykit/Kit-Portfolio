import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Animation variants for nav items
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Always show navbar at the very top
      if (currentScrollY < 10) {
        setHidden(false)
        setScrolled(false)
      } else {
        setScrolled(true)

        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setHidden(true)
        } else {
          setHidden(false)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/showcase', label: 'Showcase' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/">Kit Nicholas Portfolio</Link>
        </motion.div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, idx) => (
            <motion.li
              key={link.to}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <NavLink
                to={link.to}
                onClick={() => setIsOpen(false)}
                end
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="navbar-toggle"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
