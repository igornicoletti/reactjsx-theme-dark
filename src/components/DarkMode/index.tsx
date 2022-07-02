import { Moon, SunDim } from 'phosphor-react'
import { useTheme } from '../../hooks/useTheme'

export function DarkMode() {
  const { theme, setTheme } = useTheme()

  function handleToggleTheme() {
    setTheme(!theme)
  }

  return (
    <div onClick={handleToggleTheme} className="fixed top-0 right-0 p-5">
      {theme ? (
        <button
          type="button"
          title="Dark mode"
          className="text-dark/50 hover:text-dark focus-visible:text-dark focus:outline-none">
          <Moon size={22} />
        </button>
      ) : (
        <button
          type="button"
          title="Light mode"
          className="text-white/50 hover:text-white focus-visible:text-white focus:outline-none">
          <SunDim size={22} />
        </button>
      )}
    </div>
  )
}