import { useState } from 'react'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AboutPage/> */}
      <Home/>
    </>
  )
}

export default App
