import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'
import './Projects.css'

// Set app element for accessibility
Modal.setAppElement('#root')

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

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

  return (
    <>
      {/* Top Marquee */}
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
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="projects-header">
              <span className="projects-badge">• Featured Work</span>
              <h2 className="projects-title">
                Selected
                <br />
                Projects
              </h2>
              <p className="projects-subtitle">
                Showcasing my best work in web development, design, and creative solutions
              </p>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className={`project-card project-${project.color}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  onClick={() => openModal(project)}
                >
                  <div className="project-number">
                    <span>0{project.id}</span>
                  </div>

                  <div className="project-image">
                    <div className="project-image-placeholder"></div>
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code">
                          <FaGithub />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>

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
                      <a href={project.live} className="view-project-btn">
                        View Project →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Marquee */}
      <section className="projects-marquee projects-marquee-bottom">
        <div className="marquee-content marquee-reverse">
          <span className="marquee-item">E-Commerce Solutions ✦</span>
          <span className="marquee-item">Web Applications ✦</span>
          <span className="marquee-item">Responsive Design ✦</span>
          <span className="marquee-item">API Integration ✦</span>
          <span className="marquee-item">E-Commerce Solutions ✦</span>
          <span className="marquee-item">Web Applications ✦</span>
          <span className="marquee-item">Responsive Design ✦</span>
          <span className="marquee-item">API Integration ✦</span>
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
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn modal-btn-live"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
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
