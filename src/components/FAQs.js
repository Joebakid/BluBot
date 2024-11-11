import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

function FAQs() {
  const titleThirdSection = useRef(null);

  useEffect(() => {
    // Timeline for the title animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: titleThirdSection.current,
          start: "bottom 60%",
          scrub: 4,
        },
      })
      .fromTo(
        titleThirdSection.current,
        { y: "5%", ease: Power3.easeOut },
        { y: "0%", duration: 1 }
      );
  }, []);

  function CardFaqs({ title, text, cardRef }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="card-faqs">
        <div className="faq-header" onClick={toggleOpen}>
          <h1 className="title-card-faqs">{title}</h1>
          <span className={`faq-toggle ${isOpen ? "open" : ""}`}>
            {isOpen ? "-" : "+"}
          </span>
        </div>
        <p className={`text-card-faqs ${isOpen ? "show" : ""}`}>{text}</p>
      </div>
    );
  }

  return (
    <section className="section-spacing">
      {/* <hr /> */}
      <div className="container" ref={titleThirdSection} id="faqs">
        <div>
          <h1 className="faqs-title">Have Any Question?</h1>
          <p className="text-faqs">
            Download the White Paper and discover Blu Meme Coin’s cosmic
            approach, tokenomics, and meet the intergalactic team guiding the
            mission!
          </p>
        </div>

        <div className="card-container-faqs">
          <CardFaqs
            title="What is Blu Meme Coin?"
            text="It’s the first extraterrestrial memecoin, blending fun with real crypto utility."
          />
          <CardFaqs
            title="Is this a serious project?"
            text="Yes! We offer real value through NFTs, staking, and governance, with a playful twist."
          />
          <CardFaqs
            title="Where can I buy it?"
            text="On decentralized exchanges like  Uniswap. Check the How to Buy section for details."
          />
          <CardFaqs
            title="Does Blu actually exist?"
            text="We can't say for sure, but our community is out of this world!"
          />
          <CardFaqs
            title="How can I join the community?"
            text="Follow us on social media and join our Telegram!"
          />
        </div>

        <p className="text-center">
          Copyright © 2024 Blu. All rights reserved.
        </p>
        <div className="socials-faqs">
          
            <a
              className="navbar-hover-effect"
              href="https://t.me/BaseBlueAlienPortal"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8 2.2c-.5-.4-1.1-.4-1.6 0L2.5 10.7c-.6.2-.9.7-.9 1.3s.4 1.1.9 1.4l3.5 1.4 1.4 4c.2.7.9 1.2 1.7 1.2h.1c.5 0 1-.2 1.4-.5l2.9-2.2 3.7 3.7c.2.2.5.3.7.3.1 0 .2 0 .3-.1.3-.1.5-.4.6-.8l4.8-17.6c.1-.6 0-1.2-.4-1.6zm-9.8 10.8l-2.4 2.4-.8-2.2 7.2-5.9-4 5.7zm1 6.5l-2.5-2.5 1.7-1.7 2.5 2.5-1.7 1.7z"
                  fill="white"
                />
              </svg>
            </a>
         
            <a
              className="navbar-hover-effect"
              href="https://x.com/BasedBluAlien"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20 L80 80"
                  stroke="white"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M80 20 L20 80"
                  stroke="white"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          
        </div>
      </div>
    </section>
  );
}

export default FAQs;
