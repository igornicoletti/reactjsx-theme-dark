import { Theme } from './components/Theme'
import { DarkMode } from './components/DarkMode'

import { ThemeProvider } from './hooks/useTheme'

function App() {
  return (
    <ThemeProvider>
      <>
        <DarkMode />
        <Theme />
      </>
    </ThemeProvider>
  )
}

export default App
