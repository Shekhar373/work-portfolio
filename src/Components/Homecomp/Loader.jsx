import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const Loader = () => {

    gsap.registerPlugin(SplitText)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from(".upper-text",{
            clipPath: "inset(0 0 100% 0)",
           ease: "expo.inOut",
            duration:2,
            
        })

        // tl.to(".top-text",{
        //     y:"-25vh",
        //     ease: "expo.inOut",
        //     duration:2
        // },0)
        tl.to(".bottom-text",{
            y:"25vh",
            ease: "expo.inOut",
            duration:2.5
        },0)
        tl.to(".left-text",{
            x:"-65vh",
            ease: "expo.inOut",
            duration:2.5
        },0)
        tl.to(".right-text",{
            x:"65vh",
            ease: "expo.inOut",
            duration:2.5
        },0)
        tl.to(".loader",{
            yPercent:-100,
            ease: "expo.inOut",
            duration:1.5
        }
        )
        tl.to(".loader",{
            display:"none"
        })
    })

    return (
        <div className='loader h-screen fixed w-full bg-[#D14836] text-black z-50'>
            <div className='leading-[9vw]'>
                <h1 className='upper-text text-[4vw] font-medium text-center pt-[20vh] overflow-clip'>BRANDS DON'T WHISPER THEY</h1>
                <h1 className='text-[15vw] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white'>Echo</h1>
                <h1 className='top-text text-[15vw] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '>Echo</h1>
                <h1 className='bottom-text text-[15vw] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '>Echo</h1>
                <h1 className='left-text text-[15vw] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '>Echo</h1>
                <h1 className='right-text text-[15vw] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '>Echo</h1>
            </div>
        </div>
    )
}

export default Loader