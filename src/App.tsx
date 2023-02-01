import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  )
}
