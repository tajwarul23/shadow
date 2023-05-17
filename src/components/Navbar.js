import React from 'react'
import logo from '../SealCoat/logo-01.jpg'
import { Link } from 'react-router-dom';

import {BsInstagram,BsFacebook} from "react-icons/bs"
import {AiFillMail} from "react-icons/ai"
function Navbar() {
  const handleEmailClick = () => {
    window.open('mailto:shadowpropertycare@gmail.com');
  };
  return (
    
    // <nav className="flex items-center justify-between p-4 text-white">
      
    //   <div className='flex items-center justify-center'>
        
    //     <Link to="#" className='text-3xl p-4'><BsFacebook></BsFacebook></Link>

    //     <Link to="#" className='text-3xl'><BsInstagram></BsInstagram></Link>
    //     {/* <Link to="mailto:shadowpropertycare@gmail.com" onClick={handleEmailClick}><LinkiFillMail></LinkiFillMail></Link> */}
    //     </div>
        
    //     <Link to="#" className=""><img src={logo} height={200} width={200} alt=''/></Link>
      
    //     <div>
    //     <Link to="tel:+143-7233-9078" className="mr-4 text-2xl">+143-7233-9078</Link>
    //   </div>
    // </nav>
    // -------------------daisy UI-----------------------------
    <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-myOrange lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <Link className="btn" to="tel:+143-723-39078">Call Now</Link>
      </ul>
    </div>
    <div className='md:block lg:block sm:mx-auto'>
      
    <Link to='/home' ><img  src={logo} alt='' height="130px" width="130px"></img></Link>
    </div>
    {/* <div className=''>
    <Link className="btn lg:hidden md:hidden   p-5" to="tel:+143-723-39078">Call Now</Link>
    </div> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link className='text-white underline-none btn bg-myGray focus:outline-none'to="/home">Home</Link></li>

      <li className='px-3'><Link className='text-white underline-none btn bg-myGray-700' to='/service'>Service</Link></li>
      <li><Link className='text-white underline-none btn bg-myGray-700' to="/about">About</Link></li>
      <li className='px-3'><Link className='text-white underline-none btn bg-myGray-700'to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <Link className="btn hidden text-orange-500 font-bold  bg-white  sm:block p-5" to="tel:+143-723-39078">Call Now</Link>
  </div>
</div>
  )
}

export default Navbar;