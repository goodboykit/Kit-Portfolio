import { motion } from 'framer-motion'
import './AnimatedBackground.css'

const AnimatedBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className="animated-background">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="floating-particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground
