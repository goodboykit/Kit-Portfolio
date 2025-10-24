import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Modal from 'react-modal'
import './Projects.css'

// Set app element for accessibility
Modal.setAppElement('#root')

const Projects = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const [gridRef, gridInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Stagger animation for project cards
  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  const projects = [
    {
      id: 1,
      title: 'EcoDex',
      description: 'EcoDex is a comprehensive environmental sustainability platform created for the Google Developers Student Club (GDSC) Ideathon Hackathon at National University Manila. This Figma-based prototype showcases an innovative approach to environmental awareness and community engagement.',
      detailedDescription: 'EcoDex is a comprehensive environmental sustainability platform created for the Google Developers Student Club (GDSC) Ideathon Hackathon at National University Manila. This Figma-based prototype showcases an innovative approach to environmental awareness and community engagement. The platform features user-friendly interfaces for plant recognition, quest challenges, environmental tracking, and gamified sustainability practices that encourage users to discover their environmental footprint and contribute positively to the planet.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems'],
      features: ['Plant Recognition & Scanning', 'Quest Challenge System', 'Environmental Impact Tracking', 'Points & Rewards System', 'Plant Dictionary & Learning Hub', 'Community Engagement Features'],
      github: 'https://github.com',
      live: 'https://www.figma.com/proto/XIIhFIzAF9At8GERnL4JDh/EcoDex?node-id=0-1&p=f&t=TXCA3OibejTNB07q-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=265%3A6288&show-proto-sidebar=1',
      color: 'cyan',
      images: [
        '/assets/images/projects/ecodex.png',
        '/assets/images/projects/ecodex2.png',
        '/assets/images/projects/ecodex3.png',
        '/assets/images/projects/ecodex4.png',
        '/assets/images/projects/ecodex5.png',
        '/assets/images/projects/ecodex6.png',
        '/assets/images/projects/ecodex7.png'
      ]
    },
    {
      id: 2,
      title: 'Furtastic Buddies',
      description: 'Your Peace of Mind, Our Focus - A comprehensive pet care platform designed to help pet owners travel worry-free with advanced monitoring, health tracking, and community features.',
      detailedDescription: 'Furtastic Buddies is an innovative mobile application that addresses the concerns of pet owners who want to travel but worry about their pets. The app offers comprehensive features including real-time pet monitoring with live video feed, detailed health tracking for eating, drinking, and activity patterns, a social community for pet owners to share updates, and an integrated marketplace for pet products and services. Key highlights include a personalized pet profile system, location tracking for walks, professional vet appointment booking, and a vibrant community feed where pets can have their own social presence.',
      technologies: ['Flutter', 'Dart', 'Figma', 'UI/UX Design', 'Mobile Development'],
      features: [
        'Real-time Pet Monitoring & Live Feed',
        'Health & Activity Tracking Dashboard',
        'Pet Profile & Data Management',
        'Location Tracking for Pet Walks',
        'Integrated Pet Services Marketplace',
        'Social Community Platform',
        'Vet Appointment Scheduling',
        'Pet Product Shopping System'
      ],
      github: 'https://github.com/goodboykit/FurtasticBuddies.git',
      live: 'https://www.figma.com/proto/eeDk5IXgXuBL6QcGf7efIa/Furtastic-Buddies?node-id=520-2049&p=f&t=89YvL8VFbRxeEhZm-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=520%3A2049&show-proto-sidebar=1',
      color: 'peach',
      images: [
        '/assets/images/projects/furtastic.png',
        '/assets/images/projects/furtastic2.png',
        '/assets/images/projects/furtastic3.png',
        '/assets/images/projects/furtastic4.png',
        '/assets/images/projects/furtastic5.png',
        '/assets/images/projects/furtastic6.png',
        '/assets/images/projects/furtastic7.png',
        '/assets/images/projects/furtastic8.png',
        '/assets/images/projects/furtastic9.png'
      ]
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides real-time weather data, forecasts, and interactive maps using external APIs.',
      detailedDescription: 'A feature-rich weather application that provides real-time weather information from multiple data sources. Includes current weather conditions, 7-day forecasts, hourly predictions, interactive weather maps, weather alerts, and historical data visualization with Chart.js.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      features: ['Real-time Data', '7-Day Forecast', 'Interactive Maps', 'Weather Alerts', 'Historical Data', 'Multiple Locations'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'coral',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and reporting features.',
      detailedDescription: 'An advanced analytics platform for social media management. Features comprehensive data visualization using D3.js, user engagement metrics, follower growth tracking, post performance analytics, competitor analysis, and automated reporting with customizable templates.',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      features: ['Data Visualization', 'Engagement Metrics', 'Growth Tracking', 'Performance Analytics', 'Competitor Analysis', 'Automated Reports'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'yellow',
    },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0) // Reset to first image when opening modal
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const goToNextProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    setSelectedProject(projects[nextIndex])
  }

  const goToPreviousProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length
    setSelectedProject(projects[previousIndex])
  }

  return (
    <>
      {/* Top Marquee - Cream Background */}
      <section className="projects-marquee">
        <div className="marquee-content">
          <span className="marquee-item">Recent Work ✦</span>
          <span className="marquee-item">Featured Projects ✦</span>
          <span className="marquee-item">Case Studies ✦</span>
          <span className="marquee-item">Creative Solutions ✦</span>
          <span className="marquee-item">Recent Work ✦</span>
          <span className="marquee-item">Featured Projects ✦</span>
          <span className="marquee-item">Case Studies ✦</span>
          <span className="marquee-item">Creative Solutions ✦</span>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="projects-container">
          <div>
            {/* Section Header */}
            <motion.div
              className="projects-header"
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="projects-badge">• Featured Work</span>
              <h2 className="projects-title">
                <TypeAnimation
                  sequence={[
                    'Selected',
                    3000,
                    'Featured',
                    3000,
                    'Innovative',
                    3000,
                    'Creative',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <br />
                Projects
              </h2>
              <p className="projects-subtitle">
                Showcasing my best work in web development, design, and creative solutions
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div ref={gridRef} className="projects-grid">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className={`project-card project-${project.color}`}
                  initial={{ opacity: 0.5, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  onClick={() => openModal(project)}
                >
                  <div className="project-number">
                    <span>0{project.id}</span>
                  </div>

                  <motion.div
                    className="project-image"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    {(project.id === 1 || project.id === 2) && project.images ? (
                      <img 
                        src={project.images[0]} 
                        alt={`${project.title} Project Screenshot`}
                        className="project-image-real"
                        loading="lazy"
                        onError={(e) => {
                          console.warn(`Failed to load image: ${project.images[0]}`);
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                    <div className="project-image-placeholder"></div>
                    )}
                    <motion.div
                      className="project-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="project-overlay-text">
                        Click to view details
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-action">
                      {project.id === 1 ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="view-project-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Figma Prototype →
                        </a>
                      ) : project.id === 2 ? (
                        <div className="project-btn-container">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Figma Prototype →
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Project Code →
                          </a>
                        </div>
                      ) : (
                      <button className="view-project-btn" onClick={(e) => { e.stopPropagation(); openModal(project); }}>
                        View Details →
                      </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="project-modal"
        overlayClassName="project-modal-overlay"
        closeTimeoutMS={300}
      >
        {selectedProject && (
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </button>

            <div className="modal-header">
              <div className={`modal-image project-${selectedProject.color}`}>
                {(selectedProject.id === 1 || selectedProject.id === 2) && selectedProject.images ? (
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} Project Screenshot ${currentImageIndex + 1}`}
                    className="modal-image-real"
                    loading="lazy"
                    onError={(e) => {
                      console.warn(`Failed to load image: ${selectedProject.images[currentImageIndex]}`);
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                <div className="modal-image-placeholder"></div>
                )}
                <div className="modal-number">
                  <span>0{selectedProject.id}</span>
                </div>

                {(selectedProject.id === 1 || selectedProject.id === 2) && selectedProject.images && selectedProject.images.length > 1 ? (
                  <>
                    <button 
                      className="image-nav image-nav-left" 
                      onClick={() => setCurrentImageIndex((prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1)} 
                      aria-label="Previous image"
                    >
                      <FaChevronLeft />
                    </button>

                    <button 
                      className="image-nav image-nav-right" 
                      onClick={() => setCurrentImageIndex((prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1)} 
                      aria-label="Next image"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                ) : (
                  <>
                <button className="image-nav image-nav-left" onClick={goToPreviousProject} aria-label="Previous project">
                  <FaChevronLeft />
                </button>

                <button className="image-nav image-nav-right" onClick={goToNextProject} aria-label="Next project">
                  <FaChevronRight />
                </button>
                  </>
                )}
              </div>
              
              {(selectedProject.id === 1 || selectedProject.id === 2) && selectedProject.images && selectedProject.images.length > 1 && (
                <div className="image-indicators">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.detailedDescription}</p>

              <div className="modal-section">
                <h3 className="modal-section-title">Key Features</h3>
                <div className="modal-features">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-icon">✦</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Technologies Used</h3>
                <div className="modal-technologies">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge-modal">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {selectedProject.id === 1 ? (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-figma"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    </svg>
                    <span>View Figma Prototype</span>
                  </a>
                ) : selectedProject.id === 2 ? (
                  <>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn modal-btn-github"
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn modal-btn-figma"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                      </svg>
                      <span>View Figma Prototype</span>
                    </a>
                  </>
                ) : (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn modal-btn-github"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default Projects
