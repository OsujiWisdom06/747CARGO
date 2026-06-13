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
                    <p>747 cargo services ltd is a leading provider of logistics services, trusted by international organizations
                         across industries for its sector expertise and sharp focus on customer 
                         service. ISS-GF’s presence in over 60 countries means an 
                        unmatched mix of global perspective and regional knowhow that adds
                         that decisive logistical edge to your business.</p>
                </div>
            </div>
            <div className='hero-image-inner-wrap2-our-services-btn'></div>
        </div>
       </div>
    </div>
  )
}

export default Hero