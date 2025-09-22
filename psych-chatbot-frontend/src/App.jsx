import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="border-2 border-red-500 p-4 rounded-lg">
        Hello Tailwind!
      </div>
    </>
  )
}

export default App
