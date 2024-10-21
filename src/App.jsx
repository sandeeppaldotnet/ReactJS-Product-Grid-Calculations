import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GridCalculationsClassComponent from './Components/GridCalculationsClassComponent'
import GridCalculationsFuncationlComponents from './Components/GridCalculationsFuncationlComponents'
import Header from './Components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <GridCalculationsFuncationlComponents/>
    
      <GridCalculationsClassComponent/>
      
      
    </>
  )
}

export default App
