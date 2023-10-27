import React,{useEffect} from 'react'
import Slider from './Slider'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const FrontPage = () => {
  // const userDetail = useSelector(store => store.userDetail);

    // useEffect(()=>{
    //   // console.log(userDetail);
    //   console.log("succesfull data set");
    // },[userDetail])



  const imgarr1 = [
    {
      url : 'https://images.bewakoof.com/uploads/grid/app/bewakoof-winter-store-online-fashion-shopping-720-banner-1609849948.jpg'
    },
    {
      url : 'https://images.bewakoof.com/uploads/grid/app/bewakoof-cover-parade-mobile-cover-online-fashion-shopping-720-banner-1609849946.jpg'
    },
    {
      url : 'https://images.bewakoof.com/uploads/grid/app/18th-Dec-Homepage-DOTD-1608282108.jpg'
    },
  ]

  const imgarr2 = [
    {
      url:'https://images.bewakoof.com/t1080/men-s-red-pocket-jerry-graphic-printed-t-shirt-241993-1679048871-1.jpg'
    },
    {
      url:'https://images.bewakoof.com/t1080/men-s-black-moon-knight-x-mr-knight-back-graphic-printed-t-shirt-494974-1655748988-1.jpg'
    },
    {
      url:'https://images.bewakoof.com/t1080/men-s-black-dementors-graphic-printed-oversized-t-shirt-589145-1683016295-1.jpg'
    },
    {
      url:'https://images.bewakoof.com/t1080/men-s-black-gojo-domain-graphic-printed-oversized-t-shirt-520746-1667495703-1.jpg'
    },
    {
      url:'https://images.bewakoof.com/t1080/men-s-black-gojo-domain-graphic-printed-oversized-t-shirt-520746-1667495703-1.jpg'
    },
    {
      url:'https://images.bewakoof.com/t1080/men-ajeeb-prani-printed-t-shirt-581118-1678684894-1.jpg'
    },
  ]

  function clearJwt(){
    localStorage.removeItem("jwtToken")
  }
 
  return (
    <div>
      {/* <button className='bg-red-200' onClick={clearJwt}>clear jwtToken</button> */}
        <Slider />
        <div className='flex justify-center  m-10 flex-col md:flex-row'>
          {
            imgarr2.map((img,index) =>(
              <div className='mx-6 shadow-lg mb-4' key={index}>
               <Link to={"/menware"}> <img src={img.url}  className='w-[400px]'/></Link>
              </div>
            ))
          }
        </div>

        <div className='flex justify-center  m-10 flex-col md:flex-row'>
          {
            imgarr1.map((img,index) =>(
              <div className='mx-6 shadow-lg mb-4'  key={index}>
               <Link to={"/womenware"}> <img src={img.url}className='w-[400px]'/></Link>
              </div>
            ))
          }
        </div>
        <div className='flex justify-center'>
         <Link to={"/womenware"}> <img src='https://images.bewakoof.com/uploads/grid/app/Revised-DOTW-Desktop-Banner-Homepage-Women-1696136721.jpg'/></Link>
        </div>
        <div className='flex justify-center m-6'>
         <Link to={"/womenware"}> <img src='https://images.bewakoof.com/t640/women-s-black-wanderlust-graphic-printed-oversized-t-shirt-620604-1695381861-1.jpg' className='w-[400px] mx-1'/></Link>
         <Link to={"/womenware"}> <img src='https://images.bewakoof.com/t640/women-s-brown-vibin-graphic-printed-oversized-t-shirt-620606-1695381905-1.jpg' className='w-[400px] mx-1'/></Link>
        </div>
        <div className='flex justify-center'>
          <Link to={"/womenware"}><img src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg'/></Link>
        </div>
    </div>
  )
}

export default FrontPage