import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm a passionate developer with a love for creating elegant solutions to complex problems.
                My journey in web development started several years ago, and I've been constantly learning and
                growing ever since.
              </p>
              <p>
                I specialize in building responsive, user-friendly applications using modern technologies.
                I'm always excited to take on new challenges and collaborate with others to bring ideas to life.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge with the developer community.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>100+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="about-image">
              <div className="about-image-wrapper">
                <div className="about-image-placeholder"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
