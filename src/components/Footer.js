import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../SealCoat/logo-01.jpg'
import {AiFillInstagram,AiFillFacebook} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
function Footer() {
  return (
    <footer className="footer p-10 bg-myGray text-neutral-content">
  <div>
  <Link to='/home' className=""><img src={logo} alt='' height="150px" width="150px"></img></Link>
    <p>Shadow Property Care.<br/>Providing reliable service since 2023</p>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <Link to="https://instagram.com/shadowpropertycare?igshid=MzRlODBiNWFlZA=="><AiFillInstagram size={30}></AiFillInstagram ></Link> 

      <Link to="https://www.facebook.com/profile.php?id=100092626091603&mibextid=LQQJ4d"> <AiFillFacebook size={30}></AiFillFacebook></Link>
      
      <Link to="https://www.tiktok.com/@shadowpropertycare?_t=8cPkifrBGGE&_r=1"> <FaTiktok size={30}></FaTiktok></Link>
    </div>
  </div>
</footer>
  )
}

export default Footer