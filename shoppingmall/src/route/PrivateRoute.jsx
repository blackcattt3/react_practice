import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({authenticate}) => {
  return authenticate==true?<ProductDetail/>:<Navigate to="/Login/"/>
}
export default PrivateRoute

// authenticate가 true 일때만 상품 디테일 페이지 보여주고 false일 경우 로그인 페이지로 redirect