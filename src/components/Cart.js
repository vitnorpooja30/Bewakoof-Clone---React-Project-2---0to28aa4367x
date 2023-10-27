import React, { useState, useEffect } from 'react'
import { projectId, Add_TO_CART } from '../Utils/utils';
import WishListCard from './WishListCard';


const Cart = () => {

  const [cartData, setCartData] = useState([]);
  const userToken = localStorage.getItem("jwtToken");


  // get cart items 
  const getCartItems = async () => {
    // console.log(userToken);
    const data = await fetch(Add_TO_CART, {
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'projectID': projectId
      }
    })
    const json = await data.json();
    setCartData(json.data);
    // console.log(json);
  }

    useEffect(()=>{
        getCartItems();
    },[])


    // remove products from cart
      const removeFromCart = async(id) =>{
        const data = await fetch(Add_TO_CART + id, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'projectID': projectId
          }
        })
        const json = await data.json();
        
        // console.log(json);
        getCartItems();
      }


        const deleteAll = async() =>{
              // setCartData([]);
             await cartData.items.map((like)=>{
               removeFromCart(like.product._id);
                console.log(like.product._id)
              })

              // getCartItems()
        }

        // image when no data
        if(!cartData || !cartData.items || cartData.items.length === 0){
          return <div className='flex justify-center'>
            <img src='https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png'/>
          </div>
        }

  return  (
    <div>
      <div className='flex justify-end m-5'>
          {/* <buton onClick={deleteAll} className='bg-blue-500 p-5 rounded-lg'>Delete All</buton> */}
        </div>
      <div className='flex justify-center flex-wrap'>
        
        {
          // i use WishList card here because structure is little bit different so handle it in wishList componet 
          cartData && cartData.items.length > 0 && cartData.items.map((like) => (
            <div key={like._id}>
            <label className="absolute bg-red-500 text-white m-2 px-2 pb-1 rounded-full" onClick={()=>removeFromCart(like.product._id)}>x</label>
            <WishListCard  data={like} />
            {/* <label className="absolute bg-green-400 text-white m-2 px-2 py-1 rounded-full" onClick={()=>removeFromCart(like.product._id)}>X</label> */}
            </div>
          ))
          //likesdata && likesdata.items.length > 0 && <WishListCard data={likesdata.items[0]} />
        }
      </div>


    </div>
  )
}

export default Cart


