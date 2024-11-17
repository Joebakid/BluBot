import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TokenData({ number, title, text }) {
  const tokenRef = useRef(null); // Ref for each TokenData element

  useEffect(() => {
    gsap.fromTo(
      tokenRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tokenRef.current,
          start: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="token-data" ref={tokenRef}>
        <button className="btn-token">{number}</button>
        <div>
          <h2 className="title-token">{title}</h2>
          <p className="gray-text">{text}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

function Tokenomics() {
  return (
    <section className="bg-color" id="tokenomics">
      <div className="container">
        <div>
          <h1 className="Tokenomics-title">Tokenomics</h1>
          <div>
            <TokenData
              number="01"
              title="Circulating Supply"
              text="85% (850 million) - Actively in circulation to support the community, liquidity, and organic ecosystem growth. Available for trading and use within the ecosystem to ensure stability and accessibility."
            />
            <TokenData
              number="02"
              title="Marketing & Community Growth"
              text="15% (150 million) - Dedicated to marketing efforts to increase visibility, build partnerships, and expand the user base. This allocation supports branding, promotional campaigns, and community engagement to foster long-term growth."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
