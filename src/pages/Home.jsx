import React from 'react'
import Navbar from '../Components/common/Navbar'
import Hero from '../Components/Homecomp/Hero'
import Pin from '../Components/Homecomp/Pin'
import Hori from '../Components/Homecomp/Hori'
import KnowUs from '../Components/Homecomp/KnowUs'
import Footer from '../Components/Homecomp/Footer'
import Services from '../Components/Homecomp/Services'
import About from '../Components/Homecomp/About'
import Loader from '../Components/Homecomp/Loader'

import Loader3 from '../Components/Homecomp/Loader3'
import Abouttext from '../Components/Homecomp/Abouttext'


const Home = () => {
  return (
    <div className='bg-black relative overflow-x-hidden'>
      {/* <Navbar />  */}
      {/* <Loader /> */}
      
      <Loader3 />
      <Hero />
      <Pin />
      <Hori />
      <About />
      <Abouttext />
      <Services />
      <KnowUs />
      <Footer />
    </div>
  )
}

export default Home
