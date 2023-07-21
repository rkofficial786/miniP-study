import React from 'react'
import Loginform from './Loginform'
import Signupform from './Signupform'

const Tempelate = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn ;
  return (
    <div className='template'>
        <h1>{props.title}</h1>
        <div>
        <p>{props.info1}</p>
        <p>{props.info2}</p>
        </div>

        {props.formtype==="login"?(<Loginform isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>):(<Signupform isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>)}

        <span>or</span>

        <div className="log-btn google">
        <img src="https://p7.hiclipart.com/preview/249/19/631/google-logo-g-suite-google-guava-google-plus.jpg" width={20} alt="" /> 
        <button className='log-btn google-btn'>   Sign in with Google</button>
        </div>
        
    </div>
  )
}

export default Tempelate