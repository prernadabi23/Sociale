import React from 'react';
import "./register.css";

export default function Register() {
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
            <div className='registerBox'>
                <input placeholder='Username' className='loginInput'></input>
                <input placeholder='Email' className='loginInput'></input>
                <input placeholder='Password' className='loginInput'></input>
                <input placeholder='Password Again' className='loginInput'></input>
                <button className='loginButton'>Sign Up</button>
                <button className='loginRegisterButton'>
                    Log Into Account
                </button>
            </div>
        </div>
     </div>
    </div>
  )
}
