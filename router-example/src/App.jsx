import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './page/Homepage'
import Aboutpage from './page/Aboutpage'
import { Routes, Route, Navigate, useNavigate } from 'react-router'
import Productpage from './page/Productpage'
import ProductDetailPage from './page/ProductDetailPage'
import LoginPage from './page/LoginPage'
import UserPage from './page/UserPage'

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  // false면 로그인 안한거, true면 로그인 한거

  // PrivateRoute 이거 컴포넌트임! 대문자 시작이잖아!
  const PrivateRoute = ()=>{
    // 로그인 했으면 프로필 페이지, 안했으면 로그인 하세요!
    return authenticate == true?<UserPage/>:<Navigate to="/login"/>

    // Navigate :  리다이렉트 해주는 컴포넌트
    // useNavigate : 리액트 훅 function   두개 다르다!
  }

  return (
    <div>
      <Routes>
        {/* Routes의 역할 : 각각의 page를 switch 하는 역할을 한다. */}
        {/* path : 각 페이지의 주소. element : 각 주소에 보여주고 싶은 페이지 */}
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/products" element={<Productpage/>}/>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<PrivateRoute/>}/>
      </Routes>
    </div>
  )
}

export default App
