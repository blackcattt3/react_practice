import React from 'react'
import { Link } from 'react-router'

const Homepage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/about">Go to about page</Link>
      {/* Link는 라우터 간의 이동을 가능하게 해준다. */}
    </div>
  )
}

export default Homepage
