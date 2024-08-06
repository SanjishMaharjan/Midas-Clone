import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

interface ThemeContextProps {
  theme: string
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider',
    )
  }
  return context
}

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const body = document.body
    const initialTheme = localStorage.getItem('theme') || 'light'
    setTheme(initialTheme)
    body.classList.add(initialTheme)
  }, [])

  const toggleTheme = () => {
    const body = document.body
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    body.classList.remove(theme)
    body.classList.add(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
