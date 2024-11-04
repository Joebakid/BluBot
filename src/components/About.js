import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <section ref={sectionRef} id="about">
      <div className="container">
        <div className="grid-about">
          <img
            className="flip-horizontal width grid-2"
            src="img/about-img.png"
            alt=""
          />

          <div className="flex-text-about grid-1">
            <div className="about-heading">
              {" "}
              <h2 className="About-color About-font">About US</h2>
              <h1>Why choose $Blu memecoin ?</h1>
            </div>

            <div className="flex-container-about-icon-text">
              <div className="flex-icon-text">
                <svg
                  className="svg-width-about"
                  viewBox="0 0 111 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.1">
                    <rect
                      x="0.462158"
                      y="0.0495605"
                      width="109.901"
                      height="109.901"
                      rx="54.9504"
                      fill="white"
                    />
                    <rect
                      x="1.90822"
                      y="1.49562"
                      width="107.009"
                      height="107.009"
                      rx="53.5043"
                      stroke="#13316B"
                      stroke-opacity="0.2"
                      stroke-width="2.89213"
                    />
                  </g>
                  <path
                    d="M74.6935 48.0106H70.8373M70.8373 48.0106H68.9093C65.0531 44.1579 59.2688 40.2979 55.4127 44.1544M70.8373 48.0106V63.4352M55.4127 44.1544L49.6276 49.9418C49.4746 50.0949 49.3981 50.1714 49.3365 50.2392C47.9992 51.7105 47.9997 53.9573 49.3378 55.4281C49.3994 55.4957 49.4761 55.5723 49.629 55.7252C49.782 55.8781 49.8586 55.9546 49.9263 56.0161C51.3973 57.3529 53.6435 57.3527 55.114 56.0153C55.1817 55.9538 55.2582 55.8773 55.4111 55.7244L57.34 53.7955M55.4127 44.1544C51.5565 40.2979 45.7723 44.158 41.9161 48.0107H39.988M70.8373 63.4352V69.2194H74.6935M70.8373 63.4352H65.384M39.988 48.0107H36.1318M39.988 48.0107V63.4352M39.988 63.4352H43.8442L44.5806 64.9082C45.571 66.889 48.2997 67.135 49.6284 65.3633C50.6797 66.4147 51.2054 66.9403 51.7725 67.2214C52.8512 67.7558 54.118 67.7558 55.1967 67.2214C55.7638 66.9403 56.2896 66.4147 57.3408 65.3633L58.3048 66.3273C58.4583 66.4808 58.5352 66.5577 58.6031 66.6196C60.074 67.9566 62.3198 67.9566 63.7908 66.6196C63.8586 66.5577 63.9356 66.4808 64.0891 66.3273C64.2425 66.1738 64.3195 66.0971 64.3812 66.029C65.7181 64.5583 65.7181 62.3123 64.3812 60.8415C64.3195 60.7735 64.2425 60.6967 64.0891 60.5431L61.1969 57.6509M39.988 63.4352V69.2194H36.1318"
                    stroke="#D2D1D4"
                    stroke-width="3.85617"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-about ">
                  <h3>Mission Statement</h3>
                  <p className="About-font about-text">
                    Born from the cosmic depths of space, we’re on a mission to
                    bring humor and innovation to the crypto world. Through
                    Blu Meme Coin, we aim to make meme culture a universal
                    currency that everyone can enjoy.
                  </p>
                </div>
              </div>
              <div className="flex-icon-text">
                <svg
                  className="svg-width-about"
                  viewBox="0 0 111 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.1">
                    <rect
                      x="0.462158"
                      y="0.0495605"
                      width="109.901"
                      height="109.901"
                      rx="54.9504"
                      fill="white"
                    />
                    <rect
                      x="1.90822"
                      y="1.49562"
                      width="107.009"
                      height="107.009"
                      rx="53.5043"
                      stroke="#13316B"
                      stroke-opacity="0.2"
                      stroke-width="2.89213"
                    />
                  </g>
                  <path
                    d="M74.7835 42.3059C74.6508 41.775 74.1199 41.5096 73.5891 41.5096H69.6079V37.5284C69.6079 36.9975 69.3424 36.4667 68.8116 36.334C68.2808 36.0686 67.7499 36.2013 67.3518 36.5994L62.0435 41.9078C61.7781 42.1732 61.6454 42.4386 61.6454 42.8367V47.6142L54.081 55.1786C53.5502 55.7094 53.5502 56.5057 54.081 57.0365C54.3464 57.3019 54.7445 57.4346 55.0099 57.4346C55.2754 57.4346 55.6735 57.3019 55.9389 57.0365L63.5033 49.4721H68.2808C68.6789 49.4721 68.9443 49.3394 69.2097 49.074L74.5181 43.7657C74.9162 43.3675 75.0489 42.8367 74.7835 42.3059Z"
                    fill="#D2D1D4"
                  />
                  <path
                    d="M57.7968 58.8943C57.1333 59.6906 56.0716 60.0887 55.0099 60.0887C53.9483 60.0887 52.8866 59.6906 52.2231 58.8943C50.6306 57.3018 50.6306 54.7804 52.2231 53.3206L55.9389 49.6048C55.6735 49.472 55.2753 49.472 55.0099 49.472C51.2941 49.472 48.3745 52.3916 48.3745 56.1075C48.3745 59.8233 51.2941 62.7429 55.0099 62.7429C58.7258 62.7429 61.6453 59.8233 61.6453 56.1075C61.6453 55.842 61.6453 55.4439 61.5126 55.1785L57.7968 58.8943Z"
                    fill="#D2D1D4"
                  />
                  <path
                    d="M71.0678 50.9319C70.4042 51.7281 69.3426 52.1262 68.2809 52.1262H64.5651L63.6361 53.0552C64.0342 53.9842 64.167 55.0458 64.167 56.1075C64.167 61.2831 60.053 65.3971 54.8774 65.3971C49.7017 65.3971 45.5878 61.2831 45.5878 56.1075C45.5878 50.9319 49.7017 46.8179 54.8774 46.8179C55.939 46.8179 57.0007 47.0833 57.9297 47.3487L58.9913 46.5525V42.8367C58.9913 41.775 59.3895 40.7133 60.1857 40.0498L61.5128 38.7227C59.3895 37.9264 57.2661 37.5283 55.0101 37.5283C44.7915 37.5283 36.4309 45.8889 36.4309 56.1075C36.4309 66.326 44.7915 74.6867 55.0101 74.6867C65.2286 74.6867 73.5892 66.326 73.5892 56.1075C73.5892 53.8514 73.1911 51.7281 72.3949 49.6048L71.0678 50.9319Z"
                    fill="#D2D1D4"
                  />
                </svg>

                <div className="text-about ">
                  <h3>Transformative technologies</h3>
                  <p className="About-font about-text">
                    As the first extraterrestrial meme coin, we unite Earthlings
                    and Blu alike in a shared adventure of humor, community,
                    and wealth. Join us on this cosmic journey and become part
                    of the ever-expanding meme-conomy
                  </p>
                </div>
              </div>
              <div className="flex-icon-text">
                <svg
                  className="svg-width-about"
                  viewBox="0 0 111 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.1">
                    <rect
                      x="0.462158"
                      y="0.0495605"
                      width="109.901"
                      height="109.901"
                      rx="54.9504"
                      fill="white"
                    />
                    <rect
                      x="1.90822"
                      y="1.49562"
                      width="107.009"
                      height="107.009"
                      rx="53.5043"
                      stroke="#13316B"
                      stroke-opacity="0.2"
                      stroke-width="2.89213"
                    />
                  </g>
                  <path
                    d="M51.5564 41.5036L55.4126 37.6475M47.7002 62.7126L63.1249 47.2879M55.4126 72.353L59.2687 68.4968M64.089 68.4968C66.7511 68.4968 68.9092 66.3387 68.9092 63.6766C68.9092 61.0145 66.7511 58.8564 64.089 58.8564C61.4268 58.8564 59.2687 61.0145 59.2687 63.6766C59.2687 66.3387 61.4268 68.4968 64.089 68.4968ZM46.7362 51.1441C49.3983 51.1441 51.5564 48.986 51.5564 46.3238C51.5564 43.6617 49.3983 41.5036 46.7362 41.5036C44.0741 41.5036 41.916 43.6617 41.916 46.3238C41.916 48.986 44.0741 51.1441 46.7362 51.1441ZM42.88 72.353C45.5422 72.353 47.7002 70.1949 47.7002 67.5328C47.7002 64.8706 45.5422 62.7126 42.88 62.7126C40.2179 62.7126 38.0598 64.8706 38.0598 67.5328C38.0598 70.1949 40.2179 72.353 42.88 72.353ZM67.9451 47.2879C70.6072 47.2879 72.7653 45.1298 72.7653 42.4677C72.7653 39.8055 70.6072 37.6475 67.9451 37.6475C65.283 37.6475 63.1249 39.8055 63.1249 42.4677C63.1249 45.1298 65.283 47.2879 67.9451 47.2879Z"
                    stroke="#D2D1D4"
                    stroke-width="3.85617"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-about ">
                  <h3>Transformative technologies</h3>
                  <p className="About-font about-text">
                    As the first extraterrestrial meme coin, we unite Earthlings
                    and Blu alike in a shared adventure of humor, community,
                    and wealth. Join us on this cosmic journey and become part
                    of the ever-expanding meme-conomy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
