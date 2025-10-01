import { useState } from 'react'
import Home from './pages/Home/Home'
import AboutPage from './pages/About/AboutPage'
import Login from './pages/Login/login'
import AppRouter from './routes/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppRouter/>
      {/* <AboutPage/> */}
      {/* <Home/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
