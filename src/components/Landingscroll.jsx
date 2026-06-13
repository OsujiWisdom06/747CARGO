import React from 'react'
import "../Styles/landingscroll.css"
import { ImArrowUpRight } from 'react-icons/im'

const Landingscroll = () => {
  return (
    <div className='landing-scroll-view'>
        <div className='landing-scroll-1'>
            <div className='landing-scroll-1-div1'>
                <img src="https://iss-globalforwarding.com/wp-content/uploads/2024/08/Ocean-Freight-1.png" alt="image" />
            </div>
             <div className='landing-scroll-1-div2'>
                <div className='landing-scroll-1-div2-top'>
                    <div className='landing-scroll-1-div2-top-wrap'>
                        <h1>Efficient Service</h1>
                        <h1 style={{color:"#a9441a"}}>Solutions for You</h1>
                    </div>
                </div>
                <div className='landing-scroll-1-div2-bottom'>
                     <div className='landing-scroll-1-div2-bottom-wrap'>
                    <div className='landing-scroll-1-div2-bottom-air-freight'>Air Freight <ImArrowUpRight /></div>
                    <div className='landing-scroll-1-div2-bottom-sea-freight'>Sea Freight <ImArrowUpRight /></div>
                    <div className='landing-scroll-1-div2-bottom-road-transport'>Road Transport <ImArrowUpRight /></div>
                    <div className='landing-scroll-1-div2-bottom-global-logistics'>Global Logistics <ImArrowUpRight /></div>
                    <div className='landing-scroll-1-div2-bottom-warehousing-distribution'>Warehousing Distribution <ImArrowUpRight /></div>
                    <div className='landing-scroll-1-div2-bottom-custom-clearance'>Custom Clearance <ImArrowUpRight /></div>
                </div>
                </div>
               
             </div>
        </div>
        <div>www</div>
    </div>
  )
}

export default Landingscroll