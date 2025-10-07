import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import PortfolioShowcase from './pages/PortfolioShowcase'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Only show loader on first load
    if (isFirstLoad) {
      // Prevent scrolling while loading
      document.body.style.overflow = 'hidden'
    }
  }, [isFirstLoad])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setIsFirstLoad(false)
    // Re-enable scrolling
    document.body.style.overflow = 'unset'
  }

  // Enhanced page transition variants with slide effect
  const pageVariants = {
    initial: {
      opacity: 0,
      x: -50,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  return (
    <div className="App">
      {/* Show loader only on first load */}
      {isLoading && isFirstLoad && (
        <Loader onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Main content with fade-in animation */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Toaster position="top-right" />
          <ScrollToTop />
          <Navbar />

          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <AboutPage />
                  </motion.div>
                }
              />
              <Route
                path="/skills"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <SkillsPage />
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <ProjectsPage />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <ContactPage />
                  </motion.div>
                }
              />
              <Route
                path="/showcase"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <PortfolioShowcase />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>

          <Footer />
        </motion.div>
      )}
    </div>
  )
}

export default App
