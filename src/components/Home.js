import React from 'react'
import { Link } from 'react-router-dom'
import Service from './Service'
import banner from '../SealCoat/banner.jpg'
function Home() {
 
  return (
    <div>
      {/* ------------------- */}
      <div className="relative">
  <div className="sm:aspect-w-16 sm:aspect-h-9 md:aspect-w-16 md:aspect-h-7 lg:aspect-w-16 lg:aspect-h-6">
    <img
      src={banner}
      alt="Banner"
      className="w-full h-auto object-cover sm:aspect-none md:aspect-none lg:aspect-none"
    />
  </div>

  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white lg:text-4xl font-bold sm:text-sm">
    <span className="text-myOrange lg:my-6">Protect, Preserve, and Beautify</span> <br /> your asphalt with our expert sealcoating, asphalt repair services.<br />
    <span className="text-myOrange  lg:py-2">Residential and Commercial.</span>
    <div className="mt-2">
      <Link className="btn btn-active" to="tel:+143-723-39078">
        Call Now
      </Link>
    </div>
  </div>
</div>

{/* ----------------- */}
  <div className="mt-8">
    <Service></Service>
  </div>
</div>

  
  
  
  )
}

export default Home