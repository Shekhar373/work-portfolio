import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Hori = () => {

  gsap.registerPlugin(ScrollTrigger)

  const workimg = [
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
  ]

  useGSAP(() => {
    gsap.to(".hori-img", {
      transform: "translateX(-350%)",
      scrollTrigger: {
        trigger: ".hori-parent",
        // markers:true,
        start: "top 0",
        end: "top -200%",
        pin: true,
        scrub: 1
      }
    })
  })


  return (
    <>
      <div className='h-[30vh] w-full bg-black'></div>
      <div className=' hori-parent h-screen  lg:w-[330vw] max-sm:w-[500vw]  flex flex-col bg-black'>
        <h1 className='lg:text-7xl max-sm:text-[7vw] font-bold px-10 pt-28'>
          LATEST PROJECT
        </h1>
        <div className='flex '>
          {workimg.map((workimg, index) => {
            return <div
              key={index} className='hori-img ' >
              <img className='h-[65vh]   lg:w-[60vw] sm:w-[90vw] object-cover px-10 pt-12'
                src={workimg} alt="" />
            </div>
          })}
        </div>
      </div>

    </>

  )

}

export default Hori
