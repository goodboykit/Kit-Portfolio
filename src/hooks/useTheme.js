import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

/**
 * Custom hook for theme management
 */
export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}
