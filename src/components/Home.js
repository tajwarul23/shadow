import React from 'react'
import { Link } from 'react-router-dom'
import Service from './Service'

function Home() {
 
  return (
   <div>
     <div className="bg-gray-100 w-full md:w-4/5 lg:w-3/5 mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="bg-white p-8 md:w-3/5">
          {/* Content for the larger column */}
          <h2 className="text-2xl font-bold mb-4">Large Column</h2>
          <p className="text-gray-600">This is the larger column that covers 70% of the width.</p>
          {/* Add additional padding/margin to increase height */}
          <div className="mt-8">
            {/* Additional content */}
          </div>
        </div>
        <div className="bg-orange-500 p-8 md:w-2/5">
          {/* Content for the smaller column */}
          <h2 className="text-2xl font-bold mb-4 text-white">Small Column</h2>
          <p className="text-white">This is the smaller column that covers 30% of the width and has an orange background.</p>
          <div className='mt-2'>
          <Link className="btn btn-active " to="tel:+143-723-39078">Call Now</Link>
          </div>
        </div>
      </div>
      
      
    </div>
    {/* ----------Services------------ */}
    <div className='mt-5'>
      <div className='lg:text-3xl sm:text-xl text-white text-center mb-3 '>
      <h1 >Shadow Property Care Services</h1>
      </div>
     

      <Service></Service>
    </div>

   </div>
  )
}

export default Home