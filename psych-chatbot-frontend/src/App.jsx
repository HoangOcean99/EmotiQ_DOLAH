import { useState } from 'react'
import Home from './pages/Home/Home'
import AboutPage from './pages/AboutPage'
import Login from './pages/Login/login'
import MainChat from './pages/MainChat/MainChat'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import ProtectedRoute from './components/protected/protected'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/homePage' element={<AboutPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/mainChat' element={
          <ProtectedRoute>
            <MainChat />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
