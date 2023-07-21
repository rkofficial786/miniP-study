import React from 'react'
import Tempelate from '../component/Tempelate'

const Signup = (props) => {

    
    let title="Hey How are you"
    let info1 ="Lorem ipsum dolor sit,tur adipis. Suscipit, pariatur!"
    let info2 ="Lorem ipsum dolor sit, amet consectetur a"
    let formtype="signup"
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn ;
  return (
    <div><Tempelate title={title} info1={info1} info2={info2} formtype={formtype} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /></div>
  )
}

export default Signup