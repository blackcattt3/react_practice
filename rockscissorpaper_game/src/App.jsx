import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from "./component/Box.jsx"

const choice = {
    rock:{
      name:"Rock",
      img:"https://store.clickhole.com/cdn/shop/files/Untitleddesign_6.png?v=1693423886"
    },
    scissors:{
      name:"Scissors",
      img:"https://m.media-amazon.com/images/I/51QtmdQD-sL._UF894,1000_QL80_.jpg"    },
    paper:{
      name:"Paper",
      img:"https://m.media-amazon.com/images/I/61OorFhm6SL._UF894,1000_QL80_.jpg"
    }
  }

function App() {

  // 1. 박스 2개 (타이틀, 사진, 결과)
  // 2. 가위, 바위, 보 버튼
  // 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
  // 4. 컴퓨터는 랜덤하게 아이템 선택.
  // 5. 3,4의 결과를 가지고 누가 이겼는지 판단.
  // 상태 결과에 따라 테투리 색이 바뀐다. (이기면 초록, 지면 빨강, 비기면 검정)

  const [userSelect, setUserSelect] = useState(null)
  // state인 userSelect가 변할때마다 ui가 변한다!
  // state는 그냥 변수처럼 = 으로 못바꿈. set함수를 무조건 사용해야한다!
  const play=(userChoice)=>{
    console.log("선택됌", userChoice)
    setUserSelect(choice[userChoice]);
  }

  return (
    <div className='wrapper'>
      <div className="main">
        <Box title="You" item={userSelect}/>
        <Box title="Computer"/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>

  )
}

export default App

// 함수 실행시 함수명() 이렇게 있으면 리액트가 그냥 바로 함수를 실행시켜 버린다. 따라서 콜백함수 형태. 즉 () => 함수() 이런 방식으로 써줘야함!