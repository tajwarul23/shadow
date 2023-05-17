import React from 'react'
import Service1 from './Service1'
import Sealcoat from './Sealcoat'
import Ashphalt from './Ashphalt'
import Crack from './Crack'
function Service() {
  return (
    <div className="flex flex-col">
  <div className="flex justify-start">
    <Sealcoat></Sealcoat> {/* First Sealcoat on the left */}
  </div>
  <div className="flex justify-end">
  <div className="">
    <Ashphalt></Ashphalt> {/* Second Sealcoat on the right */}
  </div>
</div>
  <div className="flex justify-start ">
    <Crack></Crack> {/* Third Sealcoat on the left */}
  </div>
</div>

  
  )
}

export default Service