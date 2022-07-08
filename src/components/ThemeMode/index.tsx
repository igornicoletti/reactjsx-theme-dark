import { Moon, SunDim } from 'phosphor-react'

import { useTheme } from '../../hooks/useTheme'

export function ThemeMode() {
  const { isThemeMode, isSetThemeMode } = useTheme()
  const handleToggleTheme = () => isSetThemeMode(!isThemeMode)

  return (
    <>
      <div onClick={handleToggleTheme} className="fixed top-0 right-0 p-5">
        {isThemeMode ? (
          <button
            type="button"
            title="Dark mode"
            className="text-dark/50 hover:text-dark focus-visible:text-dark
            focus:outline-none focus-visible:outline-none
            transition ease-in-out duration-250">
            <Moon size={20} />
          </button>
        ) : (
          <button
            type="button"
            title="Light mode"
            className="text-white/50 hover:text-white focus-visible:text-white            
            focus:outline-none focus-visible:outline-none
            transition ease-in-out duration-250">
            <SunDim size={20} />
          </button>
        )}
      </div>
    </>
  )
}