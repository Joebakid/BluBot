import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Card({ svg, title, text }) {
  const cardRef = useRef(null); // Create a ref for each Card component

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "bottom 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="HowToBuy-Card">
      <div>{svg}</div>
      <div>
        <h1>{title}</h1>
        <p className="gray-text"> {text}</p>
      </div>
    </div>
  );
}

function HowToBuy() {
  const buttonRef = useRef(null); // Ref for the "Buy Now!" button

  useEffect(() => {
    // Hover effect for the button
    const handleMouseEnter = () => {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power3.out",
      });
    };
    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 1,
        ease: "power3.out",
      });
    };

    const btn = buttonRef.current;
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <section className="bg-color">
      <div className="container bg-color" id="HowToBuy">
        <div className="section-spacing">
          <div className="flex-container-HowToBuy">
            <div className="flex-1-HowToBuy">
              <h1 className="HowToBuy-title">HOW TO BUY</h1>
              <Card
                svg={
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 114 114"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 0.836458C8.79698 0.836458 1.33646 8.29698 1.33646 17.5V96.1274C1.33646 105.33 8.79698 112.791 18 112.791H96.6274C105.83 112.791 113.291 105.33 113.291 96.1274V17.5C113.291 8.29698 105.83 0.836458 96.6274 0.836458H18Z"
                      fill="#66B2CA"
                      stroke="black"
                      stroke-width="1.32708"
                    />
                    <g clip-path="url(#clip0_4033_164)">
                      <path
                        d="M72.459 47.5926V45.4854C72.459 42.5351 72.459 41.0599 71.8848 39.933C71.3799 38.9418 70.5739 38.1359 69.5827 37.6308C68.4559 37.0566 66.9806 37.0566 64.0303 37.0566H41.378C38.4276 37.0566 36.9525 37.0566 35.8256 37.6308C34.8343 38.1359 34.0284 38.9418 33.5234 39.933C32.9492 41.0599 32.9492 42.5351 32.9492 45.4854V47.5926M32.9492 47.5926V70.7717C32.9492 73.722 32.9492 75.1973 33.5234 76.3241C34.0284 77.3153 34.8343 78.1213 35.8256 78.6262C36.9525 79.2004 38.4276 79.2004 41.378 79.2004H71.9322C74.8826 79.2004 76.3579 79.2004 77.4847 78.6262C78.4758 78.1213 79.2818 77.3153 79.7868 76.3241C80.361 75.1973 80.361 73.722 80.361 70.7717V56.0213C80.361 53.071 80.361 51.5958 79.7868 50.469C79.2818 49.4777 78.4758 48.6718 77.4847 48.1668C76.3579 47.5926 74.8826 47.5926 71.9322 47.5926H32.9492ZM80.361 58.1285H75.093C72.1835 58.1285 69.825 60.487 69.825 63.3965C69.825 66.306 72.1835 68.6645 75.093 68.6645H80.361"
                        stroke="white"
                        stroke-width="5.26797"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4033_164">
                        <rect
                          width="63.2157"
                          height="63.2157"
                          fill="white"
                          transform="translate(25.7058 25.2061)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title="Prepare Your Spaceship"
                text="Install a crypto wallet (like MetaMask or Trust Wallet) to safely store your Blu token."
              />
              <Card
                svg={
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 115 115"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 1.33646C8.79698 1.33646 1.33646 8.79698 1.33646 18V97C1.33646 106.203 8.79698 113.664 18 113.664H97C106.203 113.664 113.664 106.203 113.664 97V18C113.664 8.79698 106.203 1.33646 97 1.33646H18Z"
                      fill="#66B2CA"
                      stroke="black"
                      stroke-width="1.32708"
                    />
                    <g clip-path="url(#clip0_4033_181)">
                      <path
                        d="M46.2678 53.5363H77.9821L67.4107 42.9648"
                        stroke="white"
                        stroke-width="5.28571"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M67.4108 64.1084H35.6965L46.268 74.6798"
                        stroke="white"
                        stroke-width="5.28571"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4033_181">
                        <rect
                          width="63.4286"
                          height="63.4286"
                          fill="white"
                          transform="translate(25.7859 25.7861)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title="Launch to the Stars"
                text="Swap your base Eth for Blu token on a decentralized exchange (DEX)  ( Uniswap)."
              />
            </div>
            <div className="flex-2-HowToBuy">
              <img
                src="img/card-img.png"
                className="img-HowToBuy"
                alt="card-img"
              />

              <Card
                svg={
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 115 115"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 1.33646C8.79698 1.33646 1.33646 8.79698 1.33646 18V96.8628C1.33646 106.066 8.79698 113.526 18 113.526H96.8628C106.066 113.526 113.526 106.066 113.526 96.8628V18C113.526 8.79698 106.066 1.33646 96.8628 1.33646H18Z"
                      fill="#66B2CA"
                      stroke="black"
                      stroke-width="1.32708"
                    />
                    <path
                      d="M75.2825 52.5513C74.9436 52.8903 74.809 53.3804 74.9014 53.8508C75.1292 55.0093 75.2485 56.2069 75.2485 57.4322C75.2485 67.6369 66.9757 75.9093 56.7714 75.9093C51.37 75.9093 46.5102 73.5918 43.1317 69.8971C42.6001 69.3156 41.6831 69.2555 41.1261 69.8124C40.6537 70.2849 40.6095 71.0404 41.0559 71.5374C44.9218 75.8415 50.5303 78.5489 56.7714 78.5489C68.4336 78.5489 77.8881 69.0947 77.8881 57.4322C77.8881 55.9601 77.7374 54.5234 77.4507 53.1363C77.2422 52.1276 76.0108 51.823 75.2825 52.5513Z"
                      fill="white"
                    />
                    <path
                      d="M72.0512 44.6585C72.5334 44.1762 72.5688 43.4015 72.0995 42.9064C68.2512 38.8466 62.8071 36.3145 56.7716 36.3145C45.1091 36.3145 35.6548 45.7687 35.6548 57.4311C35.6548 59.0186 35.83 60.5651 36.162 62.0525C36.3842 63.0479 37.6034 63.3398 38.3245 62.6187C38.6686 62.2745 38.8012 61.7751 38.6998 61.2989C38.4342 60.0517 38.2944 58.7578 38.2944 57.4311C38.2944 47.2265 46.5669 38.954 56.7716 38.954C61.9933 38.954 66.7089 41.12 70.0694 44.6025C70.6068 45.1595 71.504 45.2058 72.0512 44.6585Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M72.9391 38.9531C73.6679 38.9531 74.2589 39.544 74.2589 40.2729V45.5521C74.2589 46.281 73.6679 46.8719 72.9391 46.8719H67.6599C66.9308 46.8719 66.3401 46.281 66.3401 45.5521C66.3401 44.8232 66.9308 44.2323 67.6599 44.2323H71.6193V40.2729C71.6193 39.544 72.21 38.9531 72.9391 38.9531Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39.6707 68.3769C39.9183 68.1293 40.254 67.9902 40.604 67.9902H45.8832C46.6121 67.9902 47.203 68.5812 47.203 69.31C47.203 70.0391 46.6121 70.6298 45.8832 70.6298H41.9238V74.5892C41.9238 75.3183 41.3329 75.909 40.604 75.909C39.8751 75.909 39.2842 75.3183 39.2842 74.5892V69.31C39.2842 68.96 39.4232 68.6243 39.6707 68.3769Z"
                      fill="white"
                    />
                    <path
                      d="M57.363 58.3105V63.435C59.1097 63.2402 60.3656 62.2298 60.3656 60.7791C60.3656 59.3067 58.9798 58.758 57.4208 58.3251L57.363 58.3105Z"
                      fill="white"
                    />
                    <path
                      d="M53.5813 53.8794C53.5813 55.3447 55.0827 55.951 56.1797 56.2611V51.4688C54.5917 51.6781 53.5813 52.6309 53.5813 53.8794Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M56.7717 70.6302C64.0606 70.6302 69.9696 64.7212 69.9696 57.4323C69.9696 50.1433 64.0606 44.2344 56.7717 44.2344C49.4827 44.2344 43.5737 50.1433 43.5737 57.4323C43.5737 64.7212 49.4827 70.6302 56.7717 70.6302ZM57.3635 66.6708H56.1799V65.0615C53.3434 64.8738 51.611 63.2858 51.4451 61.0123H53.2927C53.4226 62.499 54.6642 63.2787 56.1799 63.4373V57.9737L55.6023 57.8076C53.2927 57.1435 51.8494 55.9599 51.8494 53.9678C51.8494 51.7015 53.7042 50.1281 56.1799 49.8754V48.1938H57.3635V49.8538C59.9764 50.027 61.8241 51.6293 61.8962 53.7368H60.1641C60.0052 52.4234 58.8936 51.6005 57.3635 51.4489V56.5807L57.941 56.7394C59.4712 57.1435 62.0984 58.0386 62.0984 60.8102C62.0984 63.062 60.395 64.8522 57.3635 65.0615V66.6708Z"
                      fill="white"
                    />
                  </svg>
                }
                title="Hold To The Moon"
                text="Hold your blu token and prepare for the moon"
              />

              <Card
                svg={
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 119 119"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 1.33646C8.79698 1.33646 1.33646 8.79698 1.33646 18V101.386C1.33646 110.589 8.79698 118.05 18 118.05H101.386C110.589 118.05 118.05 110.589 118.05 101.386V18C118.05 8.79698 110.589 1.33646 101.386 1.33646H18Z"
                      fill="#66B2CA"
                      stroke="black"
                      stroke-width="1.32708"
                    />
                    <g clip-path="url(#clip0_4033_209)">
                      <path
                        d="M59.0061 49.7334C52.2066 49.7334 46.6433 55.2966 46.6433 62.0962C46.6433 68.8957 52.2066 74.459 59.0061 74.459C65.8056 74.459 71.3689 68.8957 71.3689 62.0962C71.3689 55.2966 65.8056 49.7334 59.0061 49.7334ZM59.0061 70.338C54.4731 70.338 50.7642 66.6292 50.7642 62.0962C50.7642 57.5632 54.4731 53.8543 59.0061 53.8543C63.5391 53.8543 67.2479 57.5632 67.2479 62.0962C67.2479 66.6292 63.5391 70.338 59.0061 70.338Z"
                        fill="white"
                      />
                      <path
                        d="M59.0062 80.0215C51.331 80.0215 43.9648 83.2152 38.7106 88.83L37.3198 90.3238L40.3075 93.1569L41.6983 91.6631C46.2313 86.821 52.3612 84.1424 59.0062 84.1424C65.6512 84.1424 71.7811 86.821 76.3141 91.6631L77.7049 93.1569L80.6926 90.3238L79.3018 88.83C74.0476 83.2667 66.6814 80.0215 59.0062 80.0215Z"
                        fill="white"
                      />
                      <path
                        d="M76.0049 52.7725V56.8934C80.847 56.8934 85.3285 58.8508 88.6767 62.4051L91.6644 59.572C87.6465 55.245 81.9287 52.7725 76.0049 52.7725Z"
                        fill="white"
                      />
                      <path
                        d="M85.8437 38.4012C85.8437 32.9925 81.4137 28.5625 76.005 28.5625C70.5963 28.5625 66.1663 32.9925 66.1663 38.4012C66.1663 43.8099 70.5963 48.2399 76.005 48.2399C81.4137 48.2399 85.8437 43.8099 85.8437 38.4012ZM70.2872 38.4012C70.2872 35.259 72.8628 32.6834 76.005 32.6834C79.1472 32.6834 81.7228 35.259 81.7228 38.4012C81.7228 41.5434 79.1472 44.119 76.005 44.119C72.8628 44.119 70.2872 41.5434 70.2872 38.4012Z"
                        fill="white"
                      />
                      <path
                        d="M42.0074 52.7725C36.0836 52.7725 30.3658 55.245 26.3479 59.572L29.3356 62.4051C32.6323 58.8508 37.1653 56.8934 42.0074 56.8934V52.7725Z"
                        fill="white"
                      />
                      <path
                        d="M51.8461 38.4012C51.8461 32.9925 47.4161 28.5625 42.0074 28.5625C36.5987 28.5625 32.1687 32.9925 32.1687 38.4012C32.1687 43.8099 36.5987 48.2399 42.0074 48.2399C47.4161 48.2399 51.8461 43.8099 51.8461 38.4012ZM42.0074 44.119C38.8652 44.119 36.2896 41.5434 36.2896 38.4012C36.2896 35.259 38.8652 32.6834 42.0074 32.6834C45.1496 32.6834 47.7252 35.259 47.7252 38.4012C47.7252 41.5434 45.1496 44.119 42.0074 44.119Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4033_209">
                        <rect
                          width="65.9348"
                          height="65.9348"
                          fill="white"
                          transform="translate(26.0388 28.0996)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title="Join the Cosmic Community"
                text="Join the Cosmic Community
Once you have your Alien Meme Coins, connect with our community on social media and stay updated on our cosmic adventures."
              />
            </div>
          </div>
          <div className="container-hr">
            <a href="link" ref={buttonRef} className="btn-HowToBuy">
              Buy Now!
            </a>
            <hr className="hr-HowToBuy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
