import React from "react";
 

const RoadmapPhase = ({ title, phase, description, bgColor }) => (
  <div className="roadmap-phase" style={{ backgroundColor: bgColor }}>
    <h2>{title}</h2>
    <p>
      <strong>{phase}</strong> {description}
    </p>
  </div>
);

const Roadmap = () => {
  return (
    <section className="roadmap-container section-spacing">
      <h1 className="roadmap-title">Roadmap</h1>
      <div className="roadmap-content">
        <div className="roadmap-phase-container">
          <RoadmapPhase
            title="Launchpad To The Stars"
            phase="Phase 1:"
            description="Launch Our Coin, Create The Website, And Grow Our Social Media Presence"
            bgColor="#2e2e3a"
          />
          <div className="dotted-line vertical"></div>
          <RoadmapPhase
            title="Galactic Conquest"
            phase="Phase 2:"
            description="Establish Partnerships And Secure Listings On Major Exchanges."
            bgColor="#48b1c4"
          />
          <div className="dotted-line vertical"></div>
          <RoadmapPhase
            title="Colonizing The Moon"
            phase="Phase 3:"
            description="Release Exclusive Alien NFTs And Unlock Community Rewards"
            bgColor="#2e2e3a"
          />
          <div className="dotted-line vertical"></div>
          <RoadmapPhase
            title="Universal Domination"
            phase="Phase 4:"
            description="Launch Ultimate Utilities, Introduce Staking, And Host Large-Scale Events."
            bgColor="#48b1c4"
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
