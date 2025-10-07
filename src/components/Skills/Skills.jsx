import React from 'react'
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
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
        { name: 'Database', icon: <FaDatabase />, color: '#00758F' },
      ],
    },
  ]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>

          <div className="skills-grid">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
                    >
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
