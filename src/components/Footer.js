import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='md:flex md:justify-between '>
                <div className='flex w-9/12'>
                    {/* <img className='w-14 m-4' src='https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg' alt='Img' /> */}
                    <h1  className='w-14 m-5 font-extrabold text-xl text-yellow-400'>Bewakoof.com</h1>
                    <p className='mt-6 ml-8'>
                        {/* <h1 className='text-white font-bold '>Select your ware</h1>                       */}
                    </p>
                </div>
                <div className='flex item-center w-3/12'>
                    <a href='https://www.linkedin.com/in/pooja-vitnor-1068701a6/' target='_blank'> 
                    <FaLinkedin size={80} className='text-white p-4 ' /> 
                    </a>
                    <a href='https://github.com/vitnorpooja30' target='_blank'>
                    < FaGithub size={80} className='text-white p-4 ' /> 
                        </a>
                </div>
            </div>

            <div className='text-white md:flex md:justify-evenly'>
                <div>
                    <h1 className='font-bold p-2'>About us</h1>
                    <ul>
                        <li className='p-1'>Latest trend</li>
                        <li className='p-1'>Feature</li>
                        <li className='p-1'>Top sells</li>
                        <li className='p-1'>Team</li>
                        <li className='p-1'>career</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold p-2'>Terms of Use</h1>
                    <ul>
                        <li className='p-1'>Clothing</li>
                        <li className='p-1'>Billing & Payments</li>
                        <li className='p-1'>Advertising</li>
                        <li className='p-1'>Limitation Of Liability</li>
                        <li className='p-1'>Indemnity</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold p-2'>Contact us</h1>
                    <ul>
                        <li>Mobile: 8308533xxx </li>
                        <li>vitnorpooja30@gmail.com</li>
                        <li>help and support</li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold p-2'>Legal</h1>
                    <ul>
                        <li className='p-1'>Terms & Conditions</li>
                        <li className='p-1'>Privacy Policy</li>
                        <li className='p-1'>Cookie Policy</li>
                        <li className='p-1'>Payments Issues</li>

                    </ul>
                </div>
                <div className="text-gray-400 text-lg font-semibold">
                    <img
                        className="w-[300px] text-gray-400"
                        src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png"
                        alt="img"
                    />

                </div>

            </div>
            <div className='flex justify-evenly'>
                <p className='text-white p-5 font-semibold text-2xl'> &copy;PoojaVitnor</p>
            </div>

        </div>
    );
};

export default Footer;