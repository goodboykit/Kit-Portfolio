import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Loader.css'

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsExiting(true)
            setTimeout(() => {
              onLoadingComplete()
            }, 800) // Wait for exit animation
          }, 300)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

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
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
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
    >
      <div className="loader-content">
        {/* Animated Logo/Icon */}
        <motion.div
          className="loader-logo"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="logo-circle">
            <div className="logo-inner">
              <span className="logo-text">P</span>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="loader-text"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h2>Loading Portfolio</h2>
          <p>Please wait while we prepare your experience</p>
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
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
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

      {/* Background Animation */}
      <div className="loader-background">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </motion.div>
  )
}

export default Loader
