import React from "react";

function Roadmap() {
  return (
    <section>
      <div className="container ">
        <div className="section-spacing">
          <h1 className="roadmap-title">Roadmap</h1>

          <div className="flex-roadmap-card">
            <div className="roadmap-card">
              <h1 className="card-title-roadmap">Launchpad To The Stars</h1>
              <p className="card-text-roadmap">
                Phase 1: Launch Our Coin, Create The Website, And Grow Our
                Social Media Presence
              </p>
            </div>
            <div className="wrapper-svg">
              <svg
                className="connector"
                width="200"
                height="200"
                viewBox="0 0 326 278"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.3655" cy="11.3655" r="11.3655" fill="#D9D9D9" />
                <circle cx="314.446" cy="265.953" r="11.3655" fill="#D9D9D9" />
                <path
                  d="M11.3655 11.3654H315.204V266.711"
                  stroke="#D9D9D9"
                  stroke-width="6.06161"
                  stroke-dasharray="12.12 12.12"
                />
              </svg>
            </div>
          </div>

          <div className="flex-roadmap-card-two">
            <div className="wrapper-svg">
              <svg
                className="connector-two"
                width="200"
                height="200"
                viewBox="0 0 327 278"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11.3655"
                  cy="11.3655"
                  r="11.3655"
                  transform="matrix(-1 0 0 1 326.665 0.421875)"
                  fill="#D9D9D9"
                />
                <circle
                  cx="11.3655"
                  cy="11.3655"
                  r="11.3655"
                  transform="matrix(-1 0 0 1 23.584 255.009)"
                  fill="#D9D9D9"
                />
                <path
                  d="M315.299 11.7873H11.4608V267.133"
                  stroke="#D9D9D9"
                  stroke-width="6.06161"
                  stroke-dasharray="12.12 12.12"
                />
              </svg>
            </div>

            <div className="roadmap-card">
              <h1 className="card-title-roadmap">Launchpad To The Stars</h1>
              <p className="card-text-roadmap">
                Phase 1: Launch Our Coin, Create The Website, And Grow Our
                Social Media Presence
              </p>
            </div>
            <div className="wrapper-svg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;



 

