import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Houses from './components/pages/Houses'
// import House from './components/pages/House'
// import Profile from './components/pages/Profile'
// import Listings from './components/pages/Listings'
// import HouseEdit from './components/pages/HouseEdit'
// import Bookings from './components/pages/Bookings'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Facebook from './components/facebook/Facebook'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Facebook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
