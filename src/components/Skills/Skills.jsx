import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker,
  FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaFigma
} from 'react-icons/fa'
import {
  SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss,
  SiNextdotjs, SiExpress, SiRedux, SiGraphql
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const [gridRef, gridInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [additionalRef, additionalInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // Stagger animation for category cards
  const categoryVariants = {
    hidden: { opacity: 0.5, y: 20, scale: 0.98 },
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

  // Stagger animation for skill items
  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'Redux', icon: <SiRedux /> },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'GraphQL', icon: <SiGraphql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Database', icon: <FaDatabase /> },
      ],
    },
  ]

  return (
    <>
      {/* Top Marquee - Cream Background */}
      <section className="skills-marquee">
        <div className="marquee-content">
          <span className="marquee-item">Modern Technologies ✦</span>
          <span className="marquee-item">Best Practices ✦</span>
          <span className="marquee-item">Scalable Solutions ✦</span>
          <span className="marquee-item">Clean Code ✦</span>
          <span className="marquee-item">Modern Technologies ✦</span>
          <span className="marquee-item">Best Practices ✦</span>
          <span className="marquee-item">Scalable Solutions ✦</span>
          <span className="marquee-item">Clean Code ✦</span>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="skills-container">
          <div>
            {/* Section Header */}
            <motion.div
              className="skills-header"
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="skills-badge">• Technical Skills</span>
              <h2 className="skills-title">
                <TypeAnimation
                  sequence={[
                    'Technologies &',
                    3000,
                    'Modern Stack &',
                    3000,
                    'Tools &',
                    3000,
                    'Frameworks &',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <br />
                Expertise
              </h2>
              <p className="skills-subtitle">
                Building modern applications with cutting-edge technologies and best practices
              </p>
            </motion.div>

            {/* Skills Grid - Better Layout */}
            <div ref={gridRef} className="skills-grid">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  className="skill-category-card"
                  initial={{ opacity: 0.5, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="category-header">
                    <span className="category-icon">✦</span>
                    <h3 className="category-title">{category.title}</h3>
                  </div>

                  <div className="skills-list">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        className="skill-item"
                        initial={{ opacity: 0.5, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                          delay: skillIdx * 0.05,
                          duration: 0.4,
                          ease: "easeOut"
                        }}
                        whileHover={{ y: -2, scale: 1.03, rotate: 1 }}
                      >
                        <div className="skill-item-content">
                          <div className="skill-icon-wrapper">
                            <div className="skill-icon">{skill.icon}</div>
                          </div>
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Section */}
            <motion.div
              className="skills-additional"
              initial={{ opacity: 0.5, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="additional-content">
                <motion.div
                  className="additional-text"
                  initial={{ opacity: 0.5, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3>Always Learning</h3>
                  <p>
                    Continuously expanding my skill set with the latest technologies and industry best practices.
                    Passionate about clean code, performance optimization, and creating exceptional user experiences.
                  </p>
                </motion.div>
                <motion.div
                  className="additional-badges"
                  initial={{ opacity: 0.5, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Next.js</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">Docker</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
