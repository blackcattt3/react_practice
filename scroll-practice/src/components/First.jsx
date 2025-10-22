import React, { useEffect, useState, useRef } from 'react'
import './First.css'

const First = () => {
    const [boxIsClick, setBoxIsClick] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const boxRef = useRef('')
    const inputRef = useRef('')

    const goToSecond = ()=>{
        window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: 'smooth'
        })
    }

    const handleScroll = ()=>{
        const scrollY = window.scrollY;
        if(boxIsClick && scrollY > window.innerHeight * 0.4){
            setBoxIsClick(false)
        }
    }

    const handleColor = (e)=>{
        if(boxIsClick && boxRef.current && !boxRef.current.contains(e.target)){
            setBoxIsClick(false)
            console.log(e.target)
        }
    }

    const readValue = ()=>{
        console.log(inputRef.current.value)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return()=>(window.removeEventListener('scroll', handleScroll))
    },[boxIsClick])

    useEffect(()=>{
        window.addEventListener('click', handleColor)
        return()=>(window.removeEventListener('click', handleColor))
    },[boxIsClick])

  return (
    <div className='first'>
      <h1>First</h1>
      <div onClick={goToSecond}>go to second</div>
      <div ref={boxRef} className={`box ${boxIsClick?"purple":""}`} onClick={()=>{setBoxIsClick(!boxIsClick)}}></div>
      
      {/* useRef 이용해서 input값 읽어오기 */}
      <div>
        <input ref={inputRef} type='text'/>
        <button onClick={readValue}>읽어오기</button>
      </div>

      {/* useState 이용해서 input값 읽어오기 */}
      <div>
        <input type='text' onChange={(e)=>{setInputValue(e.target.value)}}/>
        <button onClick={()=>{console.log(inputValue)}}>useState 읽어오기</button>
      </div>

    </div>
  )
}

export default First

// boxIseClick가 true 이고 scrollY가 window.innerHeight > 0.5 면 boxIsClick가 false로 변함
// input 값 읽어오기
// 1-1 useRef 이용
// 1-2 useState 이용