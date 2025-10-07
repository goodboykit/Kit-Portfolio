import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './PortfolioShowcase.css'

const PortfolioShowcase = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const photoGallery = [
    { id: 1, label: 'GDSC Event', name: 'GDSC-WORKSHOP', color: 'cyan-gradient' },
    { id: 2, label: 'AWS Learning', name: 'AWS-WORKSHOP', color: 'coral-gradient' },
    { id: 3, label: 'Community Event', name: 'COMMUNITY-MEETUP', color: 'orange-gradient' },
    { id: 4, label: 'Flutter Workshop', name: 'FLUTTER-SESSION', color: 'yellow-gradient' },
  ]

  // Auto-play functionality - change photo every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photoGallery.length)
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [photoGallery.length])

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photoGallery.length)
  }

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photoGallery.length) % photoGallery.length)
  }


  const communityExperience = [
    {
      id: 1,
      organization: 'Google Developers Student Club',
      role: 'Technical Team Member',
      location: 'National University, Manila',
      period: '09/2023 - 06/2025',
      type: 'Leadership',
      description: [
        'Supported technical projects and initiatives for student developers',
        'Assists in organizing coding hackathons and mentorship programs',
        'Assessed and maintained tech systems with Facebook, Microsoft Teams live streaming',
        'Ensured quality and flow of services for events'
      ],
      color: 'cyan',
      logoPlaceholder: 'GDSC'
    },
    {
      id: 2,
      organization: 'Amazon Web Services Learning Club',
      role: 'Vice Finance Officer',
      location: 'Sampaloc, Manila City',
      period: '04/2024 - 05/2025',
      type: 'Leadership',
      description: [
        'Managed financial planning and budgeting for club activities',
        'Oversees club expenses and sponsorship opportunities',
        'Coordinates with core officers to ensure resource allocation',
        'Strategic planning for club sustainability'
      ],
      color: 'yellow',
      logoPlaceholder: 'AWS'
    },
    {
      id: 3,
      organization: 'National University Community Extension',
      role: 'Core Volunteer',
      location: 'Brgy. Laurel, Batangas',
      period: '04/08/2024',
      type: 'Volunteer',
      description: [
        'One-day program focused on increasing digital literacy',
        'Trained members of Molinete Farmers Association (MOFA)',
        'Provided onsite basic computer literacy training',
        'Taught useful tools for organization day-to-day operations'
      ],
      color: 'peach',
      logoPlaceholder: 'NU'
    },
    {
      id: 4,
      organization: 'Flutter Flow Manila Philippines',
      role: 'Core Volunteer',
      location: 'White Cloak, Pasig City',
      period: '07/2024 - Present',
      type: 'Volunteer',
      description: [
        'Actively contributes to community events and workshops',
        'Assists beginners in learning Flutter Flow for app development',
        'Engages with students and developers',
        'Promotes no-code/low-code solutions in mobile development and AI powered apps'
      ],
      color: 'coral',
      logoPlaceholder: 'FF'
    }
  ]

  const seminars = [
    'Google I/O Extended Manila 2024',
    'GDG Cloud Manila PH 2024 AI Workshop',
    'Introduction to Flutter Mobile UI/UX 2024',
    'Ctrl + Solve: Google Solutions Challenge 2023',
    'Arduino Day 2024: Coding and Robotics',
    'FFDC Extended Manila: Build Next Gen Apps with Flutter Flow 5.0 2024'
  ]

  return (
    <div className="portfolio-showcase">
      {/* Marquee Section */}
      <section className="showcase-marquee">
        <div className="marquee-content">
          <span className="marquee-item">Community Leader ✦</span>
          <span className="marquee-item">Tech Volunteer ✦</span>
          <span className="marquee-item">Active Contributor ✦</span>
          <span className="marquee-item">Event Organizer ✦</span>
          <span className="marquee-item">Community Leader ✦</span>
          <span className="marquee-item">Tech Volunteer ✦</span>
          <span className="marquee-item">Active Contributor ✦</span>
          <span className="marquee-item">Event Organizer ✦</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="community-hero">
        <div className="showcase-container">
          <div className="hero-grid">
            {/* Left - Text Content */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0.5, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="hero-badge">
                <span className="badge-icon">✦</span>
                Community Involvement
              </span>
              <h1 className="hero-title">
                <TypeAnimation
                  sequence={[
                    'Tech Community',
                    3000,
                    'Developer Community',
                    3000,
                    'Innovation',
                    3000,
                    'Tech Leadership',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <br />
                <span className="title-highlight">Experience</span>
              </h1>
              <p className="hero-subtitle">
                Passionate about building tech communities, organizing events, and empowering
                developers through mentorship and collaboration.
              </p>

              <div className="hero-stats">
                <motion.div
                  className="stat-item"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Organizations</div>
                </motion.div>
                <motion.div
                  className="stat-item"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Events Attended</div>
                </motion.div>
                <motion.div
                  className="stat-item"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="stat-number">2</div>
                  <div className="stat-label">Leadership Roles</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              className="hero-image-section"
              initial={{ opacity: 0.5, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="hero-image-wrapper">
                <motion.div
                  className="hero-image-placeholder"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="image-overlay">
                    <span className="placeholder-text">Your Community Photo Here</span>
                  </div>
                </motion.div>
                <motion.div
                  className="floating-badge"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span>COMMUNITY</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Cards Section */}
      <section className="community-experience">
        <div className="showcase-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0.5, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">• My Journey</span>
            <h2 className="section-title">
              Community
              <br />
              Leadership & Contributions
            </h2>
          </motion.div>

          <div className="experience-grid">
            {communityExperience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                className={`experience-card experience-${exp.color}`}
                initial={{ opacity: 0.5, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="experience-card-inner">
                  <div className={`experience-logo ${exp.color}-bg`}>
                    <span className="logo-text">{exp.logoPlaceholder}</span>
                  </div>

                  <div className="experience-content">
                    <div className="experience-header">
                      <div className="experience-type-badge">{exp.type}</div>
                      <motion.div
                        className="experience-icon"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        ✦
                      </motion.div>
                    </div>

                    <h3 className="experience-org">{exp.organization}</h3>
                    <h4 className="experience-role">{exp.role}</h4>

                    <div className="experience-meta">
                      <div className="meta-item">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                      <div className="meta-item">
                        <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="experience-description">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Showcase Carousel */}
      <section className="photo-showcase">
        {/* Decorative Elements */}
        <div className="decor-dots-group">
          <span className="decor-dot dot-1"></span>
          <span className="decor-dot dot-2"></span>
          <span className="decor-dot dot-3"></span>
          <span className="decor-dot dot-4"></span>
          <span className="decor-dot dot-5"></span>
        </div>
        <div className="decor-shapes-group">
          <div className="decor-triangle"></div>
          <div className="decor-square"></div>
          <div className="decor-line"></div>
        </div>

        <div className="showcase-container">
          <div className="photo-showcase-grid">
            {/* Left Photo - Previous */}
            <motion.div
              className="showcase-photo-item"
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="photo-box"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`photo-placeholder ${photoGallery[(currentPhotoIndex - 1 + photoGallery.length) % photoGallery.length].color}`}>
                  <span className="photo-placeholder-text">
                    {photoGallery[(currentPhotoIndex - 1 + photoGallery.length) % photoGallery.length].label}
                  </span>
                </div>
              </motion.div>
              <div className="photo-label-wrapper">
                <div className="photo-number">
                  {String((currentPhotoIndex - 1 + photoGallery.length) % photoGallery.length + 1).padStart(2, '0')}/
                </div>
                <div className="photo-name">
                  {photoGallery[(currentPhotoIndex - 1 + photoGallery.length) % photoGallery.length].name}
                </div>
              </div>
            </motion.div>

            {/* Center Large Circular Photo - Current */}
            <motion.div
              className="showcase-photo-center"
              initial={{ opacity: 0.5, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                key={currentPhotoIndex}
                className="circular-photo"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                <div className={`photo-placeholder ${photoGallery[currentPhotoIndex].color}`}>
                  <span className="photo-placeholder-text">{photoGallery[currentPhotoIndex].label}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Photo - Next */}
            <motion.div
              className="showcase-photo-item"
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="photo-box"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`photo-placeholder ${photoGallery[(currentPhotoIndex + 1) % photoGallery.length].color}`}>
                  <span className="photo-placeholder-text">
                    {photoGallery[(currentPhotoIndex + 1) % photoGallery.length].label}
                  </span>
                </div>
              </motion.div>
              <div className="photo-label-wrapper">
                <div className="photo-number">
                  {String((currentPhotoIndex + 1) % photoGallery.length + 1).padStart(2, '0')}/
                </div>
                <div className="photo-name">
                  {photoGallery[(currentPhotoIndex + 1) % photoGallery.length].name}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows Row */}
          <div className="photo-cta-row">
            <motion.div
              className="cta-box"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <button className="nav-arrow-button" onClick={handlePrevPhoto}>
                <FaChevronLeft />
              </button>
            </motion.div>
            <div className="cta-spacer">
              <div className="carousel-dots">
                {photoGallery.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentPhotoIndex ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                    aria-label={`Go to photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <motion.div
              className="cta-box"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <button className="nav-arrow-button" onClick={handleNextPhoto}>
                <FaChevronRight />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seminars & Events Section */}
      <section className="community-seminars">
        <div className="showcase-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0.5, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">• Learning & Growth</span>
            <h2 className="section-title">
              Seminars &
              <br />
              Events Attended
            </h2>
          </motion.div>

          <div className="seminars-grid">
            {seminars.map((seminar, idx) => (
              <motion.div
                key={idx}
                className="seminar-card"
                initial={{ opacity: 0.5, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{
                  x: 3,
                  scale: 1.02,
                  backgroundColor: "rgba(255, 215, 0, 0.1)"
                }}
              >
                <div className="seminar-number">0{idx + 1}</div>
                <div className="seminar-content">
                  <FaCalendarAlt className="seminar-icon" />
                  <p className="seminar-title">{seminar}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistic Photo Collage Section */}
      <section className="photo-collage">
        <div className="showcase-container">
          {/* Top Section with Text and Circular Photo */}
          <div className="collage-top-section">
            <motion.div
              className="collage-text-content"
              initial={{ opacity: 0.5, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <span className="collage-badge">• COMMUNITY PROJECT</span>
              <h2 className="collage-title">
                I bring{' '}
                <TypeAnimation
                  sequence={[
                    'innovation and',
                    3000,
                    'creativity and',
                    3000,
                    'passion and',
                    3000,
                    'dedication and',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <br />
                collaboration with every event
              </h2>
              <p className="collage-description">
                Active participation in tech communities, organizing workshops and hackathons
                that bring developers together. Building connections and fostering growth through
                collaborative learning experiences.
              </p>
              <div className="collage-meta">
                <span>2023 - 2025</span>
                <span className="meta-divider">|</span>
                <span>KIT NICHOLAS</span>
              </div>
            </motion.div>

            <motion.div
              className="collage-main-photo"
              initial={{ opacity: 0.5, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="large-circular-photo">
                <div className="photo-placeholder yellow-gradient">
                  <span className="photo-placeholder-text">Workshop Leader</span>
                </div>
              </div>
              <motion.div
                className="drag-badge"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                whileHover={{ scale: 1.03 }}
              >
                <span>DRAG<br />TO VIEW<br />MORE</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Impact Section */}
      <section className="community-impact">
        <div className="showcase-container">
          <motion.div
            className="impact-content"
            initial={{ opacity: 0.5, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="impact-icon"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <FaTrophy />
            </motion.div>
            <h2 className="impact-title">
              <TypeAnimation
                sequence={[
                  'Building Communities,',
                  3000,
                  'Empowering Developers,',
                  3000,
                  'Fostering Innovation,',
                  3000,
                  'Leading Change,',
                  3000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <br />
              <span className="impact-highlight">Creating Impact</span>
            </h2>
            <p className="impact-description">
              Through active participation in tech communities, I've helped organize hackathons,
              mentored aspiring developers, and contributed to digital literacy initiatives that
              empower individuals and organizations.
            </p>
            <div className="impact-badges">
              <span className="impact-badge">Hackathon Organizer</span>
              <span className="impact-badge">Community Mentor</span>
              <span className="impact-badge">Digital Literacy Advocate</span>
              <span className="impact-badge">Event Coordinator</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioShowcase
