import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
import { AboutUs } from './pages/AboutUs'
import Header from './components/Header'

const App = () => {
  return (
    <div>
       <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/about-us' element={<AboutUs/>}></Route>
       <Route path='/contact-us' element={<ContactUs/>}></Route>
       <Route path='/explore-our-services' element={<Services/>}></Route>
     </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App