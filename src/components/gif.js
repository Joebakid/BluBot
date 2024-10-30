import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Gif() {
  const videoRef = useRef(null); // Create a ref to target the video container

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="bg-color">
      <div className="container">
        <div ref={videoRef} className="video-container">
          {" "}
          {/* Attach ref here */}
          <video autoPlay muted loop playsInline>
            <source
              src={`${process.env.PUBLIC_URL}/img/video.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Gif;
