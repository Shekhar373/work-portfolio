import React from 'react'
import { useRef } from "react";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const AnotherZoom = () => {

  const imgarr = [
        "https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/679a55c780dfee06bc96dd71_Impossible%20to%20ignore.webp",

        "https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/679a55c780dfee06bc96dd71_Impossible%20to%20ignore.webp",
        
        "https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/679a55c780dfee06bc96dd71_Impossible%20to%20ignore.webp",

        "https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/679a55c780dfee06bc96dd71_Impossible%20to%20ignore.webp",
        
        
    ]

    const containerRef = useRef(null);
    gsap.registerPlugin(_ScrollTrigger)
    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=200%",
                        scrub: true,
                        pin: true,
                    },
                });

                // lift center item out of the grid
                tl.set(".center-item", {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    xPercent: -50,
                    yPercent: -50,
                    zIndex: 20,
                });

                // zoom center image to fullscreen
                tl.to(
                    ".center-item",
                    {
                        width: "100vw",
                        height: "100vh",
                        ease: "none",
                    },
                    0
                );

                // subtle inner image scale
                tl.to(
                    ".center-item img",
                    {
                        scale: 1.15,
                        ease: "none",
                    },
                    0
                );

                // push other images away
                tl.to(
                    ".grid-item:not(.center-item)",
                    {
                        x: (i) => (i % 2 === 0 ? -300 : 300),
                        y: (i) => (i < 2 ? -200 : 200),
                        scale: 0.85,
                        opacity: 0,
                        ease: "none",
                    },
                    0
                );
            });

            return () => mm.revert();
        },
        { scope: containerRef }
    );
    return (
        <section ref={containerRef} className="relative h-[110vh] mt-[70vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="relative grid grid-cols-3 gap-8 w-full max-w-6xl px-8">
                    {imgarr.map(
                        (imgarr, index) => (
                            <div
                                key={index}
                                className={`grid-item ${index === 2 ? "center-item" : ""
                                    } aspect-3/4 overflow-hidden`}
                            >  
                                <img
                                    src={imgarr}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default AnotherZoom