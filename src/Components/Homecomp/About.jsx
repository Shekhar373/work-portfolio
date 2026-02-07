import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const About = () => {
    const containerRef = useRef(null)
    const zoom = useRef(null)
    const left = useRef(null)
    const right = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {

        const mm = gsap.matchMedia()

        mm.add("(min-width: 1024px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "top -120%",
                    // markers:true,
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(left.current,{
                x:"-50vw",
                ease: "power2.inOut",
            },0)
            tl.to(right.current,{
                x:"50vw",
                ease: "power2.inOut",
            },0)
            tl.to(zoom.current,{
                scaleX:4,
                scaleY:2.9 ,
                ease: "sine.inOut",
            },0)



        })
    })
    return (
        <div className='h-[230vh] w-full mt-[20vh]'>
            <div ref={containerRef} className='h-screen w-full flex gap-10 justify-center items-center'>
                <img ref={left} className='h-[35vh] w-[15vw] object-cover' src="https://images.unsplash.com/photo-1669802639451-9ff74f10c9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JheSUyMG1pbmltYWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img ref={zoom} className='h-[35vh] w-[25vw] object-cover' src="https://images.unsplash.com/photo-1596536220655-21429cf12ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGFydHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img ref={right} className='h-[35vh] w-[15vw] object-cover' src="https://images.unsplash.com/photo-1669802639451-9ff74f10c9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JheSUyMG1pbmltYWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
        </div>
    )
}

export default About