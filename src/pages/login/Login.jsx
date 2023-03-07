import React from 'react';
import "./login.css";

export default function Login() {
  return (
    <div className='login'>
     <div className='loginWrapper'>
        <div className='loginLeft'>
            <h3 className='loginLogo'>Sociale</h3>
            <span className='loginDesc'>
            Experience the power of connection and community like never before with Sociale - where your social life comes to life!
            </span>
        </div>
        <div className='loginRight'>
            <div className='loginBox'>
                <input placeholder='Email' className='loginInput'></input>
                <input placeholder='Password' className='loginInput'></input>
                <button className='loginButton'>Log In</button>
                <span className='loginForgot'>Forgot Password?</span>
                <button className='loginRegisterButton'>
                    Create a New Account
                </button>
            </div>
        </div>
     </div>
    </div>
  )
}
