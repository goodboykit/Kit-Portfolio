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
      {/* Marquee Section - Cream Background */}
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
                  Building innovative
                  <br />
                  digital solutions
                </h2>
                <p className="about-description">
                  Hi! I'm Kit Nicholas Santiago, a 4th year IT student specializing in Mobile and Web Application
                  development. As a US citizen currently studying in the Philippines at National University Manila,
                  I bring a unique perspective to software development, blending international experience with
                  technical expertise.
                </p>
                <p className="about-description">
                  My journey includes active participation in tech communities like Google Developers Students Club
                  and AWS Learning Club, where I've developed projects using React, Flutter, Node.js, and cloud technologies.
                  I've competed in multiple hackathons achieving top placements, and I'm passionate about creating
                  user-centered applications that solve real-world problems.
                </p>
                <p className="about-description">
                  Currently seeking internship opportunities in the US to apply my skills in mobile and web development,
                  contribute to innovative projects, and continue growing as a developer.
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
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Built</div>
                <div className="stat-icon">✦</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Hackathon Wins</div>
                <div className="stat-icon">✦</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8+</div>
                <div className="stat-label">Certifications</div>
                <div className="stat-icon">✦</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Tech Events</div>
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
                  Building innovative solutions through clean code, continuous learning, and a passion
                  for creating meaningful digital experiences
                </h3>
                <div className="philosophy-author">
                  <span className="author-name">My Approach</span>
                  <span className="author-divider">—</span>
                  <span className="author-title">Mobile & Web Development</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
