import React from 'react'
import logo from '../shadow-removebg-preview.png'
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
    //     {/* <Link to="mailto:shadowpropertycare@gmail.com" onClick={handleEmailClick}><AiFillMail></AiFillMail></Link> */}
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
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className=""><img src={logo} alt='' height="150px" width="150px"></img></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='text-white'>Item 1</a></li>
      <li><a className='text-white'>Item 1</a></li>
      <li><a className='text-white'>Item 1</a></li>
      {/* <li tabIndex={0}>
        <a className='text-white'>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 text-white">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li> */}
      <li><a className='text-white'>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
  )
}

export default Navbar;