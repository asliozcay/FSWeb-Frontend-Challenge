import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/Hero/Hero'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Profile } from './components/Profile/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    <Skills />
    <Profile />
    <Projects />
    </>
  )
}

export default App
