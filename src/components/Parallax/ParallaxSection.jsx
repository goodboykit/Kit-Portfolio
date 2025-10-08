import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxSection = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  style = {}
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Calculate parallax offset based on direction and speed
  const yRange = direction === 'up' ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  const y = useTransform(scrollYProgress, [0, 1], yRange)

  return (
    <motion.div
      ref={ref}
      style={{ y, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxSection
