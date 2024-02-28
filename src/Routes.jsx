import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Houses from './components/pages/Houses'
// import House from './components/pages/House'
import Profile from './components/pages/Profile'
import Listings from './components/pages/Listings'
import HouseEdit from './components/pages/HouseEdit'
import Bookings from './components/pages/Bookings'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Facebook from './components/facebook/Facebook'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Facebook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/houses/:id" element={<Houses />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/houses/:id/edit" element={<HouseEdit />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/facebook" element={<Facebook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
