import { Moon, SunDim } from 'phosphor-react'

import { useTheme } from '../../hooks/useTheme'

export function ThemeMode() {
  const { isThemeMode, isSetThemeMode } = useTheme()
  const handleToggleTheme = () => isSetThemeMode(!isThemeMode)

  return (
    <>
      <button
        type="button"
        title="Alternar tema"
        onClick={handleToggleTheme}
        className="fixed top-0 right-0 p-5
        text-dark/50 dark:text-white/50 
        hover:text-dark dark:hover:text-white 
        focus-visible:text-dark dark:focus-visible:text-white
        transition ease-in-out duration-250
        focus:outline-none focus-visible:outline-none">
        {isThemeMode ? (<Moon size={20} />) : (<SunDim size={20} />)}
      </button>
    </>
  )
}