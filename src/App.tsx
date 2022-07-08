import { Theme } from './components/Theme'
import { ThemeMode } from './components/ThemeMode'
import { ThemeProvider } from './hooks/useTheme'

function App() {
  return (
    <ThemeProvider>
      <>
        <ThemeMode />
        <Theme />
      </>
    </ThemeProvider>
  )
}

export default App
