import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성'
    ];

    const navigate = useNavigate()

    const goToLogin = ()=>{
        navigate('/Login');
    }

    const search = (event)=>{
        if(event.key === 'Enter'){
            console.log('click', event.key);
            // 우리가 입력한 검색어를 가져와서
            // url을 바꿔준다.
            // 우리가 읽어오고 싶은 값이 event에 들어가있다!
            let keyword = event.target.value
            console.log("키워드", keyword);
            navigate(`/?q=${keyword}`)
        }
    }

  return (
    <div>
      <div>
        <div className='top' onClick={goToLogin}>
            <div><FontAwesomeIcon icon={faUser} /></div>
            {/* <div>로그인</div> */}
            <Link className="login" to="/Login">로그인</Link>
        </div>
      </div>
      <div className='middle'>
        <div>
            <img className='logo-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"/>
        </div>
      </div>
      <div className='bottom'>
        <ul className='menu-list'>
            {menuList.map((item, index)=>(<li key={index}>{item}</li>))}
        </ul>
        <div className='search-bar'>
            <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
            <input className="inputBox" type="text" placeholder='search you item' onKeyDown={(e)=>search(e)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
