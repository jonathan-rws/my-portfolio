import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes/darkTheme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
