import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";

export default function Header() {
  const titleRef = useRef(null);
  const subHeadingRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);
  const copyBtnRef = useRef(null);
  const cardRefs = useRef([]);
  const [copied, setCopied] = useState(false);

  const contractAddress = "0x52E0D3c27CC9e3607C1Ca7914b9049bE3d5e9C41";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  function Card({ text, index }) {
    return (
      <div
        className="card-faqs"
        ref={(el) => (cardRefs.current[index] = el)}
      >
        <p>{text}</p>
      </div>
    );
  }

 useEffect(() => {
  const tl = gsap.timeline();
  tl.fromTo(
    titleRef.current,
    { autoAlpha: 0, y: "-30%" },
    { autoAlpha: 1, y: "0%", duration: 2, ease: Power3.easeOut }
  )
    .fromTo(
      subHeadingRef.current,
      { autoAlpha: 0, y: "30%" },
      {
        autoAlpha: 1,
        y: "0%",
        duration: 2,
        ease: Power3.easeOut,
      },
      "<25%"
    )
    .fromTo(
      btnRef.current,
      { autoAlpha: 0, y: "30%" },
      {
        autoAlpha: 1,
        y: "0%",
        duration: 1,
        ease: Power3.easeOut,
      },
      "<25%"
    )
    .fromTo(
      copyBtnRef.current,
      { autoAlpha: 0, scale: 0.5 },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1.5,
        ease: Power3.easeOut,
      },
      "<25%"
    )
    .fromTo(
      cardRefs.current,
      { autoAlpha: 0, y: "50%" },
      {
        autoAlpha: 1,
        y: "0%",
        duration: 1,
        ease: Power3.easeOut,
        stagger: 0.2,
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
              Blu Telegram{" "}
              <span className="color-title-header">Trading Bot</span>
            </h1>
            <p className="text-lg color-text-header" ref={subHeadingRef}>
              Welcome to the Telegram Trading Bot page. This bot is designed to
              simplify crypto trading by integrating directly with Telegram.
            </p>
            <a
              className="btn"
              target="_blank"
              href="https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x52e0d3c27cc9e3607c1ca7914b9049be3d5e9c41"
              ref={btnRef}
              rel="noreferrer"
            >
              Use Bot
            </a>
            <div className="flex-card-header">
              <Card
                text="Real-time trading alerts for your favorite tokens."
                index={0}
              />
              <Card
                text="Seamless integration with your trading accounts."
                index={1}
              />
              <Card
                text="Secure and efficient token management."
                index={2}
              />
              <Card
                text="User-friendly and built for the future of DeFi."
                index={3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
