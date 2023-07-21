import React from 'react'

const Filter = (props) => {

   function filterHandler(title){
       props.setCategory(title)
   }

  return (
    <div className='filter-btn'>{props.filterData.map((filter)=>{
       return <button onClick={()=>filterHandler(filter.title)}  className={`btn f-btn ${props.category==filter.title?"selected":""}`}    >{filter.title}</button>
    })}</div>
  )
}

export default Filter