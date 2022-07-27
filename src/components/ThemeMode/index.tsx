import { Moon, SunDim } from 'phosphor-react'

import { useTheme } from '../../hooks/useTheme'

export function ThemeMode() {
  const { isThemeMode, isSetThemeMode } = useTheme()

  return (
    <>
      <button
        type="button"
        onClick={() => isSetThemeMode(!isThemeMode)}
        title={`${isThemeMode ? "Dark Mode" : "Light Mode"}`}
        className="fixed top-0 right-0 p-5
        text-dark/75 dark:text-white/75
        hover:text-dark dark:hover:text-white 
        focus-visible:text-dark dark:focus-visible:text-white        
        focus:outline-none focus-visible:outline-none
        transition ease-in-out duration-250">
        {isThemeMode ? (<Moon size={24} />) : (<SunDim size={24} />)}
      </button>
    </>
  )
}