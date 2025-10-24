import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Modal from 'react-modal'
import './Projects.css'

// Set app element for accessibility
Modal.setAppElement('#root')

const Projects = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const [gridRef, gridInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Stagger animation for project cards
  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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

  const projects = [
    {
      id: 1,
      title: 'EcoDex',
      description: 'EcoDex is a comprehensive environmental sustainability platform created for the Google Developers Student Club (GDSC) Ideathon Hackathon at National University Manila. This Figma-based prototype showcases an innovative approach to environmental awareness and community engagement.',
      detailedDescription: 'EcoDex is a comprehensive environmental sustainability platform created for the Google Developers Student Club (GDSC) Ideathon Hackathon at National University Manila. This Figma-based prototype showcases an innovative approach to environmental awareness and community engagement. The platform features user-friendly interfaces for plant recognition, quest challenges, environmental tracking, and gamified sustainability practices that encourage users to discover their environmental footprint and contribute positively to the planet.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems'],
      features: ['Plant Recognition & Scanning', 'Quest Challenge System', 'Environmental Impact Tracking', 'Points & Rewards System', 'Plant Dictionary & Learning Hub', 'Community Engagement Features'],
      live: 'https://www.figma.com/proto/XIIhFIzAF9At8GERnL4JDh/EcoDex?node-id=0-1&p=f&t=TXCA3OibejTNB07q-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=265%3A6288&show-proto-sidebar=1',
      color: 'cyan',
      images: [
        '/assets/images/projects/ecodex.png',
        '/assets/images/projects/ecodex2.png',
        '/assets/images/projects/ecodex3.png',
        '/assets/images/projects/ecodex4.png',
        '/assets/images/projects/ecodex5.png',
        '/assets/images/projects/ecodex6.png',
        '/assets/images/projects/ecodex7.png'
      ]
    },
    {
      id: 2,
      title: 'Furtastic Buddies',
      description: 'Your Peace of Mind, Our Focus - A comprehensive pet care platform designed to help pet owners travel worry-free with advanced monitoring, health tracking, and community features.',
      detailedDescription: 'Furtastic Buddies is an innovative mobile application that addresses the concerns of pet owners who want to travel but worry about their pets. The app offers comprehensive features including real-time pet monitoring with live video feed, detailed health tracking for eating, drinking, and activity patterns, a social community for pet owners to share updates, and an integrated marketplace for pet products and services. Key highlights include a personalized pet profile system, location tracking for walks, professional vet appointment booking, and a vibrant community feed where pets can have their own social presence.',
      technologies: ['Flutter', 'Dart', 'Figma', 'UI/UX Design', 'Mobile Development'],
      features: [
        'Real-time Pet Monitoring & Live Feed',
        'Health & Activity Tracking Dashboard',
        'Pet Profile & Data Management',
        'Location Tracking for Pet Walks',
        'Integrated Pet Services Marketplace',
        'Social Community Platform',
        'Vet Appointment Scheduling',
        'Pet Product Shopping System'
      ],
      github: 'https://github.com/goodboykit/FurtasticBuddies.git',
      live: 'https://www.figma.com/proto/eeDk5IXgXuBL6QcGf7efIa/Furtastic-Buddies?node-id=520-2049&p=f&t=89YvL8VFbRxeEhZm-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=520%3A2049&show-proto-sidebar=1',
      color: 'peach',
      images: [
        '/assets/images/projects/furtastic.png',
        '/assets/images/projects/furtastic2.png',
        '/assets/images/projects/furtastic3.png',
        '/assets/images/projects/furtastic4.png',
        '/assets/images/projects/furtastic5.png',
        '/assets/images/projects/furtastic6.png',
        '/assets/images/projects/furtastic7.png',
        '/assets/images/projects/furtastic8.png',
        '/assets/images/projects/furtastic9.png'
      ]
    },
    {
      id: 3,
      title: 'Smart Test',
      description: 'A comprehensive healthcare platform focused on HIV awareness, testing, and care management, featuring anonymous consultations, real-time statistics, and a user-friendly appointment system.',
      detailedDescription: 'Smart Test is an innovative healthcare application designed to provide comprehensive HIV-related healthcare services while maintaining user privacy and confidentiality. The platform offers anonymous consultations with healthcare professionals, real-time STD statistics tracking, appointment scheduling with specialized clinics, and a secure personal health tracking system. The app emphasizes user privacy through anonymous mode access and features an intuitive interface for managing HIV testing, consultations, and ongoing care.',
      technologies: ['Flutter','Dart','Figma', 'UI/UX Design', 'Mobile Development'],
      features: [
        'Anonymous Mode Access',
        'Real-time STD Statistics Dashboard',
        'Secure Healthcare Provider Chat',
        'Appointment Scheduling System',
        'Personal Health History Tracking',
        'Interactive Clinic Locator Map',
        'Educational Resources & News',
        'Confidential Test Results Management'
      ],
      github: 'https://github.com/goodboykit/HIV',
      live: 'https://www.figma.com/proto/LQ932gq1h4kEiTw8ZyNiG8/HIV?node-id=33-708&p=f&t=DzyqatGprnxgjHs7-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=33%3A708',
      color: 'coral',
      preview: '/assets/images/projects/First Screen.png',
      images: [
        '/assets/images/projects/First Screen.png',
        '/assets/images/projects/Messages Onboarding.png',
        '/assets/images/projects/Doctors.png',
        '/assets/images/projects/Doctors info.png',
        '/assets/images/projects/Doctors info-1.png',
        '/assets/images/projects/Doctors Rating.png',
        '/assets/images/projects/Appointment.png',
        '/assets/images/projects/Appointment-1.png',
        '/assets/images/projects/Appointment-2.png',
        '/assets/images/projects/Statistics.png',
        '/assets/images/projects/Statistics-1.png',
        '/assets/images/projects/stats2.png',
        '/assets/images/projects/iPhone 14 & 15 Pro Max - 1.png',
        '/assets/images/projects/iPhone 14 & 15 Pro Max - 2.png',
        '/assets/images/projects/iPhone 14 & 15 Pro Max - 3.png',
        '/assets/images/projects/iPhone 14 & 15 Pro Max - 4.png',
        '/assets/images/projects/Details.png',
        '/assets/images/projects/Privacy Agreement-1.png'
      ]
    },
    {
      id: 4,
      title: 'Coast2Cart',
      description: 'A coastal marketplace web app that connects buyers with local fishers and artisans—browse fresh catch, chat with sellers, add to cart.',
      detailedDescription: 'Coast2Cart is a modern e‑commerce experience tailored for coastal communities. Buyers can explore fresh seafood and souvenir listings with rich product cards, advanced filters and price ranges, and a smooth product detail flow. The app features a real-time style chat between buyers and sellers, a streamlined cart with quantity controls, profile pages with badges and activity, reviews and ratings, and load‑more pagination for performant browsing. Built with a responsive design system that keeps the interface fast and accessible across devices.',
      technologies: ['React', 'MongoDB', 'Figma', 'Web Development'],
      features: [
        'Product Catalogue with Category & Price Filters',
        'Product Detail Page with Gallery and Seller Info',
        'Add to Cart with Quantity Controls and Inline Totals',
        'Buyer ↔ Seller Chat Messaging',
        'Buyer and Seller Profiles (Active/Sold tabs)',
        'Reviews & Ratings Components'
      ],
      externalLinks: [
        { href: 'https://coast2cart-frontend.vercel.app/', label: 'Open Live Site' },
        { href: 'https://www.figma.com/proto/zKSo6pxPKwZeqNdoGJQsa8/Coast2Cart---Wireframe?node-id=244-197&p=f&t=trWKGSItr404vHBy-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=244%3A197&show-proto-sidebar=1', label: 'View Figma Prototype' }
      ],
      github: '#',
      live: 'https://coast2cart-frontend.vercel.app/',
      color: 'yellow',
      preview: '/assets/images/projects/Home.png',
      images: [
        '/assets/images/projects/Home.png',
        '/assets/images/projects/Cart.png',
        '/assets/images/projects/Chat.png',
        '/assets/images/projects/coast1.png',
        '/assets/images/projects/Product Detail.png',
        '/assets/images/projects/Profile _ Buyer _ Recent Order.png',
        '/assets/images/projects/Profile _ Seller _ Active Listing.png',
        '/assets/images/projects/Profile _ Seller _ Sold Items.png',
        '/assets/images/projects/Screenshot 2025-10-25 at 5.17.24 AM.png',
        '/assets/images/projects/Seafood.png'
      ]
    },
    // Preconfigured placeholders – ready to edit later
    {
      id: 5,
      title: 'Literexia',
      description: 'An inclusive literacy platform that helps Filipino learners with dyslexia improve reading comprehension through accessible design, text‑to‑voice, and data‑driven teaching tools.',
      detailedDescription: 'Literexia is a technology‑assisted learning platform built with educators to support Filipino learners with dyslexia and other reading difficulties. The system combines accessible UX (Open Dyslexic font, customizable text sizes, and low‑distraction themes) with CRLA‑aligned assessments and activities that target alphabet knowledge, phonological awareness, decoding, word recognition, and reading comprehension. A prescriptive analytics engine synthesizes performance to recommend next steps and classroom interventions, while teacher dashboards surface progress, trends, and actionable feedback. Literexia complements face‑to‑face instruction and can be used in class or at home.',
      technologies: ['React','MongoDB', 'Accessibility', 'Text‑to‑Speech', 'Figma'],
      features: [
        'Text‑to‑voice for passages, questions, and feedback',
        'Prescriptive analytics that suggest tailored interventions',
        'Teacher dashboard for progress tracking and insights',
        'Activity library for alphabet, phonology, decoding, and comprehension',
        'Admin tools for managing classes, students, and assessment data'
      ],
      externalLinks: [
        { href: 'https://literexia.com/', label: 'Open Live Site' },
        { href: 'https://www.figma.com/proto/9XeaU1JY9nbm0BNaXHQ2DK/Literexia?node-id=977-6290&p=f&t=0uO4TFSKuaJejP20-0&scaling=min-zoom&content-scaling=fixed&page-id=681%3A269', label: 'View Figma Prototype' },
        { href: 'https://github.com/Phil1ipfs/Dyslexia', label: 'View Project Code' }
      ],
      github: 'https://github.com/Phil1ipfs/Dyslexia',
      live: 'https://literexia.com/',
      color: 'cyan',
      preview: '/assets/images/projects/Admin Pre-fed Activities View Preview.png',
      images: [
        '/assets/images/projects/Admin Pre-fed Activities Pantig-1.png',
        '/assets/images/projects/Admin Pre-fed Activities Pantig.png',
        '/assets/images/projects/Admin Pre-fed Activities View Preview.png',
        '/assets/images/projects/Phonological_Question1-1.png',
        '/assets/images/projects/Phonological_Question1-2.png',
        '/assets/images/projects/Phonological_Question1-3.png',
        '/assets/images/projects/Phonological_Question1-4.png',
        '/assets/images/projects/Phonological_Question1-5.png',
        '/assets/images/projects/Phonological_Question1-6.png',
        '/assets/images/projects/Phonological_Question1-7.png',
        '/assets/images/projects/Change Theme_ Customize-light blue.png',
        '/assets/images/projects/Change Theme_Customize-dark-1.png',
        '/assets/images/projects/Change Theme_Customize-orange-3.png',
        '/assets/images/projects/Decoding-1.png',
        '/assets/images/projects/Decoding-2.png',
        '/assets/images/projects/Decoding.png',
        '/assets/images/projects/Settings-1.png'
      ]
    },
    {
      id: 6,
      title: 'Communify',
      description: 'A community-driven mobile application empowering citizens to report and track local infrastructure issues, fostering collaboration between residents and authorities for better urban management.',
      detailedDescription: 'Communify is an innovative mobile application designed to bridge the gap between citizens and local authorities by providing a platform for reporting and monitoring community issues. Built with Flutter and Dart, the app enables users to report problems like potholes, hazardous electrical wiring, and infrastructure concerns with precise location tracking and real-time updates. The platform features an interactive map interface highlighting issue hotspots, a comprehensive news feed of local problems, and a robust system for authorities to manage and respond to community reports.',
      technologies: ['Flutter', 'Dart','UI/UX Design', 'Mobile Development'],
      features: [
        'Interactive Issue Mapping System',
        'Real-time Problem Reporting',
        'Location-based Issue Tracking',
        'Community News Feed Integration',
        'Hazard Classification System',
        'Photo Evidence Upload',
        'Issue Status Monitoring',
        'Authority Response Management'
      ],
      github: 'https://github.com/goodboykit/communify',
      live: 'https://www.figma.com/proto/NeCtn9tSFIAJG6J4uJ3RV3/Hackhaton-2024?node-id=20-203',
      color: 'peach',
      preview: '/assets/images/projects/Title logo.png',
      images: [
        '/assets/images/projects/Title logo.png',
        '/assets/images/projects/communfiy.png',
        '/assets/images/projects/communify2.png',
        '/assets/images/projects/communify3.png',
        '/assets/images/projects/communify4.png',
        '/assets/images/projects/communify5.png',
        '/assets/images/projects/communify6.png',
        '/assets/images/projects/communify7.png',
        '/assets/images/projects/communify8.png'
      ]
    },
    {
      id: 7,
      title: 'NU-Learn',
      description: 'A comprehensive e-learning platform designed for National University Manila, offering a modern approach to online education with interactive courses, progress tracking, and certification management.',
      detailedDescription: 'NU-Learn is an innovative educational platform tailored for National University Manila students and faculty. The platform features a clean, modern interface focused on accessibility and user engagement. It offers a comprehensive learning management system including course enrollment, progress tracking, certification management, and interactive assessment tools. The platform emphasizes user-friendly navigation and a seamless learning experience across different course types and educational levels.',
      technologies: ['Figma', 'UI/UX Design', 'Educational Technology', 'Learning Management System'],
      features: [
        'Interactive Course Dashboard',
        'Progress Tracking System',
        'Certificate Generation & Management',
        'Profile & Account Management',
        'Assessment & Quiz System',
        'Course Module Organization',
        'Learning Path Customization',
      ],
      live: 'https://www.figma.com/proto/xCEmjBilpgphgSSzBJ81zB/E-LEARNING?node-id=111-2&p=f&t=gOKMQuTgU2g3JMpA-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
      color: 'coral',
  preview: '/assets/images/projects/elearn.png',
      images: [
        '/assets/images/projects/elearn.png',
        '/assets/images/projects/elearn2.png',
        '/assets/images/projects/elearn3.png',
        '/assets/images/projects/elearn4.png',
        '/assets/images/projects/elearn5.png',
        '/assets/images/projects/elearn6.png',
        '/assets/images/projects/elearn7.png',
        '/assets/images/projects/elearn8.png',
        '/assets/images/projects/elearn9.png',
        '/assets/images/projects/elearn10.png',
        '/assets/images/projects/elearn11.png'
      ]
    },
    {
      id: 8,
      title: 'Project Placeholder 08',
      description: 'Coming soon: description to be added. Fully wired for images, links, and carousel.',
      detailedDescription: 'Placeholder project. Replace the links and images when ready. The modal carousel, indicators, and action buttons will adapt automatically based on provided properties.',
      technologies: ['Next.js', 'Prisma'],
      features: ['Feature A', 'Feature B', 'Feature C'],
      github: '#',
      live: '#',
      color: 'yellow',
      preview: '/assets/images/projects/ecodex6.png',
      images: [
        '/assets/images/projects/ecodex6.png',
        '/assets/images/projects/ecodex7.png'
      ]
    },
    {
      id: 9,
      title: 'Project Placeholder 09',
      description: 'Coming soon: description to be added. Fully wired for images, links, and carousel.',
      detailedDescription: 'Placeholder project. Replace the links and images when ready. The modal carousel, indicators, and action buttons will adapt automatically based on provided properties.',
      technologies: ['Python', 'Flask'],
      features: ['Feature A', 'Feature B', 'Feature C'],
      github: '#',
      live: '#',
      color: 'cyan',
      preview: '/assets/images/projects/furtastic5.png',
      images: [
        '/assets/images/projects/furtastic5.png',
        '/assets/images/projects/furtastic6.png'
      ]
    },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0) // Reset to first image when opening modal
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const goToNextProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    setSelectedProject(projects[nextIndex])
  }

  const goToPreviousProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length
    setSelectedProject(projects[previousIndex])
  }

  return (
    <>
      {/* Top Marquee - Cream Background */}
      <section className="projects-marquee">
        <div className="marquee-content">
          <span className="marquee-item">Recent Work ✦</span>
          <span className="marquee-item">Featured Projects ✦</span>
          <span className="marquee-item">Case Studies ✦</span>
          <span className="marquee-item">Creative Solutions ✦</span>
          <span className="marquee-item">Recent Work ✦</span>
          <span className="marquee-item">Featured Projects ✦</span>
          <span className="marquee-item">Case Studies ✦</span>
          <span className="marquee-item">Creative Solutions ✦</span>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="projects-container">
          <div>
            {/* Section Header */}
            <motion.div
              className="projects-header"
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="projects-badge">• Featured Work</span>
              <h2 className="projects-title">
                <TypeAnimation
                  sequence={[
                    'Selected',
                    3000,
                    'Featured',
                    3000,
                    'Innovative',
                    3000,
                    'Creative',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <br />
                Projects
              </h2>
              <p className="projects-subtitle">
                Showcasing my best work in web development, design, and creative solutions
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div ref={gridRef} className="projects-grid">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className={`project-card project-${project.color}`}
                  initial={{ opacity: 0.5, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  onClick={() => openModal(project)}
                >
                  <div className="project-number">
                    <span>0{project.id}</span>
                  </div>

                  <motion.div
                    className="project-image"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.images ? (
                      <img 
                        src={project.preview || project.images[0]} 
                        alt={`${project.title} Project Screenshot`}
                        className="project-image-real"
                        loading="lazy"
                        onError={(e) => {
                          console.warn(`Failed to load image: ${project.images[0]}`);
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                    <div className="project-image-placeholder"></div>
                    )}
                    <motion.div
                      className="project-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="project-overlay-text">
                        Click to view details
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-action">
                      {project.externalLinks && project.externalLinks.length ? (
                        <div className="project-btn-container">
                          {project.externalLinks.map((l, i) => (
                            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="project-link-btn" onClick={(e) => e.stopPropagation()}>
                              {l.label} →
                            </a>
                          ))}
                        </div>
                      ) : project.live && project.github ? (
                        <div className="project-btn-container">
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-btn" onClick={(e) => e.stopPropagation()}>
                            View Figma Prototype →
                          </a>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" onClick={(e) => e.stopPropagation()}>
                            View Project Code →
                          </a>
                        </div>
                      ) : project.live ? (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="view-project-btn" onClick={(e) => e.stopPropagation()}>
                          View Figma Prototype →
                        </a>
                      ) : (
                        <button className="view-project-btn" onClick={(e) => { e.stopPropagation(); openModal(project); }}>
                          View Details →
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="project-modal"
        overlayClassName="project-modal-overlay"
        closeTimeoutMS={300}
      >
        {selectedProject && (
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </button>

            <div className="modal-header">
              <div className={`modal-image project-${selectedProject.color}`}>
                {selectedProject.images ? (
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} Project Screenshot ${currentImageIndex + 1}`}
                    className="modal-image-real"
                    loading="lazy"
                    onError={(e) => {
                      console.warn(`Failed to load image: ${selectedProject.images[currentImageIndex]}`);
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                <div className="modal-image-placeholder"></div>
                )}
                <div className="modal-number">
                  <span>0{selectedProject.id}</span>
                </div>

                {selectedProject.images && selectedProject.images.length > 0 && (
                  <>
                    <button 
                      className="image-nav image-nav-left" 
                      onClick={() => setCurrentImageIndex((prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1)} 
                      aria-label="Previous image"
                    >
                      <FaChevronLeft />
                    </button>

                    <button 
                      className="image-nav image-nav-right" 
                      onClick={() => setCurrentImageIndex((prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1)} 
                      aria-label="Next image"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>
              
              {selectedProject.images && selectedProject.images.length > 1 && (
                <div className="image-indicators">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.detailedDescription}</p>

              <div className="modal-section">
                <h3 className="modal-section-title">Key Features</h3>
                <div className="modal-features">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-icon">✦</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Technologies Used</h3>
                <div className="modal-technologies">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge-modal">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {selectedProject.externalLinks && selectedProject.externalLinks.length ? (
                  <>
                    {selectedProject.externalLinks.map((l, i) => {
                      const labelLower = (l.label || '').toLowerCase()
                      const isGithub = /github\.com/.test(l.href) || labelLower.includes('code')
                      const isFigma = /figma\.com/.test(l.href) || labelLower.includes('figma')
                      const isLive = !isGithub && !isFigma
                      const className = `modal-btn ${
                        isGithub
                          ? 'modal-btn-github'
                          : isFigma
                            ? 'modal-btn-figma'
                            : (selectedProject.title === 'Coast2Cart' && l.label === 'Open Live Site')
                              ? 'modal-btn-github'
                              : 'modal-btn-live'
                      }`
                      return (
                        <a
                          key={i}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                        >
                          {isGithub && <FaGithub />}
                          {isFigma && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                            </svg>
                          )}
                          {isLive && <FaExternalLinkAlt />}
                          <span>{l.label}</span>
                        </a>
                      )
                    })}
                  </>
                ) : selectedProject.live && selectedProject.github ? (
                  <>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-github">
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-figma">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                      </svg>
                      <span>View Figma Prototype</span>
                    </a>
                  </>
                ) : selectedProject.live ? (
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-figma">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    </svg>
                    <span>View Figma Prototype</span>
                  </a>
                ) : selectedProject.github ? (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-github">
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default Projects
