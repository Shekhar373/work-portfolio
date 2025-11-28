import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

const Pin = () => {
    gsap.registerPlugin(ScrollTrigger,SplitText)
    
    
    
    //   useGSAP(()=>{

    //     const splitt = SplitText.create("pin-color-text",{
    //     type:"chars"
    // })

    //      gsap.to(splitt.chars,{
    //        color: "white",
        
    //        scrollTrigger:{
    //         trigger:".pin-color",
    //         markers: true,
    //         start: "top 0",
    //         pin: true,
    //         scrub:1
    //        }
    //      })
    //    })
    return (
       
        <div className=' pin-color  h-screen text-white w-full relative  flex bg-black'>
            <div className='pin-color-text text-[10vw] inline-block font-bold lg:leading-32 sm:leading-14 pt-16 p-10 '>
                <h1>A NETWORK </h1>
                <h1>DESIGNED</h1>
                <h1>FOR</h1>
            </div>
            <div className='pin-color-text flex flex-col items-end absolute right-10 bottom-10 lg:leading-32 sm:leading-14 justify-end font-bold text-[10vw]' >
                <h1>TODAY</h1>
                <h1>AND</h1>
                <h1>TOMORROW</h1>
            </div>
        </div>
        
      
    )
}

export default Pin
