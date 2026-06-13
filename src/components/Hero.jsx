import React from 'react'
import "../Styles/hero.css"

const Hero = () => {
  return (
    <div className='hero-image-div'>
       <div className='hero-image-wrap'>
        <div className='hero-image-inner-wrap1'>
            <div className='hero-image-inner-wrap1-text-1'>
                <h1>
                    Complex Problems.
                </h1>
            </div>
            <div className='hero-image-inner-wrap1-text-2'>
               <h1>
                 Efficient Logistics
               </h1>
            </div>
            <div className='hero-image-inner-wrap1-text-3'>
               <h1>
                 Solutions.
               </h1>
            </div>
        </div>
        <div className='hero-image-inner-wrap2'>
            <div className='hero-image-inner-wrap2-text'>
                <div className='hero-image-inner-wrap2-text-wrap'>
                    <p>747 Cargo Services Ltd is a leading clearing and forwarding agency dedicated to
                         providing efficient Air Freight, Sea Freight, and Road Transport solutions. We connect
                          businesses to global markets through reliable logistics services, ensuring secure, cost-effective,
                           and timely delivery of cargo. Our commitment to excellence, 
                        customer satisfaction, and seamless freight management makes us a trusted partner for all your shipping and transportation needs.</p>
                </div>
            </div>
            <div className='hero-image-inner-wrap2-our-services-btn'></div>
        </div>
       </div>
    </div>
  )
}

export default Hero