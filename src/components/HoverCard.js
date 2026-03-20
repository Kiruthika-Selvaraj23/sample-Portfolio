import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DContext } from "../Context";

export default function HoverCard({ image, title, description, id }) {
       

    const containerRef = useRef(null);
    const infoRef = useRef(null);
    const silhouetteRef = useRef(null);

    useEffect(() => {
        gsap.set(infoRef.current, { yPercent: 100 }); // hide info at start

        const tl = gsap.timeline({ paused: true });
        tl.to(infoRef.current, { yPercent: 0 }) // slide up overlay
            .to(silhouetteRef.current, { opacity: 0.3 }, 0); // keep card slightly visible// slide up info only

        const container = containerRef.current;

        const handleMouseEnter = () => tl.timeScale(1).play();
        const handleMouseLeave = () => tl.timeScale(3).reverse();

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);
    return (
        <>
        <div
            ref={containerRef}
            style={{
                position: "relative",
                width: 400,
                height: 500,
                margin: 20,
                borderRadius: 20,
                overflow: "hidden",
                cursor: "pointer",
            }}
        >
            {/* Silhouette / card background */}
            <div
                ref={silhouetteRef}
                className="cover"
                style={{
                    display: "flex",
                    flexDirection: "column", // stack vertically
                    justifyContent: "flex-start", // image on top
                    alignItems: "center",
                    gap: "10px",
                    height: "100%",
                    paddingTop: "20px", // optional spacing from top
                    backgroundColor: "#ACCFE6",
                }}
            >
                <img src={image} alt={title} style={{ width: "90%", height: "200px" }} />
                <h1 className="text-center text-blue-900 font-semibold text-[20px]">
                    {title}
                </h1>
                <p className="text-center text-gray-600 font-semibold text-[15px] p-3">{ description}</p>
            </div>

            {/* Info overlay */}
            <div
                ref={infoRef}
                className="information"
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    background: "transparent", // semi-transparent overlay
                    color: "#fff",
                    padding: 20,
                    textAlign: "center",
                }}
            >
                <button className='bg-blue-900 text-[12px] sm:text-[15px] p-1 sm:p-2 rounded-[4px] sm:rounded-md text-white font-serif'>View Project</button>
            </div>
            </div>
          
        </>
    );
}