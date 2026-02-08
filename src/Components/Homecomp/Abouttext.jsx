import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const Abouttext = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText)
    const aboutimg = useRef(null)

    useGSAP(() => {
        const split = SplitText.create(".about-text h1", {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: ((split) => {
                return gsap.from(split.lines, {

                    opacity: 0,
                    yPercent: 120,
                    ease: "power",
                    stagger: {
                        amount: 0.1
                    },
                    scrollTrigger: {
                        trigger: ".about-text-parent",
                        // markers: true,
                        start: "top 20%",
                        toggleActions: "play none none reverse"
                    }
                })
            }),
            onComplete: () => split.revert()
        })
        gsap.from(aboutimg.current,{
            clipPath: "inset(0 0 100% 0)",
            duration: 0.6,
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: ".about-text-parent",
                // markers: true,
                start: "top 20%",
                toggleActions: "play none none reverse"
            }
        })
    })
    return (
        <div className='about-text-parent h-screen w-full  flex'>
            <div className='h-full w-[25vw]  pt-10 pl-10 flex flex-col gap-30'>
                <img ref={aboutimg} className='h-[30vh] w-[20vw] object-cover' src="https://images.unsplash.com/photo-1770106678115-ec9aa241cdf6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='about-text'>
                    <h1 className=' text-2xl'>Echo is a digital <br /> product conpany</h1>
                </div>            </div>
            <div className='about-text h-full w-[75vw] flex flex-col gap-10 pt-10 pl-5'>
                <h1>About Us</h1>
                <h1 className='text-[5vw] leading-[5vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error sapiente incidunt placeat natus ad vitae impedit magnam autem cumque.</h1>
                <h1>Lorem ipsum dolor, sit amet consectetur </h1>
                <h1 className='w-1/2 leading-[1.5vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam corporis maiores tempore consectetur quo dignissimos quidem natus quisquam odit explicabo quas facilis odio, laboriosam quia adipisci numquam cumque ipsam commodi.</h1>
            </div>
        </div>
    )
}

export default Abouttext