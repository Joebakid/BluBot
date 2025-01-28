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

function Documentation() {
  return (
    <section className="bg-color" id="bot">
      <div className="container">
        <h1 className="Tokenomics-title">HOW TO USE</h1>
        <div className="bordercontainer-how-to-use">
          <div>
            <TokenData number="01" title="/start" text="Start the bot" />
            <TokenData number="02" title="/help" text="Show help" />
            <TokenData number="03" title="/menu" text="Show main menu" />
            <TokenData number="04" title="/price" text="Check real-time token price" />
            <TokenData number="05" title="/swap" text="Swap tokens" />
            <TokenData number="06" title="/buy" text="Buy tokens" />
            <TokenData number="07" title="/sell" text="Sell tokens" />
            <TokenData number="08" title="/balance" text="Check wallet balance" />
            <TokenData number="09" title="/transfer" text="Transfer tokens" />
            <TokenData number="10" title="/gas" text="Get current gas prices" />
            <TokenData number="11" title="/portfolio" text="View portfolio holdings" />
            <TokenData number="12" title="/analytics" text="Advanced portfolio analytics" />
            <TokenData number="13" title="/risks" text="Track profit/loss" />
          </div>
          <p>For further assistance, contact our support team or visit our documentation.</p>
        </div>
      </div>
    </section>
  );
}

export default Documentation;
