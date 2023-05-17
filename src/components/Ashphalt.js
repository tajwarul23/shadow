import React from 'react'
import i1 from '../Asphalt/image0.jpeg'
import i2 from '../Asphalt/image1.jpeg'
import i3 from '../Asphalt/image2.jpeg'
import Slideshow from './Slideshow';
function Ashphalt() {
  const images = [i1,i2,i3];
  const title="Asphalt";
  const text = (
    <>
      Our team offers comprehensive asphalt services, including pothole patching, repairs, and driveway-to-garage ramps.
      <br />
      Restore surface integrity and safety with our reliable solutions.
      <br />
      Get a free quote today!
    </>
  );

  return (
    <div className=''>
      <Slideshow images={images} title={title} text={text}></Slideshow>
    </div>
  )
}

export default Ashphalt