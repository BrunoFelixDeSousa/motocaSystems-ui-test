import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
<<<<<<< HEAD

      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
=======
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
>>>>>>> 9a4d415fd68233259f879f91e12de5dbd43a8871
  )
}
