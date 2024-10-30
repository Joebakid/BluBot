import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Utility from "./components/Utility";
import Gif from "./components/gif";
import Tokenomics from "./components/Tokenomics";
import HowToBuy from "./components/HowToBuy";
import FAQs from "./components/FAQs";
import Roadmap from "./components/Roadmap";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 2 seconds)
    const timer = setTimeout(() => setLoading(false), 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <div className="bg-img">
        <NavBar />
        <Header />
        <About />
      </div>
      <Roadmap />
      <Utility />
      <Gif />
      <Tokenomics />
      <HowToBuy />
      <FAQs />
    </div>
  );
}

export default App;
