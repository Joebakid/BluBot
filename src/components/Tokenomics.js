import React from "react";

function Tokenomics() {
  function TokenData({ number, title, text }) {
    return (
      <>
        <div className="token-data">
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
  return (
    <section className="bg-color">
      <div className="container">
        <div>
          <h1 className="Tokenomics-title">Tokenomics</h1>
          <div>
            <TokenData
              number="01"
              title="Team & Development"
              text="5% (150 million) - Locked for 12 months, then released linearly over 24 months."
            />
            <TokenData
              number="02"
              title="Liquidity Pool"
              text="20% (200 million) - To ensure stable trading on decentralized exchange.."
            />
            <TokenData
              number="03"
              title=" Marketing & Partnerships
"
              text="10% (100 million) - Used to promote the token, secure partnerships, and community growth."
            />
            <TokenData
              number="04"
              title="Staking Rewards
"
              text="25% (250 million) - Incentivizing holders to stake tokens for passive income and network security."
            />
            <TokenData
              number="05"
              title="Community Airdrop"
              text="5% (50 million) - Distributed to early adopters and active community members."
            />
            <TokenData
              number="06"
              title="Ecosystem Development"
              text="15% (150 million) - Reserved for future developments, platform integrations, and ecosystem expansion."
            />
            <TokenData
              number="07"
              title="Advisors"
              text="5% (50 million) - Locked for 6 months, then released over 18 months."
            />
            <TokenData
              number="08"
              title="Reserve Fund"
              text="10% (100 million) - Kept for future unforeseen needs, token burns, or strategic actions."
            />
          </div>

        
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;