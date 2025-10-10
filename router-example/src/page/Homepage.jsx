import React from 'react'
import { Link, useNavigate } from 'react-router'

const Homepage = () => {
    const navigate = useNavigate();
    const goProductPage = ()=>{
        navigate('/products?q=pants')
    }

  return (
    <div>
      <h1>Home page</h1>
      <Link to="/about">Go to about page</Link>
      {/* Link는 라우터 간의 이동을 가능하게 해준다. */}
      <button onClick={goProductPage}>go to product page</button>
    </div>
  )
}

export default Homepage
