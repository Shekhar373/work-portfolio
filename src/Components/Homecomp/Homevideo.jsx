
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Homevideo = () => {
    gsap.registerPlugin(ScrollTrigger)
    const videohomeref = useRef(null)

    useGSAP(() => {
        gsap.to(videohomeref.current, {
            scale:0.2,
            x:450,
            y:670,
           
            scrollTrigger: {
                trigger: videohomeref.current,
                // markers:true,
                start: "top 0%",
                // end: "top 0%",
                scrub:2
            }
        })
    })

    return (
        <div  className='h-[130vh] w-full relative flex justify-center '>
            <video ref={videohomeref} autoPlay loop muted className='h-screen z-40 w-full absolute object-cover'
                src="https://wethinkelastic.com/assets/videos/video-start.mp4#t=0.1"></video>
        </div>
    )
}

export default Homevideo
