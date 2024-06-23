import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './components/ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <ToDo/>
   </>
  )
}

export default App
