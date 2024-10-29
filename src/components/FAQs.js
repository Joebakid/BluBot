import React, { useState } from "react";
// import "./FAQs.css";

function FAQs() {
  function CardFaqs({ title, text }) {
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
    <section>
      <hr />
      <div className="container">
        <h1 className="faqs-title">Have Any Question?</h1>
        <p className="text-faqs">
          Download the White Paper and discover Alien Meme Coin’s cosmic
          approach, tokenomics, and meet the intergalactic team guiding the
          mission!
        </p>

        <div className="card-container-faqs">
          <CardFaqs
            title="What is Alien Meme Coin?"
            text="It’s the first extraterrestrial meme coin, blending fun with real crypto utility."
          />
          <CardFaqs
            title="Is this a serious project?"
            text="Yes! We offer real value through NFTs, staking, and governance, with a playful twist."
          />
          <CardFaqs
            title="Where can I buy it?"
            text="On decentralized exchanges like PancakeSwap or Uniswap. Check the How to Buy section for details."
          />
          <CardFaqs
            title="Do aliens exist?"
            text="We can't say for sure, but our community is out of this world!"
          />
          <CardFaqs
            title="How can I join the community?"
            text="Follow us on social media and join our Telegram!"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQs;
