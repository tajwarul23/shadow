import React from 'react'
import i1 from '../Crack/image0.jpeg'
import i2 from '../Crack/image0.jpeg'
import i3 from '../Crack/image0.jpeg'
import Slideshow from './Slideshow';

function Crack() {
    const images=[i1, i2, i3];
    const title="Asphalt Crack Filling";
    const text = (
        <>
          Say goodbye to unsightly cracks on your asphalt with our expert crack filling service, preventing further damage and extending the life of your pavement.
        </>
      );
  return (
    <div>
        <Slideshow images={images} title={title} text={text}></Slideshow>
    </div>
  )
}

export default Crack