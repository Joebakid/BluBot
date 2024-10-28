import React from "react";

function HowToBuy() {
  function Card({ svg, title, text }) {
    return (
      <div className=" HowToBuy-Card">
        <div>{svg}</div>
        <div>
          <h1>{title}</h1>
          <p className="gray-text"> {text}</p>
        </div>
      </div>
    );
  }
  return (
    <section className="bg-color">
      <div className="container bg-color">
        <div className="section-spacing">
          <div className="flex-container-HowToBuy">
            <div className="flex-1-HowToBuy">
              <h1 className="HowToBuy-title">How To Buy</h1>
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
                text="Install a crypto wallet (like MetaMask or Trust Wallet) to safely store your Alien Meme Coins."
              />
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
                title="Launch to 
the Stars"
                text="
Swap your base coin 
for Alien Meme Coin on a decentralized exchange (DEX) like PancakeSwap or Uniswap. Make sure to use the correct contract address to avoid any space mishaps!"
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
                text="Install a crypto wallet (like MetaMask or Trust Wallet) to safely store your Alien Meme Coins."
              />
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
                text="Install a crypto wallet (like MetaMask or Trust Wallet) to safely store your Alien Meme Coins."
              />
            </div>
          </div>{" "}
          <div className="container-hr">
            <a href="link" className="btn-HowToBuy">
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
