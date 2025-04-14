import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sunny } from '../assets/icons'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return theme === 'dark' ? (
    <button name="light-theme" type="button" onClick={toggleTheme}>
      <Sunny className="text-2xl text-primary" />
    </button>
  ) : (
    <button type="button" name="dark-theme" onClick={toggleTheme}>
      <Moon className="text-2xl text-neutral-800" />
    </button>
  )
}

export default ThemeSwitch
