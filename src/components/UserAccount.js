import React from 'react'
import { BsChevronCompactRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const UserAccount = () => {

    // const userDetail = useSelector(store => store.userDetail);
    //         const {name , email} = userDetail?.userDetails?.data
    //         console.log(name,email)
  return (
    <div>
        <div className='ml-20 mr-20 pt-10 pb-10'>
            <h1 className='font-bold text-xl  ml-20 border-b-2 border-yellow-500'>My Account</h1>
        </div>
        {/* <div className='ml-20 mr-20 pt-2 pb-2 flex justify-around'>
            <h1 className='font-bold text-xl'>Name : {name}</h1>
            <h1 className='font-bold text-xl'>Email : {email}</h1>
        </div> */}
        <div className=' ml-20 mr-20 mt-5 pb-10 pl-20 flex justify-evenly flex-col md:flex-row'>
           <Link to={"/order"}> <div className='w-[250] bg-gray-100 p-5 rounded-lg flex mb-5'>
                <div>
                <h1 className='font-semibold'>My Order</h1>
                <p>to see the order history</p>
                </div>
                <BsChevronCompactRight className='m-4'/>
            </div></Link>
           <Link to={"/deleteaccount/"}> <div className='w-[350] bg-gray-100 p-5 rounded-lg flex mb-5'>
                <div >
                <h1 className='font-semibold'>Delete My Account</h1>
                <p>to delete the Account</p>
                </div>
                <BsChevronCompactRight className='m-4'/>
            </div></Link>
           <Link to={"/updatepassword/"}> <div className='w-[250] bg-gray-100 p-5 rounded-lg flex'>
                <div >
                <h1 className='font-semibold'>Update my password</h1>
                <p>to update password</p>
                </div>
                <BsChevronCompactRight className='m-4'/>
            </div></Link>
        </div>
        <div className=' ml-20 mr-20 mt-5  pl-20 flex justify-center'>
                <img src='https://images.bewakoof.com/web/group-19-1617704502.png' alt='bewakoof-logo'/>
        </div>

    </div>
  )
}

export default UserAccount