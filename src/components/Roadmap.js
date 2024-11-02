import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadmapPhase = ({ title, phase, description, bgColor, index }) => {
  const phaseRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      phaseRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 2, // Each card appears 2 seconds apart
        ease: "power3.out",
        scrollTrigger: {
          trigger: phaseRef.current,
          start: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={phaseRef}
      className="roadmap-phase"
      style={{ backgroundColor: bgColor }}
    >
      <h2>{title}</h2>
      <p>
        <strong>{phase}</strong> {description}
      </p>
    </div>
  );
};

const Roadmap = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "Bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="roadmap-container section-spacing">
      <h1 ref={titleRef} className="roadmap-title">
        Roadmap
      </h1>
      <div className="roadmap-content" id="roadmap">
        <div className="roadmap-phase-container">
          <RoadmapPhase
            title="Launchpad To The Stars"
            phase="Phase 1:"
            description="Launch Our Coin, Create The Website, And Grow Our Social Media Presence"
            bgColor="#2e2e3a"
            index={0}
          />
          <div className="dotted-line vertical"></div>
          <RoadmapPhase
            title="Galactic Conquest"
            phase="Phase 2:"
            description="Establish Partnerships And Secure Listings On Major Exchanges."
            bgColor="#48b1c4"
            index={0.1}
          />
          <div className="dotted-line vertical"></div>
          <RoadmapPhase
            title="Colonizing The Moon"
            phase="Phase 3:"
            description="Release Exclusive Alien NFTs And Unlock Community Rewards"
            bgColor="#2e2e3a"
            index={0.2}
          />
          <div className="dotted-line vertical"></div>
          <RoadmapPhase
            title="Universal Domination"
            phase="Phase 4:"
            description="Launch Ultimate Utilities, Introduce Staking, And Host Large-Scale Events."
            bgColor="#48b1c4"
            index={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
