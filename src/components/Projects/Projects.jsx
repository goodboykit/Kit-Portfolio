import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Task+Manager',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides real-time weather data, forecasts, and interactive maps using external APIs.',
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Weather+App',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and reporting features.',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Dashboard',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
