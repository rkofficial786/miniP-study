import React from 'react'
import Tempelate from '../component/Tempelate'

const Login = (props) => {
  
    let title="Hey Welcome back"
    let info1 ="Lorem ipsum dolor sit, amet consectetur iatur!"
    let info2 ="Lorem ipsum dolor sit, amet consectetur "
    let formtype="login"
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn ;

  return (
    <div>
        <Tempelate title={title} info1={info1} info2={info2} formtype={formtype} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
    </div>
  )
}

export default Login