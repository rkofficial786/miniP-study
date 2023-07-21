import React from 'react'
import Card from './Card'
import { useState } from 'react';
import Dashboard from '../page/Dashboard';

const Cards = (props) => {


   
      
      


    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn ;
    
    function getcourse(){
        if(props.category==="All"){
            let allCourse=[]
            Object.values(props.courses).forEach(array=>{
                array.forEach(courseData=>{
                    allCourse.push(courseData)
                })
            })
    
            return allCourse ;
        }

        else{
            return props.courses[props.category]
        }
        
    }
  return (
    <div className='cards'>
        {
            getcourse().map((data)=>{
               return <  Card  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} course={data} key={data.id} />
            })
        }



    </div>
  )
}

export default Cards