import { createContext, ReactElement, SetStateAction, useContext, useEffect, useState } from 'react'

interface ThemeProviderProps {
  children: ReactElement
}

type ThemeContextData = {
  theme: boolean
  setTheme: React.Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(localStorage.theme === 'light')

  useEffect(() => {
    const rootElement = window.document.documentElement
    const currentTheme = theme

    const prevTheme = currentTheme ? 'dark' : 'light'
    rootElement.classList.remove(prevTheme)

    const nextTheme = currentTheme ? 'light' : 'dark'
    rootElement.classList.add(nextTheme)

    localStorage.setItem('theme', nextTheme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}