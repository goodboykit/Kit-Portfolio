import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook to detect if element is on screen
 */
export const useOnScreen = (options) => {
  const ref = useRef()
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return [ref, isIntersecting]
}
