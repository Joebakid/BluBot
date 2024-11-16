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
      <div className="container header">
        <div className="grid-header" id="header">
          <div className="flex-header">
            <h1 className="title-lg" ref={titleRef}>
              The Token from Outer Space
            </h1>
            <p className="text-lg" ref={subHeadingRef}>
              Meet Blu a degenerate alien in search of new frens!
            </p>
            <a
              className="btn"
              target="_blank"
              href="https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x52e0d3c27cc9e3607c1ca7914b9049be3d5e9c41"
              ref={btnRef}
              rel="noreferrer"
            >
              Join the Galactic Mission
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
