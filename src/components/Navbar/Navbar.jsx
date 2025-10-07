import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Portfolio</Link>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
