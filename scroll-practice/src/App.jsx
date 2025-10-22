import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Second from './components/Second'

function App() {
  const [bgColor, setBgColor] = useState('beige')

  const handleScroll = ()=>{
    const scrollY = window.scrollY;
    if(scrollY > window.innerHeight * 0.6){
      setBgColor('pink')
    } else {
      setBgColor('beige')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return ()=>(window.removeEventListener('scroll', handleScroll))
  },[])

  return (
    <div className='app' style={{backgroundColor : bgColor}}>
      <First/>
      <Second/>
    </div>
  )
}

export default App
