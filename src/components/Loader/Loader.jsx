import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Loader.css'

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [loadingPhase, setLoadingPhase] = useState('initializing')
  const [ripples, setRipples] = useState([])

  useEffect(() => {
    // Simulate loading progress - 6-8 seconds total
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsExiting(true)
            setTimeout(() => {
              onLoadingComplete()
            }, 1000) // Wait for exit animation
          }, 500)
          return 100
        }

        // Update loading phases
        if (prev < 25) setLoadingPhase('initializing')
        else if (prev < 50) setLoadingPhase('loading assets')
        else if (prev < 75) setLoadingPhase('preparing content')
        else if (prev < 100) setLoadingPhase('almost ready')

        return prev + 1
      })
    }, 70) // 70ms * 100 = 7 seconds

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  // Handle click/tap ripple effect
  const createRipple = (e) => {
    const ripple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now()
    }
    setRipples((prev) => [...prev, ripple])

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  }

  const logoVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
        duration: 1.2,
      },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  }

  const barVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      className="loader-container"
      variants={containerVariants}
      initial="hidden"
      animate={isExiting ? 'exit' : 'hidden'}
      onClick={createRipple}
    >
      <div className="loader-content">
        {/* Animated Logo/Icon */}
        <motion.div
          className="loader-logo"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="logo-circle"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            <div className="logo-inner">
              <motion.span
                className="logo-text"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                KN
              </motion.span>
            </div>
          </motion.div>

          {/* Orbiting particles around logo */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="orbit-particle"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3 - i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            >
              <div className="particle-dot" />
            </motion.div>
          ))}
        </motion.div>

        {/* Name Display */}
        <motion.div
          className="loader-name"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="name-text"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Kit Nicholas T. Santiago
          </motion.h1>
          <motion.p
            className="name-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            4th Year IT Student
          </motion.p>
          <motion.p
            className="name-specialization"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Specialized in Mobile & Web Application
          </motion.p>
        </motion.div>

        {/* Loading Phase Text */}
        <motion.div
          className="loader-phase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.p
            key={loadingPhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {loadingPhase}...
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="loader-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p>Passionate Developer | Problem Solver</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="loader-progress">
          <div className="progress-bar-container">
            <motion.div
              className="progress-bar-background"
              variants={barVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(255, 215, 0, 0.5)',
                    '0 0 25px rgba(255, 107, 74, 0.8)',
                    '0 0 15px rgba(255, 215, 0, 0.5)'
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              {/* Animated indicator at progress position */}
              {progress > 0 && progress < 100 && (
                <motion.div
                  className="progress-indicator"
                  style={{ left: `${progress}%` }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              )}
            </motion.div>
          </div>
          <motion.div
            className="progress-percentage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {progress}%
          </motion.div>
        </div>

        {/* Animated Dots */}
        <motion.div
          className="loader-dots"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </motion.div>
      </div>

      {/* Decorative Corner Elements */}
      <motion.div
        className="corner-decoration top-left"
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.div
        className="corner-decoration top-right"
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
      <motion.div
        className="corner-decoration bottom-left"
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      <motion.div
        className="corner-decoration bottom-right"
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />

      {/* Background Animation */}
      <div className="loader-background">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>

        {/* Additional animated elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              scale: [0, Math.random() * 0.8 + 0.5, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              borderRadius: '50%',
              background: ['#ffd700', '#ff6b4a', '#6fcfcf'][Math.floor(Math.random() * 3)]
            }}
          />
        ))}

        {/* Floating Bubbles */}
        {[...Array(8)].map((_, i) => (
          <div key={`bubble-${i}`} className="bubble" />
        ))}
      </div>

      {/* Click/Tap Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y
          }}
        />
      ))}
    </motion.div>
  )
}

export default Loader
