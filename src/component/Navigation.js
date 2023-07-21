import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../white-logo.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = (props) => {
  return (
    <div className="navbar">
      <div>
        <Link>
          <img src={logo} width={100} height={50} alt="" />
        </Link>
      </div>

      <div className="nav-link">
        <ul>
          <li>
            <NavLink  to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink  to={"/About"}>About</NavLink>
          </li>
          <li>
            <NavLink  to={"/Contact"}>Contact</NavLink>
          </li>
          
        </ul>
      </div>

      <div>
        <Link to={'/Login'}>{!props.isLoggedIn && <button className="btns login-btn">Log In</button>}</Link>
        <Link to={'/Signup'}>{ !props.isLoggedIn &&  <button className="btns">Sign Up</button>}</Link>
        <Link to={'/'}>{props.isLoggedIn &&  <button className="btns" onClick={()=>{props.setIsLoggedIn(false); toast.success("logged Out")}}>Logout</button>}</Link>
        <Link to={'/Dashboard'}>{ props.isLoggedIn && <button className="btns login-btn">Dashboard</button>}</Link>
      </div>
    </div>
  );
};

export default Navigation;
