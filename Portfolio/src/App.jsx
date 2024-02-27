import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header bg-slate-800 h-20 w-screen text-white text-xl font-bold flex flex-row justify-around items-center'>
        <div className='Home'>
          <a href="" className='home'>Home</a>
        </div>
        <div className='Home '>
          <a href="" className='Projects'>Projects</a>
        </div>
        <div className='Home '>
          <a href="" className='Education'>Education</a>
        </div>
        <div className='Home '>
          <a href="" className='Contact'>Contact</a>
        </div>
      </div>
    </>
  )
}

export default App
