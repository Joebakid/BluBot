import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";

export default function Header() {
  const titleRef = useRef(null);
  const subHeadingRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: "-30%" },
      { opacity: 1, y: "0%", duration: 2, ease: Power3.easeOut }
    )
      .fromTo(
        subHeadingRef.current,
        { opacity: 0, y: "30%" },
        {
          opacity: 1,
          y: "0%",
          duration: 2,
          ease: Power3.easeOut,
        },
        "<25%"
      )
      .fromTo(
        btnRef.current,
        { opacity: 0, y: "30%" },
        {
          opacity: 1,
          y: "0%",
          duration: 1,
          ease: Power3.easeOut,
        },
        "<25%"
      )
      .fromTo(
        imgRef.current,
        { opacity: 0, x: "30%" },
        {
          opacity: 1,
          x: "0%",
          duration: 1.5,
          ease: Power3.easeOut,
        },
        "<25%"
      );
  }, []);

  return (
    <section>
      <div className="container">
        <div className="grid-header" id="header">
          <div className="flex-header">
            <h1 className="title-lg" ref={titleRef}>
              The Token from Outer Space
            </h1>
            <p className="text-lg" ref={subHeadingRef}>
              Meet Blu A degenerate alien in search of new frens!
            </p>
            <a className="btn" href="#btn" ref={btnRef}>
              Join the Galactic Mission
              <svg
                width="35"
                height="35"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24.0768" cy="24.6593" r="24.0197" fill="white" />
                <path
                  d="M21.8249 32.1659C21.6273 32.167 21.4314 32.1292 21.2485 32.0545C21.0656 31.9797 20.8993 31.8697 20.759 31.7305C20.6183 31.591 20.5066 31.4249 20.4304 31.242C20.3542 31.0591 20.3149 30.8628 20.3149 30.6647C20.3149 30.4665 20.3542 30.2703 20.4304 30.0873C20.5066 29.9044 20.6183 29.7383 20.759 29.5988L25.7281 24.6597L20.9542 19.6907C20.6746 19.4094 20.5176 19.0289 20.5176 18.6323C20.5176 18.2357 20.6746 17.8552 20.9542 17.5739C21.0937 17.4332 21.2598 17.3216 21.4427 17.2453C21.6256 17.1691 21.8219 17.1299 22.02 17.1299C22.2182 17.1299 22.4144 17.1691 22.5974 17.2453C22.7803 17.3216 22.9463 17.4332 23.0859 17.5739L28.8806 23.5789C29.1557 23.8595 29.3098 24.2368 29.3098 24.6297C29.3098 25.0227 29.1557 25.4 28.8806 25.6806L22.8757 31.6855C22.741 31.831 22.5787 31.9484 22.3984 32.0308C22.218 32.1133 22.0231 32.1592 21.8249 32.1659V32.1659Z"
                  fill="url(#paint0_linear_4066_8)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4066_8"
                    x1="30.3748"
                    y1="23.9833"
                    x2="21.8001"
                    y2="21.6218"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF4581" />
                    <stop offset="1" stopColor="#4388DD" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>

          <div>
            <img
              className="header-img flip-horizontal width"
              src="img/welcome-img.png"
              alt="welcome img"
              ref={imgRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
