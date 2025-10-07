import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import toast from 'react-hot-toast'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Your City, Country',
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
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="contact-header">
              <span className="contact-badge">• Contact Me</span>
              <h2 className="contact-title">
                Let's work
                <br />
                together
              </h2>
              <p className="contact-subtitle">
                Have a project in mind or just want to chat? Drop me a message!
              </p>
            </div>

            {/* Contact Content */}
            <div className="contact-content">
              {/* Left Side - Info */}
              <motion.div
                className="contact-info"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="info-card">
                  <h3>Get in touch</h3>
                  <p>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>

                  <div className="info-items">
                    {contactInfo.map((info, idx) => (
                      <div key={info.title} className="info-item">
                        <div className="info-icon">{info.icon}</div>
                        <div className="info-content">
                          <h4>{info.title}</h4>
                          {info.link ? (
                            <a href={info.link}>{info.value}</a>
                          ) : (
                            <span>{info.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="social-links">
                    <p className="social-label">Follow me:</p>
                    <div className="social-icons">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={social.label}
                          className="social-icon"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                className="contact-form-wrapper"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Let's build something amazing"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows="6"
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="contact-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="cta-decoration">✦</div>
              <h3>Ready to start your project?</h3>
              <p>Let's create something amazing together</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}

export default Contact
