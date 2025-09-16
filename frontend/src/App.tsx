import './App.css'
import LoginPage from './features/authentication/pages/LoginPage'
import RegisterPage from './features/authentication/pages/RegisterPage'
import CartPage from './features/cart/pages/CartPage'
import ProductDashboard from './features/products/pages/ProductDashboard'
import Layout from './shared/components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router'
import NotificationListener from './features/notifications/components/NotificationListener'

function App() {
  return (
    <BrowserRouter>
      <NotificationListener/>
      <Layout>
        <Routes>
            <Route path={"/"} element={<ProductDashboard />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/register"} element={<RegisterPage />} />
            <Route path={"/cart"} element={<CartPage/>}/>
             {/* <Route path="*" element={<NotFoundPage />} />  */}
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
