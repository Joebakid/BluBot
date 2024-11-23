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
          start: "top 100%",
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
    <section className="bg-color" id="bot">
      <div className="container">
        {" "}
        <h1 className="Tokenomics-title">HOW TO USE</h1>
        <div className="bordercontainer-how-to-use">
          <div>
            <TokenData
              number="01"
              title="Install telegram"
              text="Install telegram and login to your Account"
            />
            <TokenData
              number="02"
              title="Access Bot"
              text="Click on the provided link to access the bot"
            />
            <TokenData
              number="03"
              title="Start Engine"
              text="Start the bot by Clicking The “start” button in the chat"
            />
            <TokenData
              number="04"
              title="Use Commands"
              text="
Use commands to trade, manage tokens, or check market data"
            />
            <TokenData
              number="05"
              title="Stay Updated"
              text="Stay updated with real-time trading alerts and notifications"
            />
          </div>
          For further assistance, contact our support team or visit our
          documentation.
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
