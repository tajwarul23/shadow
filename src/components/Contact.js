import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import truck from '../Crack/truck.jpeg'

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md mx-auto max-w-lg">
      <div className="md:flex">
        {/* Left Column */}
        <div className="md:w-2/3">
          <img
            src={truck}
            alt="Card Image"
            className="object-cover h-full w-full rounded-lg md:rounded-l-lg"
          />
        </div>
        {/* Right Column */}
        <div className="p-6 md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className='flex items-center'>
          
          <BsTelephoneFill className='mr-2'></BsTelephoneFill>
            <Link className='font-bold' to='tel:+1 (437) 233-9078'>+1 (437) 233-9078</Link>
          
          </div>
          <div className='flex items-center'>
          
          <GrMail className='mr-2'></GrMail>
            <p className='font-bold'>shadowpropertycare@gmail.com</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
