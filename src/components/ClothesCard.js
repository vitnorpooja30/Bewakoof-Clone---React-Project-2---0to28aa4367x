import React from 'react'
// import { handleCart } from '../Utils/DCart';
// import { useDispatch } from 'react-redux';


const ClothesCard = ({data}) => {
    // console.log(data);
    // let dispatch = useDispatch();
    const color = data.color.toLowerCase();
     const colorObj = {
        black : 'text-black',
        blue : 'text-blue-500',
        green : 'text-green-600',
        brown : 'text-brown-300',
        white : 'text-gray-400',
        navy : 'text-blue-800',
        red : 'text-red-400'
     }

     

        const textColor = colorObj[color];
        // console.log(data.displayImage);


        // const addOrRemove=(event)=>{
        //   event.stopPropagation();
        //   dispatch(handleCart(data));

        // }
  return (
   <div>
     <label className="absolute bg-green-400 text-white m-0 px-2 py-1 rounded-lg">{data.sellerTag}</label>
        <div className='w-[350px] shadow-lg m-5'>
            <img src={data.displayImage}/>
            <div className='text-bold  p-2' >{data.name}</div>
            <div className={`text-bold font-bold p-2 ${textColor}`}> Color : {data.color}</div>        
            <div className='text-bold font-bold text-green-400 p-2'>Price : ₹{data.price}</div>
            {/* <div className='text-bold font-bold text-green-400 p-2' onClick ={addOrRemove}>cart</div> */}
        </div>
    </div>
  )
}

export default ClothesCard