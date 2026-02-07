import React from 'react'
import Navbar from '../Components/common/Navbar'
import Hero from '../Components/Homecomp/Hero'
import Pin from '../Components/Homecomp/Pin'
import Hori from '../Components/Homecomp/Hori'
import KnowUs from '../Components/Homecomp/KnowUs'
import Footer from '../Components/Homecomp/Footer'
import Services from '../Components/Homecomp/Services'
import About from '../Components/Homecomp/About'


const Home = () => {
  return (
    <div className='bg-black overflow-x-hidden'>
      {/* <Navbar />  */}

      <Hero />
      <Pin />
      <Hori />
      <About />
      <Services />
      <KnowUs />
      <Footer />
    </div>
  )
}

export default Home
