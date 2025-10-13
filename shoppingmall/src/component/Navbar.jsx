import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성']

  return (
    <div>
      <div>
        <div className='top'>
            <div><FontAwesomeIcon icon={faUser} /></div>
            <div>로그인</div>
        </div>
      </div>
      <div className='middle'>
        <div>
            <img className='logo-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"/>
        </div>
      </div>
      <div className='bottom'>
        <ul className='menu-list'>
            {menuList.map((item)=>(<li>{item}</li>))}
        </ul>
        <div className='search-bar'>
            <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
            <input className="inputBox" type="text" placeholder='search you item'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
