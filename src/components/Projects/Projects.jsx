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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
      detailedDescription: 'A comprehensive e-commerce solution built with modern technologies. Features include user authentication with JWT, product catalog with advanced filtering, shopping cart functionality, secure payment integration with Stripe, order management system, and an admin dashboard for inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['User Authentication', 'Product Management', 'Shopping Cart', 'Payment Integration', 'Order Tracking', 'Admin Dashboard'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'cyan',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      detailedDescription: 'An intuitive task management application designed for teams. Built with real-time synchronization using Firebase, featuring drag-and-drop task organization, team collaboration tools, deadline management, priority levels, and progress tracking with visual dashboards.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      features: ['Real-time Updates', 'Drag & Drop', 'Team Collaboration', 'Deadline Management', 'Priority Levels', 'Progress Tracking'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'peach',
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
                    <div className="project-image-placeholder"></div>
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
                      <button className="view-project-btn" onClick={(e) => { e.stopPropagation(); openModal(project); }}>
                        View Details →
                      </button>
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
                <div className="modal-image-placeholder"></div>
                <div className="modal-number">
                  <span>0{selectedProject.id}</span>
                </div>

                <button className="image-nav image-nav-left" onClick={goToPreviousProject} aria-label="Previous project">
                  <FaChevronLeft />
                </button>

                <button className="image-nav image-nav-right" onClick={goToNextProject} aria-label="Next project">
                  <FaChevronRight />
                </button>
              </div>
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
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn modal-btn-github"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default Projects
