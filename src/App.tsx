import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes.routes'

import { CoffeeContextProvider } from './contexts/CoffeeContextProvider'
import { defaultTheme } from './styles/themes/DefaultTheme'
import { GlobalCss } from './styles/GlobalCss'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <AppRoutes />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalCss />
    </ThemeProvider>
  )
}
