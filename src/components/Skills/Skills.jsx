import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="skills-header">
              <span className="skills-badge">• Technical Skills</span>
              <h2 className="skills-title">
                Technologies &
                <br />
                Expertise
              </h2>
              <p className="skills-subtitle">
                Building modern applications with cutting-edge technologies and best practices
              </p>
            </div>

            {/* Skills Grid - Better Layout */}
            <div className="skills-grid">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  className="skill-category-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
                        whileHover={{ y: -5, scale: 1.05 }}
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
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="additional-content">
                <div className="additional-text">
                  <h3>Always Learning</h3>
                  <p>
                    Continuously expanding my skill set with the latest technologies and industry best practices.
                    Passionate about clean code, performance optimization, and creating exceptional user experiences.
                  </p>
                </div>
                <div className="additional-badges">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Next.js</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">Docker</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Skills
