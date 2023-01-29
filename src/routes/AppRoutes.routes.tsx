import { Routes, Route } from 'react-router-dom'

// Layout
import { DefaultLayout } from '../layouts/DefaultLayout'

// Pages
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { Success } from '../pages/Success'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
