import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
      {/* Marquee Section */}
      <section className="about-marquee">
        <div className="marquee-content">
          <span className="marquee-item">Passionate Developer ✦</span>
          <span className="marquee-item">Creative Problem Solver ✦</span>
          <span className="marquee-item">Lifelong Learner ✦</span>
          <span className="marquee-item">Detail Oriented ✦</span>
          <span className="marquee-item">Passionate Developer ✦</span>
          <span className="marquee-item">Creative Problem Solver ✦</span>
          <span className="marquee-item">Lifelong Learner ✦</span>
          <span className="marquee-item">Detail Oriented ✦</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="about-header">
              <span className="about-badge">• About Me</span>
            </div>

            {/* Main Content Grid */}
            <div className="about-content">
              <motion.div
                className="about-text-section"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="about-title">
                  Crafting digital
                  <br />
                  experiences with passion
                </h2>
                <p className="about-description">
                  Hello! I'm a passionate developer with a love for creating elegant solutions to complex problems.
                  My journey in web development started several years ago, and I've been constantly learning and
                  growing ever since.
                </p>
                <p className="about-description">
                  I specialize in building responsive, user-friendly applications using modern technologies.
                  When I'm not coding, you can find me exploring new technologies and contributing to open-source
                  projects.
                </p>
              </motion.div>

              <motion.div
                className="about-image-section"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="about-image-wrapper">
                  <div className="about-image-placeholder"></div>
                  <div className="about-badge-float">
                    <span>Creative</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
                <div className="stat-icon">✦</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
                <div className="stat-icon">✦</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Happy Clients</div>
                <div className="stat-icon">✦</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Dedicated Support</div>
                <div className="stat-icon">✦</div>
              </div>
            </motion.div>

            {/* Philosophy Section */}
            <motion.div
              className="about-philosophy"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="philosophy-content">
                <span className="philosophy-quote">"</span>
                <h3 className="philosophy-text">
                  Creating beautiful, functional, and user-centered digital experiences that make a difference
                </h3>
                <div className="philosophy-author">
                  <span className="author-name">My Philosophy</span>
                  <span className="author-divider">—</span>
                  <span className="author-title">Design & Development</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Marquee */}
      <section className="about-marquee about-marquee-bottom">
        <div className="marquee-content marquee-reverse">
          <span className="marquee-item">Turning Ideas Into Reality ✦</span>
          <span className="marquee-item">Pixel Perfect Design ✦</span>
          <span className="marquee-item">Clean Architecture ✦</span>
          <span className="marquee-item">Optimized Performance ✦</span>
          <span className="marquee-item">Turning Ideas Into Reality ✦</span>
          <span className="marquee-item">Pixel Perfect Design ✦</span>
          <span className="marquee-item">Clean Architecture ✦</span>
          <span className="marquee-item">Optimized Performance ✦</span>
        </div>
      </section>
    </>
  )
}

export default About
