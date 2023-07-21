import React from "react";
import LikeButton from "./Like";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";



const Card = (props) => {

  let navigate=useNavigate();

  function buyHandler(){
    if(props.isLoggedIn===true){
      toast.success("Course Added to Dashboard")
      
    }
    else{
      toast.error("Login required")
     navigate("/Login")
    }
  }
  return (
    <div className="card">
      <img src={props.course.image.url} alt="" />

      <div className="details">
        <div className="title">
          <h2>{props.course.title}</h2>
        </div>

        <div className="info">
          <p>
            {props.course.description.length > 100
              ? props.course.description.substr(0, 200)
              : props.course.description}
          </p>
        </div>

        <div >
          {" "}
          <button onClick={buyHandler} className="btn buy-btn">Buy Course</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
