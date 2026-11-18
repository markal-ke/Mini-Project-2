import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LoginForm from './pages/LoginPage'
import SearchFilter from './pages/FilterPage'
import AppRoutes from './routes/RoutePage'

function App() {
  const [count, setCount] = useState(0)

  const {results, setResults} = useState([])

  return (
    <>
      <section id="center">
       

     <AppRoutes />

      
      
     
    

      </section>
    </>
  )
}

export default App
