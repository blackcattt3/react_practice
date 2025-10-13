import { useState } from 'react'
import {Routes, Route,Link} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ProductAll from './page/ProductAll'
import ProductDetail from './page/ProductDetail'
import Login from './page/Login'
import Navbar from './component/Navbar'

function App() {

  /** 콘솔에 원하는 값을 출력합니다. */
  function foo(){
    console.log("1")
  };
  foo
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App

// 전체상품 페이지, 로그인 페이지, 상품 상세 페이지
// 네비게이션 바 만들기(페이지가 바껴도 네비게이션은 그대로 고정이 되어있다!)
// 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 상품 디테일을 눌렀을때 로그인 되어있을 경우에는 로그인 페이지가 먼저 나온다.
// 로그인 되어있을 경우 상품디테일을 누르면 해당 페이지로 넘어간다.
// 로그아웃 버튼 누르면 로그아웃.
// 로그아웃이 되면 상품 디테일을 볼 수 없음. 다시 로그인 페이지로 돌아감(리다이렉트 이용해야할듯)
// 로그인 하면 로그아웃버튼 보이고, 로그아웃상태에서는 로그인버튼이 보인다.
// 상품 검색 가능.