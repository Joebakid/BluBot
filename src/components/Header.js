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
      <div className="card-faqs" ref={(el) => (cardRefs.current[index] = el)}>
        <p>{text}</p>
      </div>
    );
  }

  // function btn(e) {
  //   e.preventDefault();

  //   // Check if an alert already exists to prevent duplication
  //   if (document.querySelector(".custom-alert")) return;

  //   // Create a div for the custom alert
  //   const alertDiv = document.createElement("div");
  //   alertDiv.className = "custom-alert";
  //   alertDiv.innerHTML = `
  //   <p>
  //     <strong>Trading Bot Development in Progress:</strong> Stay tuned for updates as we bring you a seamless and efficient DeFi experience!
  //   </p>
  // `;

  //   // Append the alert to the body
  //   document.body.appendChild(alertDiv);

  //   // Remove the alert after 4 seconds
  //   setTimeout(() => {
  //     const existingAlert = document.querySelector(".custom-alert");
  //     if (existingAlert) {
  //       existingAlert.remove();
  //     }
  //   }, 4000);

  //   // Add styles dynamically for the alert
  //   const style = document.createElement("style");
  //   style.type = "text/css";
  //   style.innerHTML = `
  //   .custom-alert {
  //     position: fixed;
  //     top: 20px;

  //     right: 20px; /* Position the alert on the right side */
  //     width: 300px; /* Set a fixed width */
  //     background-color: #0d6efd;
  //     color: #ffffff;
  //     padding: 15px;
  //     border-radius: 8px;
  //     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  //     animation: fadeInOut 4s ease-in-out;
  //     z-index: 1000;
  //     text-align: center;
  //   }

  //   .custom-alert p {
  //     margin: 0;
  //     font-size: 0.9rem; /* Adjust text size */
  //   }

  //   @keyframes fadeInOut {
  //     0% {
  //       opacity: 0;
  //       transform: translateX(20px);
  //     }
  //     10%,
  //     90% {
  //       opacity: 1;
  //       transform: translateX(0);
  //     }
  //     100% {
  //       opacity: 0;
  //       transform: translateX(20px);
  //     }
  //   }
  // `;
  //   document.head.appendChild(style);
  // }

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
              href="https://t.me/alienblubot"
              ref={btnRef}
              rel="noreferrer"
              // onClick={btn}
            >
              Launch App
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
              <Card text="Secure and efficient token management." index={2} />
              <Card
                text="User-friendly and built for the future of DeFi."
                index={3}
              />
            </div>
          </div>
        </div>

        {/* Basic Guide Section */}
        <div id="bot" className="guide-section">
          <h2>How to Use BluBot</h2>
          <ol>
            <li>Install Telegram and log in to your account.</li>
            <li>click on the provided link to access the bot.</li>
            <li>Start the bot by clicking the "Start" button in the chat.</li>
            <li>Follow the on-screen instructions to connect your wallet.</li>
            <li>Use commands to trade, manage tokens, or check market data.</li>
            <li>
              Stay updated with real-time trading alerts and notifications.
            </li>
          </ol>
          <p>
            For further assistance, contact our support team or visit our
            documentation.
          </p>
        </div>

        <div className="text-center">
          <p>Copyright © 2024 Blu. All rights reserved.</p>
          <a href="mailto:info@basedblualien.com">info@basedblualien.com</a>
        </div>
      </div>
    </section>
  );
}
