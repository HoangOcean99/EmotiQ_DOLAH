import { useState } from 'react'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Login from './pages/Login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutPage/>
      {/* <Home/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
