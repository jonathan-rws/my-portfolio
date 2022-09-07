import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes/darkTheme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Header } from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
