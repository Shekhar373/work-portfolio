import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  gsap.registerPlugin(SplitText)
  gsap.registerPlugin(ScrollTrigger)


  
  useGSAP(()=>{

    const split = SplitText.create(".foot-text",{
    type:"chars"
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
    <div className='h-screen w-full overflow-hidden'>
      <div className='h-[60vh] w-full flex'>
        <div className='h-full w-[55vw] flex flex-col gap-15 '>
          <div className='flex gap-3 text-[3.5vw]   pt-20 px-5 font-medium'>
            <h1>Design</h1>
            <h1>in</h1>
            <h1>once.</h1>
            <h1>Design</h1>
            <h1>it</h1>
            <h1>right</h1>
          </div>
          <div className='pl-5'>
            <Link className=' px-68 py-5 bg-white border-0 hover:bg-[#1A1A1A] hover:text-white text-black font-bold'
            to="/contact" >Let's Talk</Link>
          </div>
          <div className='px-5 font-medium'>
            <h1>New Business :</h1>
            <h1>mail address</h1>
          </div>

        </div>
        <div className='h-full w-[45vw] flex'>
           <div className='h-full w-1/2  flex flex-col gap-5 pl-44 pt-20 '>
              <Link className='font-medium' to="/work" >Work</Link>
              <Link className='font-medium' to="/work" >About</Link>
              <Link className='font-medium' to="/services" >Services</Link>
              <Link className='font-medium' to="/work" >Careers</Link>
              <Link className='font-medium' to="/contact" >Contact</Link>
           </div>
           <div className='h-full w-1/2 pt-20 pl-20  '>
              <a href="#" >Instagram</a><br /><br />
              <a href="#">Linkedin</a><br /><br />
              <a href="#">Twitter</a><br /><br />
              <a href="#">Email</a><br /><br />
           </div>
        </div>
      </div>
      <div className=' foot-text h-[40vh] w-full overflow-hidden text-[20vw]  flex justify-center items-center'>
         NAME
      </div>
    </div>
  )
}

export default Footer
