import React from 'react';
import { Link } from 'react-router-dom';

const WishListCard = ({ data }) => {
  let displayImage, name, price, id;

  if (data && data.products) {
    // This is for data coming from WishList component
    const { products } = data;
    displayImage = products?.displayImage;
    name = products?.name;
    price = products?.price;
    id = products?._id;
  } else if (data && data.product) {
    // This is for data coming from Cart component
    const { product } = data;
    displayImage = product?.displayImage;
    name = product?.name;
    price = product?.price;
    id = product?._id;
  } else {
    // Handle the case when the data object is not in the expected format
    return null; // or display an error message
  }

  return (
    <div className='w-[350px] shadow-lg m-5'>
      <img src={displayImage} alt={name} />
      <div className='text-bold p-2'>{name}</div>
      <div className='text-bold font-bold p-2'>₹{price}</div>
      <div>
        <Link to={`/buynow/${id}`} className='block'>
          <button className='bg-green-400 text-white p-2 rounded-lg m-3'>
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WishListCard;
