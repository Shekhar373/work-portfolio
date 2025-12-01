import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Upperfooter = () => {
  const collab = useRef(null)
  gsap.registerPlugin(ScrollTrigger,SplitText)

  useGSAP(()=>{
    let split = SplitText.create(".collab h1",{
      type:"chars",
      mask:true,
      
    })

    gsap.from(split.chars,{
      y:150,
      stagger:{
        amount:1,
        from:"random"
      },
      scrollTrigger:{
        triggr:".collab",
        // markers:true,
        start:"top 30%",
        // end:"top 50%",
        // scrub:1
      }
    })

    gsap.from(".collab-btn",{
      y:120,
      opacity:0,
     
      scrollTrigger:{
        trigger:".collab-btn ",
        // markers:true,
        start:"top 100%",
      }
    })
  })
  return (
    <div className='h-[130vh] w-full  flex flex-col justify-center items-center '>
      <div ref={collab} className=' collab h-screen w-full flex flex-col justify-center items-center'>
        <div className='border-0 overflow-hidden'>
          <h1 className='uppercase text-xl tracking-tighter '>Let's start the conversation</h1>
        </div>
        <div className='text-[8vw] font-medium border-0 overflow-hidden'>
          <h1>GREAT DESIGN</h1>
        </div>
        <div className='text-xl tracking-[1.9vw] border-0 overflow-hidden'>
          <h1>STARTS WITH</h1>
        </div>
        <div className='text-[8vw] font-medium border-0 overflow-hidden'>
          <h1>GREAT COLLABORATION</h1>
        </div>
        <div className='  font-sans flex gap-10 pt-20 border-0 overflow-hidden ' >
          <Link to="/contact" className='collab-btn border-0 px-7 py-2 rounded-4xl bg-white hover:bg-[#1A1A1A] hover:text-white text-black font-bold' > GET IN CONTACT</Link>
          <Link to="/work" className='collab-btn border-0 px-7 py-2 rounded-4xl bg-white hover:bg-[#1A1A1A] hover:text-white text-black font-bold' >SEE PROJECTS</Link>
        </div>
      </div>
    </div>
  )
}

export default Upperfooter
