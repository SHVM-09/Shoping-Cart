import React from 'react'
import Fetcher from "../components/Fetcher"
import "./product.css";
const Product = ({handleClick}) => {
 
  return (
    <div className='proX'>
      <Fetcher handleClick={handleClick}/>  
    </div>
  )
}

export default Product
