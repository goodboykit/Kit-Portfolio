import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import './About.css'

const About = () => {
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
          <div>
            {/* Section Header */}
            <motion.div
              className="about-header"
              initial={{ opacity: 0.5, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="about-badge">• About Me</span>
            </motion.div>

            {/* Main Content Grid */}
            <div className="about-content">
              <motion.div
                className="about-text-section"
                initial={{ opacity: 0.5, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h2 className="about-title">
                  <TypeAnimation
                    sequence={[
                      'Building innovative',
                      3000,
                      'Creating powerful',
                      3000,
                      'Designing modern',
                      3000,
                      'Developing scalable',
                      3000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
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
                initial={{ opacity: 0.5, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.02, rotate: 1 }}
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
            <div className="about-stats">
              <motion.div
                className="stat-card"
                initial={{ opacity: 0.5, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0 }}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  rotate: [0, -1, 1, 0],
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
              >
                <motion.div
                  className="stat-number"
                  whileHover={{ scale: 1.03, color: "#FFD700" }}
                >
                  20+
                </motion.div>
                <div className="stat-label">Projects Built</div>
                <motion.div
                  className="stat-icon"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.div>
              </motion.div>
              <motion.div
                className="stat-card"
                initial={{ opacity: 0.5, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  rotate: [0, 1, -1, 0],
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
              >
                <motion.div
                  className="stat-number"
                  whileHover={{ scale: 1.03, color: "#FF6B4A" }}
                >
                  5+
                </motion.div>
                <div className="stat-label">Hackathon Wins</div>
                <motion.div
                  className="stat-icon"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                >
                  ✦
                </motion.div>
              </motion.div>
              <motion.div
                className="stat-card"
                initial={{ opacity: 0.5, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  rotate: [0, -1, 1, 0],
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
              >
                <motion.div
                  className="stat-number"
                  whileHover={{ scale: 1.03, color: "#FFD700" }}
                >
                  8+
                </motion.div>
                <div className="stat-label">Certifications</div>
                <motion.div
                  className="stat-icon"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                >
                  ✦
                </motion.div>
              </motion.div>
              <motion.div
                className="stat-card"
                initial={{ opacity: 0.5, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  rotate: [0, 1, -1, 0],
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
              >
                <motion.div
                  className="stat-number"
                  whileHover={{ scale: 1.03, color: "#FF6B4A" }}
                >
                  10+
                </motion.div>
                <div className="stat-label">Tech Events</div>
                <motion.div
                  className="stat-icon"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                >
                  ✦
                </motion.div>
              </motion.div>
            </div>

            {/* Education Section */}
            <motion.div
              className="about-education"
              initial={{ opacity: 0.5, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="education-title">Education</h3>

              <motion.div
                className="education-item"
                initial={{ opacity: 0.5, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ x: 3, scale: 1.01 }}
              >
                <div className="education-item-inner">
                  <div className="education-logo">
                    <span className="logo-text">NU</span>
                    {/* Replace with actual logo when ready */}
                    {/* <img src="/path-to-nu-logo.png" alt="National University" className="school-logo" /> */}
                  </div>

                  <div className="education-content">
                    <div className="education-header">
                      <div className="education-degree">BS Information Technology</div>
                      <div className="education-date">2026 (Anticipated)</div>
                    </div>
                    <div className="education-school">National University - Manila</div>
                    <div className="education-location">Manila, Philippines</div>
                    <ul className="education-details">
                      <li>Fourth-year student, specializing in Mobile and Web Application</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="education-item"
                initial={{ opacity: 0.5, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ x: 3, scale: 1.01 }}
              >
                <div className="education-item-inner">
                  <div className="education-logo">
                    <span className="logo-text">NSNU</span>
                    {/* Replace with actual logo when ready */}
                    {/* <img src="/path-to-nsnu-logo.png" alt="Nazareth School" className="school-logo" /> */}
                  </div>

                  <div className="education-content">
                    <div className="education-header">
                      <div className="education-degree">Senior High - STEM Strand</div>
                      <div className="education-date">8/2020 - 6/2022</div>
                    </div>
                    <div className="education-school">Nazareth School of National University Manila</div>
                    <div className="education-location">Philippines</div>
                    <ul className="education-details">
                      <li>Graduated with High Honors with consistent academic excellence throughout the Senior High School</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Philosophy Section */}
            <motion.div
              className="about-philosophy"
              initial={{ opacity: 0.5, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
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
          </div>
        </div>
      </section>
    </>
  )
}

export default About
