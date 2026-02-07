import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const ZoomParallex = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.to(".zoom img", {
            scaleX: 4,
            scaleY: 3.1,
            scrollTrigger: {
                trigger: ".zoom-container",
                start: "top 0",
                end: "top -200%",
                pin: true,
                scrub: true,
                markers: true
            }
        })
    })
    return (
        <div className='h-[300vh] w-full bg-white relative'>
            <div className=' zoom-container relative flex justify-center items-center h-screen w-full bg-amber-50 overflow-hidden'>
                <div className='h-[85vh] w-[75vw] bg-amber-300 grid grid-cols-6 grid-rows-6 gap-5 '>
                    <div className=' row-span-4 col-span-2 relative'>
                        <img className='object-cover h-full w-full' src="https://onscroll-clipped-sections.vercel.app/i1.jpg" alt="" />
                    </div>
                    <div className=' col-span-4 row-span-2 relative'>
                        <img className='object-cover' src="https://onscroll-clipped-sections.vercel.app/i7.jpg" alt="" />
                    </div>
                    <div className='zoom col-span-2 row-span-2 z-10  relative'>
                        <img className='object-cover' src="https://onscroll-clipped-sections.vercel.app/i5.jpg" alt="" />
                    </div>
                    <div className=' row-span-4 col-span-2 relative'>
                        <img className='object-cover ' src="https://onscroll-clipped-sections.vercel.app/i2.jpg" alt="" />
                    </div>
                    <div className=' col-span-2 row-span-2 relative'>
                        <img className='object-cover ' src="https://onscroll-clipped-sections.vercel.app/i8.jpg" alt="" />
                    </div>
                    <div className='  col-span-2 row-span-2 relative'>
                        <img className='object-cover' src="https://onscroll-clipped-sections.vercel.app/i4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZoomParallex