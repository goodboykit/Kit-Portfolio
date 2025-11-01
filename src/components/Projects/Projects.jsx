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
      description: 'An app idea I made for the GDSC Ideathon Hackathon at my school. It\'s all about helping people learn about plants and take care of the environment. You can scan plants, do challenges, and earn points for being eco-friendly.',
      detailedDescription: 'I created this project for the Google Developers Student Club Ideathon at National University Manila. The idea is to make learning about plants and the environment fun. Users can scan plants to learn what they are, complete quests and challenges, track their environmental impact, and earn points and rewards. There\'s also a plant dictionary where you can learn about different plants and a community section where people can share their eco-friendly activities. It\'s all built in Figma as a prototype.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems'],
      features: ['Scan plants to identify them', 'Complete quests and challenges', 'Track your environmental impact', 'Earn points and rewards', 'Learn about plants from the dictionary', 'Connect with the community'],
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
      description: 'An app for pet owners who want to travel but are worried about leaving their pets. You can watch your pet live, track their health, and connect with other pet owners.',
      detailedDescription: 'This app solves the problem of pet owners who want to travel but don\'t want to leave their pets alone. With Furtastic Buddies, you can watch your pet through live video, see how much they eat and drink, track their daily activities, and make profiles for your pets. You can also see where your pet goes during walks, book vet appointments, shop for pet stuff, and join a community of other pet owners where you can share photos and updates about your pets.',
      technologies: ['Flutter', 'Dart', 'Figma', 'UI/UX Design', 'Mobile Development'],
      features: [
        'Watch your pet live through video',
        'Track eating, drinking, and activity',
        'Create profiles for your pets',
        'See where your pet goes on walks',
        'Buy pet products and services',
        'Join a community of pet owners',
        'Book vet appointments',
        'Shop for pet supplies'
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
      description: 'A healthcare app about HIV awareness and testing. You can chat with doctors anonymously, book appointments, and see statistics. Everything is private and confidential.',
      detailedDescription: 'This app helps people learn about HIV and get tested. You can use it without showing your real name to stay private. It lets you chat with doctors anonymously, see stats about STDs, book appointments at clinics near you, and keep track of your health history. The app also has educational articles and news about HIV, and you can view your test results securely. Everything is designed to keep your information safe and private.',
      technologies: ['Flutter','Dart','Figma', 'UI/UX Design', 'Mobile Development'],
      features: [
        'Use the app without showing your name',
        'See statistics about STDs',
        'Chat with doctors privately',
        'Book appointments at clinics',
        'Keep track of your health records',
        'Find clinics near you on a map',
        'Read articles and news',
        'View your test results safely'
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
      description: 'A website where you can buy fresh seafood and souvenirs from local fishers and sellers. Browse products, chat with sellers, and add items to your cart.',
      detailedDescription: 'This is like an online market for coastal areas. You can browse through fresh seafood and souvenirs, filter by category or price, and see details about each product and the seller. You can add stuff to your cart, change the quantity, see the total price, and chat with sellers directly. Both buyers and sellers have their own profiles where you can see what they\'re selling or what they\'ve bought, and you can leave reviews and ratings. The website works well on phones and computers.',
      technologies: ['React', 'MongoDB', 'Figma', 'Web Development'],
      features: [
        'Browse products by category and price',
        'See product details and seller info',
        'Add items to cart and change quantities',
        'Chat with sellers',
        'View buyer and seller profiles',
        'Leave reviews and ratings'
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
      description: 'A learning website to help Filipino students with dyslexia learn to read better. It reads text out loud, has easy-to-read fonts, and lets teachers track student progress.',
      detailedDescription: 'This website helps students who have trouble reading because of dyslexia. It reads text out loud so students can hear what they\'re reading, uses special fonts that are easier to read, and lets you make text bigger. Students can practice with different activities like learning the alphabet, sounds, and understanding what they read. Teachers can see how well each student is doing, what activities they\'ve finished, and get suggestions on how to help them more. Administrators can manage classes, add students, and view all the data. It can be used in school or at home.',
      technologies: ['React','MongoDB', 'Accessibility', 'Text‑to‑Speech', 'Figma'],
      features: [
        'Reads text out loud',
        'Suggests activities based on student progress',
        'Teachers can see student progress',
        'Practice activities for reading skills',
        'Manage classes and students'
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
      description: 'An app where people can report problems in their area like potholes or broken streetlights. The city can see these reports and fix them.',
      detailedDescription: 'This app lets people in the community report problems they see around their area. You can take a photo of something broken like a pothole, dangerous electrical wires, or other issues, and report it with your location. All the problems show up on a map so everyone can see what needs to be fixed. There\'s also a feed where you can see all the problems people reported. The city government can see all these reports, mark them as fixed, and respond to the community. It helps connect people with their local government to make the city better.',
      technologies: ['Flutter', 'Dart','UI/UX Design', 'Mobile Development'],
      features: [
        'See problems on a map',
        'Report problems instantly',
        'Track problems by location',
        'See all community reports in a feed',
        'Categorize problems by type',
        'Upload photos of problems',
        'Check if problems are fixed',
        'City can respond to reports'
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
      description: 'An online learning platform for my school, National University Manila. Students can take courses, track their progress, take quizzes, and get certificates.',
      detailedDescription: 'I designed this online learning platform for students at National University Manila. Students can see all their courses on a dashboard, enroll in new courses, and see how much progress they\'ve made. They can take quizzes and tests, and when they finish a course, they get a certificate. Students can also manage their profile and account settings. Courses are organized into modules so it\'s easy to follow along, and students can choose their own learning path. The design is simple and easy to use.',
      technologies: ['Figma', 'UI/UX Design', 'Educational Technology', 'Learning Management System'],
      features: [
        'See all your courses on dashboard',
        'Track your progress in each course',
        'Get certificates when you finish',
        'Manage your profile and account',
        'Take quizzes and tests',
        'Courses organized into modules',
        'Choose your own learning path'
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
      title: 'BarkBank',
      description: 'A simple banking app made with Java. You can create an account, login, deposit money, withdraw money, and check your balance. It uses object-oriented programming.',
      detailedDescription: 'This is a banking application I built using Java and JavaFX. Users can register for an account with their information, login with a username and PIN, deposit money into their account, withdraw money, and check their current balance. The app also keeps track of all your transactions so you can see your history. Everything is protected with a PIN when you login. The interface has a bulldog mascot and is built using object-oriented programming principles I learned in school.',
      technologies: ['Java', 'JavaFX', 'OOP', 'GUI Development'],
      features: [
        'Create account and login',
        'Register with your information',
        'Deposit money',
        'Withdraw money',
        'Check your balance',
        'See transaction history'
      ],
      github: 'https://github.com/goodboykit/BarkBankSystemOOP',
      color: 'cyan',
      preview: '/assets/images/projects/bark.png',
      images: [
        '/assets/images/projects/bark.png',
        '/assets/images/projects/bark2.png',
        '/assets/images/projects/bark3.png',
        '/assets/images/projects/bark4.png',
        '/assets/images/projects/bark5.png',
        '/assets/images/projects/bark6.png',
        '/assets/images/projects/bark7.png'
      ]
    },
    {
      id: 9,
      title: 'Every Juan\'a',
      description: 'A job search website for Filipinos. You can search for jobs, filter by location and experience, apply for positions, and upload your resume. There\'s also an admin side to manage companies and applicants.',
      detailedDescription: 'This was a group project I worked on for my Information Management class. It\'s a job search platform where people can look for jobs in different industries all over the Philippines. Job seekers can filter jobs by location, industry, and how much experience is needed. They can create an account, make a profile, upload their resume and education info, and apply for jobs. The admin side lets you manage companies, add new job postings, see statistics about how many people applied, and view applicant resumes. It\'s built with Java and MySQL database.',
      technologies: ['Java', 'MySQL', 'Database Management', 'Information Management System'],
      features: [
        'Search and filter jobs by location, industry, experience',
        'Create account and manage profile',
        'Upload resume and education info',
        'Browse companies and job details',
        'Track your applications',
        'Admin can see statistics and manage everything',
        'Add and edit companies and job postings',
        'View applicant resumes'
      ],
      github: 'https://github.com/goodboykit/EveryJuana/tree/main',
      color: 'yellow',
      preview: '/assets/images/projects/every1.png',
      images: [
        '/assets/images/projects/every1.png',
        '/assets/images/projects/every2.png',
        '/assets/images/projects/every3.png',
        '/assets/images/projects/every4.png',
        '/assets/images/projects/every6.png',
        '/assets/images/projects/every7.png',
        '/assets/images/projects/every8.png',
        '/assets/images/projects/every9.png',
        '/assets/images/projects/every11.png',
        '/assets/images/projects/every12.png',
        '/assets/images/projects/every13.png',
        '/assets/images/projects/every15.png'
      ]
    },
    {
      id: 10,
      title: 'Ambers',
      description: 'My very first website I made using HTML and CSS! It\'s for a fictional Filipino restaurant called Amber\'s that serves food like Pancit Malabon. It has a menu, about page, contact form, and even a shopping cart.',
      detailedDescription: 'This was my first website project ever. I built it using just HTML and CSS to make a website for a fake Filipino restaurant called Amber\'s. The website has different pages like a homepage with food pictures, an about us section, a menu page where you can browse dishes, a community page with customer reviews, and a contact page with a form. There\'s also a shopping cart feature where you can add items. It even has blog-style posts about Filipino food like Pancit Malabon and Pichi Pichi. It\'s pretty basic but I learned a lot making it!',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Homepage with food pictures and info',
        'About Us page with restaurant story',
        'Menu page to browse dishes',
        'Shopping cart to add items',
        'Contact form to send messages',
        'Community page with customer reviews',
        'Blog posts about Filipino food'
      ],
      github: 'https://github.com/goodboykit/AmbersHTMLWebsite',
      color: 'yellow',
      preview: '/assets/images/projects/ambers.png',
      images: [
        '/assets/images/projects/ambers.png',
        '/assets/images/projects/ambers2.png',
        '/assets/images/projects/ambers3.png',
        '/assets/images/projects/ambers5.png',
        '/assets/images/projects/ambers6.png',
        '/assets/images/projects/ambers7.png',
        '/assets/images/projects/ambers8.png',
        '/assets/images/projects/ambers10.png',
        '/assets/images/projects/ambers11.png',
        '/assets/images/projects/ambers13.png',
        '/assets/images/projects/ambers14.png'
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
                      ) : project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="view-project-btn" onClick={(e) => e.stopPropagation()}>
                          View Project Code →
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
