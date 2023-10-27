import React from 'react'
import { useSelector } from 'react-redux'

const WomenWare = () => {
  
  const favList = useSelector(store => store.cart.items);
  console.log(favList);


  return (
    
    <div>WomenWare</div>
  )
}

export default WomenWare