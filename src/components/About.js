import React from 'react'

function About() {
  const videoUrl = "https://www.youtube.com/embed/3VquAzaVc58";

  return (
    <div className=''>
      <h1 className='text-4xl text-myOrange text-center'>Welcome to SHADOW Property Care!</h1>
    <br />
    <iframe
      src={videoUrl}
      title="YouTube Video"
      allowFullScreen
      className="w-full "
      style={{ height: "600px" }}
    />
    
    <p className='text-center text-2xl text-white
   '>
We are a dynamic sealcoating and asphalt repair company founded by Shafiul Abtahi and Taukir Ahmod. With a passion for construction and a wealth of knowledge gained by studying in construction engineering technician course at GeorgeBrown College, we have embarked on this entrepreneurial journey to provide top-notch services in the sealcoating and asphalt repair industry. <br></br>

At SHADOW property care, we understand the importance of well-maintained and durable surfaces, be it your driveway, parking lot, or any other asphalt pavement. Our mission is to enhance the lifespan and appearance of your asphalt surfaces while delivering exceptional customer service.
<br></br>

What sets us apart is our unwavering commitment to quality workmanship, attention to detail, and the use of premium materials and equipment. We take pride in staying up-to-date with the latest industry practices and technologies, ensuring that we bring the most effective and efficient solutions to every project we undertake.
<br></br>
Our team of highly skilled and experienced professionals possesses a deep understanding of asphalt properties, repair techniques, and sealcoating processes. We carefully assess each project, tailoring our approach to meet your unique needs and budget. Whether it's a small residential driveway or a large commercial parking lot, we handle every job with the same level of dedication and professionalism.
<br></br>
Customer satisfaction is at the core of our business values. We strive to build long-lasting relationships with our clients by delivering outstanding results, maintaining clear communication throughout the process, and being responsive to their concerns and inquiries.
<br></br>
We are fully licensed, insured, and compliant with all industry regulations, giving you peace of mind knowing that your project is in safe hands. Additionally, we adhere to environmentally friendly practices, minimizing our impact on the environment while delivering superior outcomes.
<br></br>
Thank you for considering SHADOW property care for your sealcoating and asphalt repair needs. We look forward to working with you and exceeding your expectations. Contact us today for a free consultation or to schedule a service!
    </p>
  </div>
  
  
  )
}

export default About