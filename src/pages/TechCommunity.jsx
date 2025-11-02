import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './TechCommunity.css'

const TechCommunity = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [fadeKey, setFadeKey] = useState(0)
  const [showResume, setShowResume] = useState(false)

  const photoGallery = [
    { 
      id: 1, 
      label: 'GDSC NU Manila', 
      name: 'GDSC-WORKSHOP', 
      color: 'cyan-gradient',
      images: [
        '/assets/images/tech/GDSC/480871108_605447458955426_7496871908496789900_n.jpg',
        '/assets/images/tech/GDSC/481113553_605447112288794_6457250476791053370_n.jpg',
        '/assets/images/tech/GDSC/480695154_604758982357607_5307189619321212288_n.jpg',
        '/assets/images/tech/GDSC/480908393_610514691782036_647718043333092385_n.jpg',
        '/assets/images/tech/GDSC/481982344_610515241781981_269591837803728220_n.jpg',
        '/assets/images/tech/GDSC/481070677_606120345554804_4581297450948057759_n.jpg'
      ],
      eventName: 'Google Developer Student Club',
      eventOrg: 'National University Manila'
    },
    { 
      id: 2, 
      label: 'Carrot Cartel', 
      name: 'AWS-WORKSHOP', 
      color: 'coral-gradient',
      images: [
        '/assets/images/tech/AWS/472727353_122140422242453862_5381392377238647785_n.jpg',
        '/assets/images/tech/AWS/472741348_122140422116453862_4107644048650758344_n.jpg',
        '/assets/images/tech/AWS/472789588_122140422248453862_6136962851370394666_n.jpg',
        '/assets/images/tech/AWS/472804619_122140422164453862_313888085117651785_n.jpg',
        '/assets/images/tech/AWS/472819217_122140421612453862_6512942304773259070_n.jpg'
      ],
      eventName: 'Carrot Cartel',
      eventOrg: 'AWS Learning Club Legarda'
    },
    { 
      id: 3, 
      label: 'Arduino Days', 
      name: 'ARDUINO-EVENT', 
      color: 'orange-gradient',
      images: [
        '/assets/images/tech/Arduino/6D748911-3354-4393-BD0D-2077ACC15E1E.jpeg',
        '/assets/images/tech/Arduino/C0418662-EBC8-41BD-8913-4028B4532F09.jpeg'
      ],
      eventName: 'Arduino Days 2024 Philippines',
      eventOrg: 'IACADEMY & DEV CON PH'
    },
    { 
      id: 4, 
      label: 'Canva Connect', 
      name: 'CANVA-EVENT', 
      color: 'yellow-gradient',
      images: [
        '/assets/images/tech/Canva/03C8CDD2-32EC-4F32-8BD2-253B9910EAA3_1_105_c.jpeg',
        '/assets/images/tech/Canva/0BC4A406-CBDE-4CA1-AC8D-F51F4F4E383B_1_105_c.jpeg',
        '/assets/images/tech/Canva/4E0EB695-AA51-43EE-A4A0-84891AE57B2B_1_105_c.jpeg',
        '/assets/images/tech/Canva/2229E527-0321-42B6-8A9F-A44799F4CA07_1_105_c.jpeg',
        '/assets/images/tech/Canva/F73A00BF-0DEF-458C-8337-2F78CD345D58_1_105_c.jpeg'
      ],
      eventName: 'Canva Connect: Manila',
      eventOrg: 'Canva Philippines'
    },
    { 
      id: 5, 
      label: 'DLSU Event', 
      name: 'DLSU-EVENT', 
      color: 'purple-gradient',
      images: [
        '/assets/images/tech/DLSU/8C8705FE-7033-4245-A4DE-4CA620B0775B_1_105_c.jpeg',
        '/assets/images/tech/DLSU/B2700D4F-2847-439D-ABDB-3AB95235522E_1_105_c.jpeg',
        '/assets/images/tech/DLSU/D7C5DF35-F419-4C2F-90F2-26C29E678E09_1_105_c.jpeg'
      ],
      eventName: 'DLSU Tech Event',
      eventOrg: 'De La Salle University'
    },
    { 
      id: 6, 
      label: 'GDSC-PLM InnoLympics', 
      name: 'GDSC-PLM-INNOLYMPICS', 
      color: 'green-gradient',
      images: [
        '/assets/images/tech/GDSC-PLM/1F8F7B87-C028-41DC-8B5E-7750805CD0E2_1_105_c.jpeg',
        '/assets/images/tech/GDSC-PLM/0228DCC7-B62E-41CB-AF78-098D40675F3B_1_105_c.jpeg',
        '/assets/images/tech/GDSC-PLM/7988FED4-1B0B-4304-9B0D-E5F4FF79DCEA_1_105_c.jpeg',
        '/assets/images/tech/GDSC-PLM/C31DEB09-658F-4D38-8085-9EE2B4F80D6D_1_105_c.jpeg'
      ],
      eventName: 'GDSC-PLM InnoLympics',
      eventOrg: 'Google Developer Student Club PLM'
    },
    { 
      id: 7, 
      label: 'FlutterFlow Hackfest', 
      name: 'FLUTTERFLOW-HACKFEST', 
      color: 'blue-gradient',
      images: [
        '/assets/images/tech/Google-Flutter-Hacvkathon/01BD67D7-7E1F-4E67-95C1-7585183FF81F_1_102_o.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/2CCF098F-D51A-4AA1-971B-83BC4FE5E4B0_1_102_o.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/3FEACA13-5138-467B-8EE7-00014EFCA5F9_1_102_o.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/05C9FF24-81FB-4B04-B1C0-8B647B36F5E4.heic',
        '/assets/images/tech/Google-Flutter-Hacvkathon/6F2AABC0-ECA9-4423-84A7-40584E53CDB1_1_105_c.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/12FA57A9-23A4-48D4-9026-15293A17BEE4_1_105_c.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/1327C186-66C5-4452-9748-7AE72E466BCE_4_5005_c.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/547632EA-DF7E-430A-A2D1-45948E31611A_1_105_c.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/A1D8ADCA-374D-4490-8AF8-D5EFD3527A77_1_105_c.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/B874AAA3-7CA2-4317-B8C0-D1BA61CBC788_1_102_o.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/BD9E2CD8-DCC9-47E4-B147-BB00A531B82F_1_105_c.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/D28B3F0B-2112-41AE-BF65-B7DAA5DF237B_1_105_c.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/EF01E739-407B-4744-B371-776E79D1B0BE_1_102_o.jpeg',
        '/assets/images/tech/Google-Flutter-Hacvkathon/EF9AFAA9-0DBA-4AEA-9A46-75132CA1845B_1_102_o.jpeg'
      ],
      eventName: 'FlutterFlow Hackfest & Seminar',
      eventOrg: 'FlutterFlow & GDSC Manila'
    },
    { 
      id: 8, 
      label: 'I/O Extended Manila', 
      name: 'IO-EXTENDED-MANILA', 
      color: 'pink-gradient',
      images: [
        '/assets/images/tech/I:O Extended/BE6405A9-7E6A-4BAC-B774-B5F315AFD788_1_105_c.jpeg',
        '/assets/images/tech/I:O Extended/CE6389B5-DDC4-46FA-A322-5AFC293B6D79_1_105_c.jpeg',
        '/assets/images/tech/I:O Extended/E1B17072-5630-447F-B2E4-261EFD96D028_1_105_c.jpeg'
      ],
      eventName: 'Google I/O Extended Manila',
      eventOrg: 'Google Developers Group Philippines'
    },
    {
      id: 9,
      label: 'GDSC Ideathon',
      name: 'GDSC-IDEATHON',
      color: 'teal-gradient',
      images: [
        '/assets/images/tech/Ideathon/5A7F8572-B974-4EDD-A033-44E0F0C3E57F_1_105_c.jpeg',
        '/assets/images/tech/Ideathon/993E1AA1-30B2-487B-9A06-E71B8CA2B046_1_105_c.jpeg',
        '/assets/images/tech/Ideathon/C3A9F955-4FB0-43F1-AD3E-BE5E7686F0F2_1_105_c.jpeg',
        '/assets/images/tech/Ideathon/DA805CBE-61CD-4F24-A00B-0FC408C92B6C_1_105_c.jpeg'
      ],
      eventName: 'GDSC Ideathon 2024',
      eventOrg: 'Google Developer Student Club'
    },
    {
      id: 10,
      label: 'Next Hire',
      name: 'NEXTHIRE-PH',
      color: 'indigo-gradient',
      images: [
        '/assets/images/tech/NextHire-PhilippineCareer/6FDF367C-69E2-46BF-B494-58B539EA7569.jpeg',
        '/assets/images/tech/NextHire-PhilippineCareer/59F4E6F5-2BF4-43A0-8192-FC04E050133B_1_105_c.jpeg',
        '/assets/images/tech/NextHire-PhilippineCareer/94509BB4-3F58-45B8-AB29-A9C85592BF48_1_102_o.jpeg',
        '/assets/images/tech/NextHire-PhilippineCareer/490868576_644148438418661_6899248176509122063_n.jpg',
        '/assets/images/tech/NextHire-PhilippineCareer/490922649_644148505085321_4964135944762548492_n.jpg',
        '/assets/images/tech/NextHire-PhilippineCareer/490962986_644148448418660_3162152796817055291_n.jpg',
        '/assets/images/tech/NextHire-PhilippineCareer/B05E0995-C50E-415F-B796-D08DEDD993D5_1_102_o.jpeg',
        '/assets/images/tech/NextHire-PhilippineCareer/FF46B05F-E74A-4599-B3EE-CEEDDF96A8A6.jpeg'
      ],
      eventName: 'Next Hire: Philippine Career',
      eventOrg: 'Next Hire Philippines'
    },
  ]

  // Reset image index and loading state when photo index changes
  useEffect(() => {
    setCurrentImageIndex(0)
    setImageLoaded(false)
    setFadeKey(prev => prev + 1)
    
    // Check if initial image is already loaded (cached)
    const currentGallery = photoGallery[currentPhotoIndex]
    if (currentGallery?.images?.length > 0) {
      const img = new Image()
      img.onload = () => setImageLoaded(true)
      img.src = currentGallery.images[0]
    }
  }, [currentPhotoIndex])

  // Preload images for smooth transitions and handle image loading state
  useEffect(() => {
    const currentGallery = photoGallery[currentPhotoIndex]
    if (currentGallery?.images?.length > 0) {
      const currentImage = currentGallery.images[currentImageIndex]
      const nextImageIndex = (currentImageIndex + 1) % currentGallery.images.length
      const nextImage = currentGallery.images[nextImageIndex]
      
      // Preload current and next images
      const preloadImages = [currentImage]
      if (nextImage) preloadImages.push(nextImage)
      
      preloadImages.forEach(src => {
        const img = new Image()
        img.src = src
      })
      
      // Check if current image is already cached/loaded
      const checkImage = new Image()
      checkImage.onload = () => setImageLoaded(true)
      checkImage.onerror = () => setImageLoaded(true) // Still show even if error
      checkImage.src = currentImage
    }
  }, [currentPhotoIndex, currentImageIndex, photoGallery])

  // Auto-play functionality - cycle through images within the current gallery item
  useEffect(() => {
    const currentGallery = photoGallery[currentPhotoIndex]
    const hasImages = currentGallery?.images?.length > 0
    
    if (hasImages) {
      // Cycle through all images in this gallery only
      const imageInterval = setInterval(() => {
        setImageLoaded(false)
        setFadeKey(prev => prev + 1)
        setCurrentImageIndex((prev) => {
          const nextIndex = (prev + 1) % currentGallery.images.length
          return nextIndex
        })
      }, 4000) // Change image every 4 seconds
      
      return () => clearInterval(imageInterval)
    }
  }, [currentPhotoIndex, photoGallery])

  // Auto-advance to next gallery item after 2.5 minutes (150 seconds)
  useEffect(() => {
    const autoAdvanceTimer = setTimeout(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photoGallery.length)
    }, 150000) // 2.5 minutes = 150,000 milliseconds

    return () => clearTimeout(autoAdvanceTimer)
  }, [currentPhotoIndex, photoGallery])

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photoGallery.length)
  }

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photoGallery.length) % photoGallery.length)
  }


  const communityExperience = [
    {
      id: 1,
      organization: 'Google Developers Student Club',
      role: 'Technical Team Member',
      location: 'National University, Manila',
      period: '09/2023 - 06/2025',
      type: 'Leadership',
      description: [
        'Supported technical projects and initiatives for student developers',
        'Assists in organizing coding hackathons and mentorship programs',
        'Assessed and maintained tech systems with Facebook, Microsoft Teams live streaming',
        'Ensured quality and flow of services for events'
      ],
      color: 'cyan',
      logo: '/images/logos/gdsc.png',
      logoPlaceholder: 'GDSC'
    },
    {
      id: 2,
      organization: 'Amazon Web Services Learning Club',
      role: 'Vice Finance Officer',
      location: 'Sampaloc, Manila City',
      period: '04/2024 - 05/2025',
      type: 'Leadership',
      description: [
        'Managed financial planning and budgeting for club activities',
        'Oversees club expenses and sponsorship opportunities',
        'Coordinates with core officers to ensure resource allocation',
        'Strategic planning for club sustainability'
      ],
      color: 'yellow',
      logo: '/images/logos/aws.png',
      logoPlaceholder: 'AWS'
    },
    {
      id: 3,
      organization: 'National University Community Extension',
      role: 'Core Volunteer',
      location: 'Brgy. Laurel, Batangas',
      period: '04/08/2024',
      type: 'Volunteer',
      description: [
        'One-day program focused on increasing digital literacy',
        'Trained members of Molinete Farmers Association (MOFA)',
        'Provided onsite basic computer literacy training',
        'Taught useful tools for organization day-to-day operations'
      ],
      color: 'peach',
      logo: '/images/logos/NU_shield.svg',
      logoPlaceholder: 'NU'
    },
    {
      id: 4,
      organization: 'Flutter Flow Manila Philippines',
      role: 'Core Volunteer',
      location: 'White Cloak, Pasig City',
      period: '07/2024 - Present',
      type: 'Volunteer',
      description: [
        'Actively contributes to community events and workshops',
        'Assists beginners in learning Flutter Flow for app development',
        'Engages with students and developers',
        'Promotes no-code/low-code solutions in mobile development and AI powered apps'
      ],
      color: 'coral',
      logo: '/images/logos/flutterflow.png',
      logoPlaceholder: 'FF'
    }
  ]

  const seminars = [
    'Google I/O Extended Manila 2024',
    'GDG Cloud Manila PH 2024 AI Workshop',
    'Introduction to Flutter Mobile UI/UX 2024',
    'Ctrl + Solve: Google Solutions Challenge 2023',
    'Arduino Day 2024: Coding and Robotics',
    'Canva Connect: Manila 2024',
    'FFDC Extended: Building Apps with Flutterflow 5.0'
  ]

  return (
    <div className="portfolio-showcase">
      {/* Marquee Section */}
      <section className="showcase-marquee">
        <div className="marquee-content">
          <span className="marquee-item">Community Leader ✦</span>
          <span className="marquee-item">Tech Volunteer ✦</span>
          <span className="marquee-item">Active Contributor ✦</span>
          <span className="marquee-item">Event Organizer ✦</span>
          <span className="marquee-item">Community Leader ✦</span>
          <span className="marquee-item">Tech Volunteer ✦</span>
          <span className="marquee-item">Active Contributor ✦</span>
          <span className="marquee-item">Event Organizer ✦</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="community-hero">
        <div className="showcase-container">
          <div className="hero-grid">
            {/* Left - Text Content */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0.5, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="hero-badge">
                <span className="badge-icon">✦</span>
                COMMUNITY PROJECT
              </span>
              <h1 className="hero-title">
                <TypeAnimation
                  sequence={[
                    'Tech Community',
                    3000,
                    'Developer Community',
                    3000,
                    'Innovation',
                    3000,
                    'Tech Leadership',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <br />
                <span className="title-highlight">Experience</span>
              </h1>
              <p className="hero-subtitle">
                Active participation in tech communities, organizing workshops and hackathons that bring developers together. Building connections and fostering growth through collaborative learning experiences.
              </p>

              <div className="hero-stats">
                <motion.div
                  className="stat-item"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="stat-number">2</div>
                  <div className="stat-label">Organizations</div>
                </motion.div>
                <motion.div
                  className="stat-item"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="stat-number">7</div>
                  <div className="stat-label">Events Attended</div>
                </motion.div>
                <motion.div
                  className="stat-item"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="stat-number">2</div>
                  <div className="stat-label">Leadership Roles</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              className="hero-image-section"
              initial={{ opacity: 0.5, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="hero-image-wrapper">
                <motion.img
                  src="/assets/images/tech/AWS/472804619_122140422164453862_313888085117651785_n.jpg"
                  alt="AWS Learning Club Community Photo"
                  className="hero-image"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="floating-badge"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span>COMMUNITY</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Cards Section */}
      <section className="community-experience">
        <div className="showcase-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0.5, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">• My Journey</span>
            <h2 className="showcase-section-title-olive">
              Community
              <br />
              Leadership & Contributions
            </h2>
          </motion.div>

          <div className="experience-grid">
            {communityExperience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                className={`experience-card experience-${exp.color}`}
                initial={{ opacity: 0.5, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="experience-card-inner">
                  <div className={`experience-logo ${exp.color}-bg`}>
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={`${exp.organization} logo`}
                        className="experience-logo-img"
                      />
                    ) : (
                      <span className="logo-text">{exp.logoPlaceholder}</span>
                    )}
                  </div>

                  <div className="experience-content">
                    <div className="experience-header">
                      <div className="experience-type-badge">{exp.type}</div>
                      <motion.div
                        className="experience-icon"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        ✦
                      </motion.div>
                    </div>

                    <h3 className="experience-org">{exp.organization}</h3>
                    <h4 className="experience-role">{exp.role}</h4>

                    <div className="experience-meta">
                      <div className="meta-item">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                      <div className="meta-item">
                        <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="experience-description">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Showcase Carousel */}
      <section className="photo-showcase">
        <div className="showcase-container">
          <div className="photo-showcase-grid">
            {/* Left Photo - Previous */}
            <motion.div
              className="showcase-photo-item"
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="photo-box"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4 }}
              >
                {(() => {
                  const prevGallery = photoGallery[(currentPhotoIndex - 1 + photoGallery.length) % photoGallery.length]
                  const hasImages = prevGallery.images?.length > 0
                  return hasImages ? (
                    <img
                      src={prevGallery.images[0]}
                      alt={prevGallery.eventName || prevGallery.label}
                      className="photo-image"
                    />
                  ) : (
                    <div className={`photo-placeholder ${prevGallery.color}`}>
                      <span className="photo-placeholder-text">{prevGallery.label}</span>
                    </div>
                  )
                })()}
              </motion.div>
              <div className="photo-label-wrapper">
                <div className="photo-number">
                  {String((currentPhotoIndex - 1 + photoGallery.length) % photoGallery.length + 1).padStart(2, '0')}/
                </div>
                <div className="photo-name">
                  {photoGallery[(currentPhotoIndex - 1 + photoGallery.length) % photoGallery.length].name}
                </div>
              </div>
            </motion.div>

            {/* Center Large Circular Photo - Current */}
            <motion.div
              className="showcase-photo-center"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="circular-photo"
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                {photoGallery[currentPhotoIndex].images?.length > 0 ? (
                  <>
                    <div className="image-wrapper">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`${currentPhotoIndex}-${currentImageIndex}`}
                          src={photoGallery[currentPhotoIndex].images[currentImageIndex]}
                          alt={photoGallery[currentPhotoIndex].eventName || photoGallery[currentPhotoIndex].label}
                          className="center-photo-image"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ 
                            duration: 0.8,
                            ease: "easeInOut"
                          }}
                          onLoad={() => setImageLoaded(true)}
                          loading="lazy"
                        />
                      </AnimatePresence>
                      {!imageLoaded && (
                        <motion.div 
                          className={`photo-loading-placeholder ${photoGallery[currentPhotoIndex].color}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="photo-placeholder-text">Loading...</span>
                        </motion.div>
                      )}
                    </div>
                    <div className="image-counter">
                      {currentImageIndex + 1}/{photoGallery[currentPhotoIndex].images.length}
                    </div>
                  </>
                ) : (
                  <div className={`photo-placeholder ${photoGallery[currentPhotoIndex].color}`}>
                    <span className="photo-placeholder-text">{photoGallery[currentPhotoIndex].label}</span>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Right Photo - Next */}
            <motion.div
              className="showcase-photo-item"
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="photo-box"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4 }}
              >
                {(() => {
                  const nextGallery = photoGallery[(currentPhotoIndex + 1) % photoGallery.length]
                  const hasImages = nextGallery.images?.length > 0
                  return hasImages ? (
                    <img
                      src={nextGallery.images[0]}
                      alt={nextGallery.eventName || nextGallery.label}
                      className="photo-image"
                    />
                  ) : (
                    <div className={`photo-placeholder ${nextGallery.color}`}>
                      <span className="photo-placeholder-text">{nextGallery.label}</span>
                    </div>
                  )
                })()}
              </motion.div>
              <div className="photo-label-wrapper">
                <div className="photo-number">
                  {String((currentPhotoIndex + 1) % photoGallery.length + 1).padStart(2, '0')}/
                </div>
                <div className="photo-name">
                  {photoGallery[(currentPhotoIndex + 1) % photoGallery.length].name}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows Row */}
          <div className="photo-cta-row">
            <motion.div
              className="cta-box"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <button className="nav-arrow-button" onClick={handlePrevPhoto}>
                <FaChevronLeft />
              </button>
            </motion.div>
            <div className="cta-spacer">
              <div className="carousel-dots">
                {photoGallery.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentPhotoIndex ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                    aria-label={`Go to photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <motion.div
              className="cta-box"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <button className="nav-arrow-button" onClick={handleNextPhoto}>
                <FaChevronRight />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seminars & Events Section */}
      <section className="community-seminars">
        <div className="showcase-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0.5, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">• Learning & Growth</span>
            <h2 className="showcase-section-title-olive">
              Seminars &
              <br />
              Events Attended
            </h2>
          </motion.div>

          <div className="seminars-grid">
            {seminars.map((seminar, idx) => (
              <motion.div
                key={idx}
                className="seminar-card"
                initial={{ opacity: 0.5, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{
                  x: 3,
                  scale: 1.02,
                  backgroundColor: "rgba(255, 215, 0, 0.1)"
                }}
              >
                <div className="seminar-number">0{idx + 1}</div>
                <div className="seminar-content">
                  <FaCalendarAlt className="seminar-icon" />
                  <p className="seminar-title">{seminar}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistic Photo Collage Section */}
      <section className="photo-collage">
        <div className="showcase-container">
          {/* Top Section with Text and Circular Photo */}
          <div className="collage-top-section">
            <motion.div
              className="collage-text-content"
              initial={{ opacity: 0.5, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <span className="collage-badge">• COMMUNITY PROJECT</span>
              <h2 className="collage-title">
                I bring{' '}
                <TypeAnimation
                  sequence={[
                    'innovation and',
                    3000,
                    'creativity and',
                    3000,
                    'passion and',
                    3000,
                    'dedication and',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <br />
                collaboration with every event
              </h2>
              <p className="collage-description">
                Active participation in tech communities, organizing workshops and hackathons
                that bring developers together. Building connections and fostering growth through
                collaborative learning experiences.
              </p>
            
            </motion.div>

            <motion.div
              className="collage-main-photo"
              initial={{ opacity: 0.5, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="large-circular-photo">
                <motion.img
                  src="/assets/images/tech/Google-Flutter-Hacvkathon/2CCF098F-D51A-4AA1-971B-83BC4FE5E4B0_1_102_o.jpeg"
                  alt="Tech Community Photo"
                  className="collage-photo"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
             
              <motion.div
                className="drag-badge"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                whileHover={{ scale: 1.03 }}
              >
                <span>Tech<br />Community<br /></span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Impact Section */}
      <section className="community-impact">
        <div className="showcase-container">
          <motion.div
            className="impact-content"
            initial={{ opacity: 0.5, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="impact-icon"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <FaTrophy />
            </motion.div>
            <h2 className="impact-title">
              <TypeAnimation
                sequence={[
                  'Building Communities,',
                  3000,
                  'Empowering Developers,',
                  3000,
                  'Fostering Innovation,',
                  3000,
                  'Leading Change,',
                  3000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <br />
              <span className="impact-highlight">Creating Impact</span>
            </h2>
            <p className="impact-description">
              Through active participation in tech communities, I've helped organize hackathons, mentored aspiring developers, and contributed to digital literacy initiatives that empower individuals and organizations.
            </p>
            <div className="impact-badges" role="list" aria-label="Key community roles">
              <span role="listitem" className="impact-badge" aria-label="Organized hackathons">Organized Hackathons</span>
              <span role="listitem" className="impact-badge" aria-label="Mentored developers">Mentored Developers</span>
              <span role="listitem" className="impact-badge" aria-label="Led digital literacy programs">Led Digital Literacy Programs</span>
              <span role="listitem" className="impact-badge" aria-label="Coordinated community events">Coordinated Community Events</span>
            </div>
          </motion.div>
        </div>
      </section>
      {showResume && (
        <section className="community-resume">
          <div className="showcase-container">
            <div className="resume-full">
              <h3>KIT NICHOLAS T. SANTIAGO</h3>
              <div className="resume-sub">4th Year College Student — IT (Mobile & Web Applications)</div>
              <div className="resume-contact">📞 (310) 985 0496 &nbsp; | &nbsp; santiagonikos@gmail.com &nbsp; | &nbsp; 📍 8723 Artesia Blvd, Space 75, Bellflower CA 90706</div>

              <h4>Profile</h4>
              <p>
                Passionate fourth-year college student specializing in mobile and web applications. Experienced in technical coordination, production, and collaborative project development. A proactive leader and problem-solver actively engaged in technical communities, mentorship programs, seminars, workshops, and events. US citizen currently studying in the Philippines and seeking internship opportunities in the US to maximize potential and contribute to organizational growth.
              </p>

              <h4>Skills</h4>
              <ul>
                <li>Java · JavaScript · JavaFX · Node.js</li>
                <li>Flutter (Dart) · Flutter Flow · React · Kotlin</li>
                <li>MySQL · MongoDB · Git/GitHub · AWS S3</li>
                <li>Frontend & Backend Development · OOP · Cloud Computing · Troubleshooting</li>
              </ul>

              <h4>Tech Community Experience</h4>
              <ul>
                <li><strong>Technical Team</strong> — Google Developer Student Club, National University Manila (09/2023 - 06/2025)
                  <br/>Supported technical projects and initiatives, organized hackathons and mentorship programs, and managed live streaming and event technology.
                </li>
                <li><strong>Vice Finance Officer</strong> — Amazon Web Services Learning Club (04/2024 - 05/2025)
                  <br/>Managed budgeting, sponsorship coordination, and resource allocation for club activities.
                </li>
                <li><strong>Core Volunteer</strong> — National University Community Extension (04/08/2024)
                  <br/>Delivered digital literacy training to Molinete Farmers Association (MOFA).
                </li>
                <li><strong>Core Volunteer</strong> — Flutter Flow Manila Philippines (07/2024 - Present)
                  <br/>Contributed to workshops and mentorship for no-code/low-code mobile development.
                </li>
              </ul>

              <h4>Education</h4>
              <p><strong>Senior High (STEM)</strong> — Nazareth School of National University Manila (08/2020 - 06/2022). Graduated with High Honors.</p>
              <p><strong>BS Information Technology</strong> — National University Manila (Expected 2026). Specializing in Mobile & Web Application.</p>

              <h4>Achievements & Certifications</h4>
              <ul>
                <li>Top 1 — Senior High IT Immersion, UI Design (SY 2022-2023)</li>
                <li>Top 7 — DLSU Hacker-Cup Hackathon (SY 2023-2024)</li>
                <li>Top 3 — Ideathon Hackathon, GDSC (SY 2024-2025)</li>
                <li>CISCO: Python Essentials 1 & 2; HTML, CSS & JavaScript for Beginners</li>
                <li>Fortinet: Threat Landscape & Fundamentals (2025)</li>
              </ul>

              <h4>Seminars</h4>
              <p>Google I/O Extended Manila 2024 · GDG Cloud Manila PH 2024 AI Workshop · Introduction to Flutter Mobile UI/UX 2024 · Ctrl + Solve: Google Solutions Challenge 2023 · Arduino Day 2024 · Canva Connect: Manila 2024 · FFDC Extended: Building Apps with Flutterflow 5.0</p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default TechCommunity