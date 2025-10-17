import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


const Login = ({setAuthenticate}) => {

    const navigate = useNavigate();
    
    const loginUser = (event)=>{
        event.preventDefault()
        console.log("login user function issue")
        setAuthenticate(true);
        navigate('/');
    }

  return (

    <div className='login-container'>
        <form onSubmit={(event)=>loginUser(event)}>
            <div className='login-form'>
                <h1>Log in</h1>
                <div className='login-row'>
                    <div className='login-input'>
                        <input type="text" placeholder='id'/>
                        <input type="text" placeholder='password'/>
                    </div>
                    <button type="submit">로그인</button>
                </div>
            </div>
        </form>
    </div>

  )
}

export default Login
