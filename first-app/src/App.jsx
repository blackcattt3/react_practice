import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from "./component/Box.jsx"

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <div>
  //     <Box name="리사" num={1}/>
  //     <Box name="제니" num={2}/>
  //     <Box name="지수" num={3}/>
  //   </div>
  //   //반활할때 모든것을 하나의 태그로 묶어줘야한다!
  // )

  let counter=0;
  const [counter2, setCounter2] = useState(0);
  const increase = ()=>{
    counter++;
    setCounter2(counter2+1);
    console.log("counter",counter,"  counter2",counter2);
  }
  // state를 만들어서 state가 변하면 UI가 변하게 하자! 그래서 리액트

  return (
    <div>
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  )
}

export default App
