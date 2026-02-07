import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'

const Servicehome = () => {

  gsap.registerPlugin(ScrollTrigger)

  const servicearr = [
    {
      number: "01",
      name: "BRAND"
    },
    {
      number: "02",
      name: "STRATERGY"
    },
    {
      number: "03",
      name: "EXPERIENCES"
    },
    {
      number: "04",
      name: "SOCIAL"
    },
    {
      number: "05",
      name: "PRODUCTION"
    }

  ]

  useEffect(() => {
    gsap.utils.toArray(".service-line").forEach(serviceline => {
      gsap.from(serviceline, {
        rotateX: 90,
        scrollTrigger: {
          trigger: serviceline,
          // markers: true,
          start: "top 70%",
          end: "top 50%",
          scrub: 1

        }
      })
    })
  })

  return (
    <div className=' min-h-[90vh] w-full '>
      {servicearr.map((servicearr, index) => {
        return <div key={index} className=' service-line lg:h-[30vh] sm:h-[20vh] p-10 w-screen bg-black border-b overflow-hidden hover:bg-[#1A1A1A] transition-all items-center text-white lg:flex gap-5'>
          <h1 className=' text-2xl pb-10 '>{servicearr.number}</h1>
          <h1 className='lg:text-7xl max-sm:text-5xl  font-extrabold'>{servicearr.name}</h1>
        </div>
      })}
      <div className='lg:h-[40vh] max-sm:h-[20vh] w-full flex justify-center'>
        <button className='text-xl bg-white text-black font-bold h-fit mt-24 py-3 px-5 rounded-4xl border'>EXPLORE SERVICES</button>
      </div>
    </div>
  )
}

export default Servicehome
