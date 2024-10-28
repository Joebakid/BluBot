import React from "react";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Utility from "./components/Utility";
import Gif from "./components/gif";
import Tokenomics from "./components/Tokenomics";
import HowToBuy from "./components/HowToBuy";
// import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="App">
      <div className="bg-img">
        <NavBar />
        <Header />
        <About />
      </div>

      <Utility />
      <Gif />
      <Tokenomics />
      <HowToBuy />

      {/* <Roadmap /> */}
    </div>
  );
}

export default App;
