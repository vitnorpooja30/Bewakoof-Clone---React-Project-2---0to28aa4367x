import React from 'react'
import Header from './Header'
import Footer from './Footer'
import FrontPage from './FrontPage'
import { Outlet } from 'react-router-dom'
import Sidebar from './humburger'

const Body = () => {
  return (
    <div >
      <Header/>
      {/* <div className='flex'> */}
       {/* <Sidebar/> */}
      <Outlet/>
      {/* </div>   */}
      <Footer/>

    </div>
  )
}

export default Body