import { useState } from 'react'
import Nav from './components/shared/Nav'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Cta from './components/Cta/Cta'
import Footer from './components/Footer/Footer'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  
  return <>
  <Nav />
  <Hero />
  <Features />
  <Cta />
  <Footer />
  </>
}

export default App
