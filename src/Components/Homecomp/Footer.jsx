import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  gsap.registerPlugin(SplitText)
  gsap.registerPlugin(ScrollTrigger)


  
  useGSAP(()=>{

    let split = SplitText.create(".foot-text h1",{
    type:"chars",
    
  })

    gsap.from(split.chars,{
      y:200,
      stagger:0.1,
      
      scrollTrigger:{
        trigger:".foot-text",
        start:"top 70%",
        // markers:true
      }
    })
  })
  return (
    <div className='h-screen w-full flex flex-col justify-between overflow-hidden'>
      <div className='lg:h-[60vh] max-sm:h-[30vh] w-full lg:flex'>
        <div className='h-full lg:w-[55vw] max-sm:w-screen flex flex-col gap-15 '>
          <div className='lg:flex gap-3 lg:text-[3.5vw] max-sm:text-5xl pt-20 px-5 font-medium'>
            <h1>Design it first.</h1>
            <h1>Design it right</h1>
          </div>
          <div className='pl-5 '>
            <Link className=' max-sm:px-90 lg:px-64 py-5 bg-white border-0 hover:bg-[#1A1A1A] hover:text-white text-black font-bold'
            to="/contact" >Let's Talk</Link>
          </div>
          <div className='px-5 font-medium'>
            <h1>New Business :</h1>
            <h1>mail address</h1>
          </div>

        </div>
        <div className='lg:h-full max-sm:h-[30vh] max-sm:mt-20 lg:w-[45vw] max-sm:w-screen flex'>
           <div className='h-full w-1/2  flex flex-col gap-5 lg:pl-44 max-sm:pl-5 max-sm:text-xl pt-20 '>
              <Link className='font-medium' to="/work" >Work</Link>
              <Link className='font-medium' to="/work" >About</Link>
              <Link className='font-medium' to="/services" >Services</Link>
              <Link className='font-medium' to="/work" >Careers</Link>
              <Link className='font-medium' to="/contact" >Contact</Link>
           </div>
           <div className='h-full w-1/2 pt-20 pl-20 max-sm:text-xl  '>
              <a href="#" >Instagram</a><br /><br />
              <a href="#">Linkedin</a><br /><br />
              <a href="#">Twitter</a><br /><br />
              <a href="#">Email</a><br /><br />
           </div>
        </div>
      </div>
      <div className=' foot-text h-[40vh]  w-full  overflow-hidden text-[20vw]  flex justify-center items-end'>
         <h1>NAME</h1>
      </div>
    </div>
  )
}

export default Footer
