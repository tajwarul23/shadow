import React from 'react'
import { Link } from 'react-router-dom'

function service1() {
  return (
    <div className="bg-gray-100 w-full md:w-4/5 sm:w-full lg:w-3/5 mx-auto mb-5">
    <div className="flex flex-col md:flex-row">
      <div className="bg-white p-8 md:w-1/2 lg:text-2xl md:text-xl sm:text-xs">
        {/* Content for the first column */}
        <div className='lg:text-2xl sm:text-xs md:text-xs'>
        <h2 className="font-bold mb-4">First Column</h2>
        <p className="text-gray-600 ">This is the first column that covers 50% of the width.</p>
        </div>
      </div>
      <div className="bg-orange-500 p-8 md:w-1/2 lg:text-2xl md:text-xl sm:text-xs">
        {/* Content for the second column */}
        <h2 className="text-2xl font-bold mb-4 text-white">Second Column</h2>
        <p className="text-white">This is the second column that covers 50% of the width and has an orange background.</p>
        <div className='mt-2'>
          <Link className="btn btn-active " to="tel:+143-723-39078">Book Now</Link>
          </div>
      </div>
    </div>
  </div>
  )
}

export default service1