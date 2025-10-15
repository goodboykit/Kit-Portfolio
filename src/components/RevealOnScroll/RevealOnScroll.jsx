import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const RevealOnScroll = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  amount = 0.3,
  once = false,
  className = '',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      scale: direction === 'scale' ? 0.8 : 1,
      rotate: direction === 'rotate' ? -10 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll
