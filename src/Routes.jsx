import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Facebook from './components/facebook/Facebook'
import EditProduct from './components/facebook/EditProduct'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Facebook />} />
        <Route path="/search/:searchQuery" element={<Facebook />} />
        <Route path="/edit-product/:productId" element={<EditProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
