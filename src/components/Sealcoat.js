import React from 'react'
import i1 from '../SealCoat/tinified/s1.JPG'
import i2 from '../SealCoat/tinified/s2.JPG'
import i3 from '../SealCoat/tinified/s3.jpg'
import i4 from '../SealCoat/tinified/s4.JPG'
import i5 from '../SealCoat/tinified/s5.jpeg'
import i6 from '../SealCoat/tinified/s6.jpeg'
import i7 from '../SealCoat/tinified/s7.jpeg'
import i8 from '../SealCoat/tinified/s8.jpg'
import Slideshow from './Slideshow';
function Sealcoat() {
    const images = [
      i2, i1, i3,i4,i6,i7,i8,i5
     
        // Add more image URLs as needed
      ];

      const title="Seal Coat";

      const text = (
        <>
          Our sealcoating service offers a cost-effective solution to protect and preserve your asphalt surfaces, preventing cracks and deterioration.
          <br />
          Get a free quote today in 2 min by calling us.
          <br />
          <span className='text-black font-bold'>Starting from $99</span>
        </>
      );
    
      return (
        <div>
          {/* Other content */}
          <Slideshow images={images} title={title} text={text}  />
          {/* Other content */}
        </div>
      );
    };


export default Sealcoat