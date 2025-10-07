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
        { name: 'React', icon: <FaReact />, level: 95 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 88 },
        { name: 'JavaScript', icon: <FaJs />, level: 95 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 98 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 95 },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 92 },
        { name: 'Redux', icon: <SiRedux />, level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 90 },
        { name: 'Express', icon: <SiExpress />, level: 88 },
        { name: 'Python', icon: <FaPython />, level: 85 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 82 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 90 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 93 },
        { name: 'Docker', icon: <FaDocker />, level: 80 },
        { name: 'Figma', icon: <FaFigma />, level: 88 },
        { name: 'Database', icon: <FaDatabase />, level: 87 },
      ],
    },
  ]

  return (
    <>
      {/* Top Marquee */}
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
                        whileHover={{ y: -5 }}
                      >
                        <div className="skill-item-content">
                          <div className="skill-icon-wrapper">
                            <div className="skill-icon">{skill.icon}</div>
                          </div>
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <div className="skill-progress-bar">
                              <motion.div
                                className="skill-progress-fill"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{ duration: 1, delay: idx * 0.1 + skillIdx * 0.1 }}
                              />
                            </div>
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

      {/* Bottom Marquee */}
      <section className="skills-marquee skills-marquee-bottom">
        <div className="marquee-content marquee-reverse">
          <span className="marquee-item">React & Next.js ✦</span>
          <span className="marquee-item">Node.js & Express ✦</span>
          <span className="marquee-item">TypeScript & JavaScript ✦</span>
          <span className="marquee-item">MongoDB & PostgreSQL ✦</span>
          <span className="marquee-item">React & Next.js ✦</span>
          <span className="marquee-item">Node.js & Express ✦</span>
          <span className="marquee-item">TypeScript & JavaScript ✦</span>
          <span className="marquee-item">MongoDB & PostgreSQL ✦</span>
        </div>
      </section>
    </>
  )
}

export default Skills
