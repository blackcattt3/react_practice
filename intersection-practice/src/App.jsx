import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useInView } from "react-intersection-observer";

function App() {
  const sections = ["첫 번째","두 번째","세 번째","네 번째","다섯 번째"]

  return (
    <div className='app'>
      {sections.map((text, i)=>{
        const [ref, inView] = useInView({ threshold: 0.5 });
        
        return (
          <div
            key={i}
            ref={ref}
            className={`fade-box ${inView?"fade-in":"fade-out"}`}
          >
            <h1>{text}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default App


