import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const {id} = useParams()
    // destructuring 이용!
    console.log("params", id)
  return (
    <div>
      <h1>product Detail{id}</h1>
    </div>
  )
}

export default ProductDetailPage
