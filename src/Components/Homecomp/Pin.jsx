import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger, SplitText } from 'gsap/all'
import _SplitText from 'gsap/SplitText'
import React from 'react'

const Pin = () => {
    gsap.registerPlugin(ScrollTrigger,SplitText)
    
    useGSAP(()=>{
        let split = SplitText.create("h1",{
            type:"chars",
            musk:"lines",
        })

        gsap.from(split.chars,{
            y:150,
            
            stagger: {
             amount:1,
             from:"center",
             ease: 'power2.inOut',
            },
            scrollTrigger:{
                trigger:".pin-color",
                // markers: true,
                start:"top 50%"
            }
        })
    })
    
    
   
    return (
       
        <div className=' pin-color  h-screen text-white w-full relative  flex bg-black'>
            <div className='pin-color-text text-[10vw] inline-block font-bold lg:leading-32 sm:leading-14 pt-16 p-10 '>
                <h1 className='overflow-clip'>A NETWORK </h1>
                <h1 className='overflow-clip'>DESIGNED</h1>
                <h1 className='overflow-clip'>FOR</h1>
            </div>
            <div className='pin-color-text flex flex-col items-end absolute right-10 bottom-10 lg:leading-32 sm:leading-14 justify-end font-bold text-[10vw]' >
                <h1 className='overflow-clip'>TODAY</h1>
                <h1 className='overflow-clip'>AND</h1>
                <h1 className='overflow-clip'>TOMORROW</h1>
            </div>
        </div>
        
      
    )
}

export default Pin
