import { createContext, ReactElement, SetStateAction, useContext, useEffect, useState } from 'react'

interface ThemeProviderProps {
  children: ReactElement
}

interface ThemeContextData {
  isThemeMode: boolean
  isSetThemeMode: React.Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isThemeMode, isSetThemeMode] = useState(localStorage.isThemeMode === 'light')

  useEffect(() => {
    const rootElement = window.document.documentElement
    const currentTheme = isThemeMode

    const prevTheme = currentTheme ? 'dark' : 'light'
    rootElement.classList.remove(prevTheme)

    const nextTheme = currentTheme ? 'light' : 'dark'
    rootElement.classList.add(nextTheme)

    localStorage.setItem('isThemeMode', nextTheme)
  }, [isThemeMode])

  return (
    <ThemeContext.Provider value={{ isThemeMode, isSetThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}
