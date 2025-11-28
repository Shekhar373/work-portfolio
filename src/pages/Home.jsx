import React from 'react'
import Navbar from '../Components/common/Navbar'
import Hero from '../Components/Homecomp/Hero'
import Pin from '../Components/Homecomp/Pin'
import Hori from '../Components/Homecomp/hori'

import Homevideo from '../Components/Homecomp/Homevideo'
import Servicehome from '../Components/Homecomp/Servicehome'
import Upperfooter from '../Components/Homecomp/Upperfooter'
import Footer from '../Components/Homecomp/Footer'
import Serviceupper from '../Components/Homecomp/Serviceupper'

const Home = () => {
  return (
    <div className='bg-black overflow-x-hidden'>
        {/* <Navbar /> */}
        <Hero />
        <Homevideo />
        <Pin />
        <Hori />
        <Serviceupper />
        <Servicehome />
        <Upperfooter />
        <Footer />
    </div>
  )
}

export default Home
