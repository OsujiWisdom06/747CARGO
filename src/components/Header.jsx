import React from 'react'
import '../Styles/header.css'
import { FaGreaterThan } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
// import clogo from "../../public/747logo.jpeg"

const Header = () => {
    const nav = useNavigate()
  return (
    <div className='Header'>
        <div className='Header-wrap'>
            <div className='header-name-div'>
                <img src="../../public/747logo.jpeg" alt="logo" />
            </div>
            <div className='header-service-div'>
                <div className='header-service-div-inner'>
                    <p onClick={()=> nav("/")}>Home</p>
                    <p onClick={()=> nav("/services")}>Services</p>
                    <p onClick={()=> nav("/projects")}>About us</p>
                    <p onClick={()=> nav("/contact")}>Contact us</p>
                </div>
            </div>
            <div className='header-hire-me-div'>
                <div className='header-hire-me-div-inner' onClick={()=>{nav('/contact-us')}}>
                    <h3>Get in touch <FaGreaterThan className='greater-than' /><FaGreaterThan className='greater-than'/></h3>
                </div>
                <div className='Side-bar-nav-menu'>
                    <IoMenu/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header