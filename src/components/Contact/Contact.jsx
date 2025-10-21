import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import toast from 'react-hot-toast'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulating email send - Replace with your EmailJS credentials
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'santiagonikos@gmail.com',
      link: 'mailto:santiagonikos@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+1 (310) 985-0496',
      link: 'tel:+13109850496',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Bellflower, CA | Manila, PH',
      link: null,
    },
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <section className="contact section" id="contact">
      <div className="contact-container">
        <div>
          {/* Section Header */}
          <motion.div
            className="contact-header"
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="contact-badge">• Contact Me</span>
            <h2 className="contact-title">
              <TypeAnimation
                sequence={[
                  "Let's connect",
                  3000,
                  "Let's collaborate",
                  3000,
                  "Get in touch",
                  3000,
                  "Reach out",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="contact-subtitle">
              I'm actively seeking internship and career opportunities. Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Content - Centered */}
          <div className="contact-content-centered">
            {/* Centered Info Card */}
            <motion.div
              className="contact-info-centered"
              initial={{ opacity: 0.5, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                className="info-card"
                whileHover={{ scale: 1.02 }}
              >
                <motion.h3
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Get in touch
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I'm open to discussing internship opportunities, job openings, or networking connections in the tech industry.
                </motion.p>

                <div className="info-items">
                  {contactInfo.map((info, idx) => (
                    <motion.div
                      key={info.title}
                      className="info-item"
                      initial={{ opacity: 0.5, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                      whileHover={{ x: 2, scale: 1.02 }}
                    >
                      <div className="info-icon">{info.icon}</div>
                      <div className="info-content">
                        <h4>{info.title}</h4>
                        {info.link ? (
                          <a href={info.link}>{info.value}</a>
                        ) : (
                          <span>{info.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="social-links"
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <p className="social-label">Follow me:</p>
                  <div className="social-icons">
                    {socialLinks.map((social, idx) => (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                        className="social-icon"
                        initial={{ opacity: 0.5, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                        whileHover={{ scale: 1.03, rotate: 1 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact