import React from 'react'
import i1 from '../SealCoat/a464e209-f7f6-4e71-ab94-e5b15bab95fc.jpg'
import i2 from '../SealCoat/image0.jpeg'
import i3 from '../SealCoat/image1.jpeg'
import i4 from '../SealCoat/image2.jpeg'
import i5 from '../SealCoat/image3.jpeg'
import i6 from '../SealCoat/5dd40e24-85d1-40d5-9a5d-c8ae7da411ab.JPG'
import i7 from '../SealCoat/62d68ec9-b58f-455c-a2fb-001a276d49a3.JPG'
import i8 from '../SealCoat/f2be1d73-069c-441d-ade7-56ef11813513.JPG'
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
          (Starting from $150)
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