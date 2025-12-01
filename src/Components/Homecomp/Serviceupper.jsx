import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Serviceupper = () => {

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from(".service-text h1",{
      y: 100,
      scrollTrigger:{
        trigger:".service-text",
        // markers:true,
        start:"top 40%",
        end:"top 40%",
        scrub:1
      }
    })
  })
  return (
    <div className=' service-text h-[60vh] w-full p-10 text-white lg:leading-28 2xl:leading-40 mt-20'>
      <div className='text-[8vw] overflow-hidden font-medium'>
        <h1>SERVICES</h1>
      </div>
      <div className='text-[8vw] mb-20 overflow-hidden font-medium'>
        <h1>WE PROVIDE</h1>
      </div>
    </div>
  )
}

export default Serviceupper
