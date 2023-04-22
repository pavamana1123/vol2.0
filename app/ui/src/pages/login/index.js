import { useRef, useState } from 'react';
import './index.css';
import API from '../../api';
import cookie from '../../cookie';

function Login(props) {

  var phone = useRef()
  var pass = useRef()

  const handleLogin = ()=>{
    new API().call("/login",{
      phone: phone.current.value,
      pass: pass.current.value
    }).then(r=>{
      if(r.error){
        alert(r.error)
        console.log(r.error)
        return
      }
      cookie.set("phone", r.body.phone)
      cookie.set("name", r.body.name)
      cookie.set("isFTM", r.body.isFTM)
      
      window.open("/home", "_self")
    }).catch(err=>{
      alert(`unexpected err: ${err}`)
    })
  }

  return (
    <div className='login'>
      <div className='login-feilds'>
        <input ref={phone} id="login-phone" placeholder='Enter phone'/>
        <input ref={pass} id="login-pass" type='password' placeholder='Enter password'/>
        <button id="login-submit" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login;