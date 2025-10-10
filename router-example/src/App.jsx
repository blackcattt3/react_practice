import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './page/Homepage'
import Aboutpage from './page/Aboutpage'
import { Routes, Route } from 'react-router'
import Productpage from './page/Productpage'
import ProductDetailPage from './page/ProductDetailPage'

function App() {

  return (
    <div>
      <Routes>
        {/* Routes의 역할 : 각각의 page를 switch 하는 역할을 한다. */}
        {/* path : 각 페이지의 주소. element : 각 주소에 보여주고 싶은 페이지 */}
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/products" element={<Productpage/>}/>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
