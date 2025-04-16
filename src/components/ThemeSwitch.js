import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sunny, System } from '../assets/icons'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('system')
    }
  }

  if (!mounted) {
    return null
  }

  const getThemeIcon = () => {
    if (theme === 'system') {
      return <System className="w-6 h-6 text-primary" />
    }
    if (theme === 'dark') {
      return <Sunny className="w-6 h-6 text-primary" />
    }
    return <Moon className="w-6 h-6 text-primary" />
  }

  return (
    <button
      type="button"
      name={`${theme}-theme`}
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={`Switch to ${
        theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system'
      } theme`}
    >
      {getThemeIcon()}
    </button>
  )
}

export default ThemeSwitch
