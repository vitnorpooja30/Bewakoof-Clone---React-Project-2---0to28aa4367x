import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { toggleMenu } from '../Utils/appSlice';
import { useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { BiFilterAlt } from 'react-icons/bi';
import { FaList } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import Humburger from './humburger';


const Header = () => {

    const [search, setSearch] = useState("");
    const [hum , setHum] = useState(false)
    const dispatch = useDispatch();
    const nevigate = useNavigate()

    const handleToggleMenu = () => {
        // console.log("yes")
        setHum(!hum);
        // dispatch(toggleMenu());
    }
    const jwt_token = localStorage.getItem("jwtToken");
    function clearJwt(){
        localStorage.removeItem("jwtToken")
        alert("u logout successfully")
        nevigate('/')
      }

    return (
        <div>
        <div className='flex justify-between items-center bg-white border-b sticky top-0 z-10'>
            <div className='flex w-1/2 justify-evenly m-5'> 
            {/* <div className='hidden md:block'>     */}
                    <Link to={ "/useraccount/"}>
                    <img className='md:w-8 w-6'src='https://images.bewakoof.com/web/india-flag-round-1639566913.png'/>
                    </Link>
                    {/* </div> */}
                <div className='flex w-1/2 justify-center'>
                    <Link t={'/'}>
                        <img
                            className='h-[20px] '
                            src='https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg'
                            alt='Bewakoof logo'
                        />
                    </Link>
                </div>
                <div className=' hidden md:block'>
                <div className='flex w-1/2'>
                    <p className='font-bold px-5 text-xl'><Link to={'/menware'}>MEN</Link></p>
                    <p className='font-bold px-5 text-xl'><Link to={'/womenware'}>WOMEN</Link></p>
                </div>
                </div>
            </div>
            <div className='hidden w-1/2 md:block'>
            <div className='flex w-full justify-center m-5 '>
                <div className='w-1/2 flex'>
                    <input
                        type='text'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        placeholder='Search...'
                        className=' bg-gray-50 border border-black border-solid p-2 w-full rounded-lg'
                    />
                    <p className='font-bold text-xl p-2'><Link to={"/search/" + search}>Search</Link></p>
                </div>
                <div className='w-1/2'>
                    <ul className='flex justify-around'>
                        <li className='font-bold text-xl p-2 m-1'>{jwt_token ? <FiLogOut onClick={clearJwt}/> :<Link to={"/login"}><FaUser /></Link>}</li>
                        <li className='font-bold text-xl p-2 m-1'><Link to={"/wishlist"}><FaHeart /></Link></li>
                        <li className='font-bold text-xl p-2 m-1'><Link to={"/cart"}><FaShoppingCart /></Link></li>
                        <li className='font-bold text-xl p-2 m-1'><Link to={"/filter"}><BiFilterAlt /></Link></li>
                        <li className='font-bold text-xl p-2 m-1'><Link to={"/order"}><FaList /></Link></li>
                    </ul>
                </div>
                
            </div>
            </div>
            <div className='block md:hidden w-1/2'>
                <div className='flex justify-center pb-2'>
                    < FaBars onClick={handleToggleMenu} className='mt-3 '/>

                </div>
                    
            </div>
        </div>
        {
            hum && <Humburger/>
        }
        </div>
    )
}

export default Header