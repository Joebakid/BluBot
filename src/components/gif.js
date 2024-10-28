import React from "react";

function Gif() {
  return (
    <section className="bg-color">
      <div className="container">
        <div className="video-container">
          <video autoPlay muted loop playsInline>
            <source
              src={`${process.env.PUBLIC_URL}/img/video.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Gif;
