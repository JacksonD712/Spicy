import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import backgroundImage1 from "../assets/bg5.jpg";
import backgroundImage2 from "../assets/bg4.jpg";
import backgroundImage3 from "../assets/bg3.jpg";
import "../Style/Home.css";

function Home() {
  const sentences = [
    "Spices that Define Excellence",
    "Flavors that Embody Perfection",
    "Spices that Embody Superior Taste",
    "Spices that Capture Authentic Flavor",
  ];

  const [currentSentence, setCurrentSentence] = useState(0);
  const [swipe, setSwipe] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwipe(true);

      setTimeout(() => {
        setCurrentSentence(
          (prevSentence) => (prevSentence + 1) % sentences.length
        );
        setSwipe(false);
      }, 1000); // Delay before changing sentence
    }, 5000); // Interval between sentence changes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-screen overflow-hidden min-h-screen justify-center items-center">
      {/* Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="absolute inset-0"
        renderThumbs={() => null}
      >
        <div
          style={{
            backgroundImage: `url(${backgroundImage1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${backgroundImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${backgroundImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        />
      </Carousel>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center flex items-center justify-center h-full">
        <div>
          <h1
            className={`text-5xl md:text-6xl lg:text-9xl mt-4 ${
              swipe ? "swipe-up" : "swipe-down"
            }`}
            style={{ fontFamily: "Aldhabi, serif" }}
          >
            {sentences[currentSentence]}
          </h1>

          <button className="bg-transparent text-sm hover:bg-orange-700 text-white font-semibold hover:text-white py-2 px-6 md:px-8 border border-orange-700 hover:border-transparent rounded-full mt-8">
            PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
