import React, {useState, useEffect} from "react";
import backgroundImage from "../assets/home.jpeg";
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
          prevSentence => (prevSentence + 1) % sentences.length
        );
        setSwipe(false);
      }, 1000); // Delay before changing sentence
    }, 5000); // Interval between sentence changes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center">
        <p
          className="text-xl text-orange-700 font-bold"
          style={{fontFamily: "Aldhabi, serif", fontWeight: 900}}
        >
          FLAVORS TO SATISFY
        </p>

        <h1
          className={`text-5xl md:text-6xl lg:text-9xl mt-4 ${
            swipe ? "swipe-up" : "swipe-down"
          }`}
          style={{fontFamily: "Aldhabi, serif"}}
        >
          {sentences[currentSentence]}
        </h1>

        <p
          className="text-base text-white font-bold mt-5"
          style={{fontFamily: "Calibri, serif"}}
        >
          Journey through a World of Spices.
        </p>
        <p
          className="text-sm text-orange-700"
          style={{fontFamily: "Bookman Old Style, serif", fontWeight: 100}}
        >
          FLAVORS TO SATISFY
        </p>
        <button className="bg-transparent text-sm hover:bg-orange-700 text-white font-semibold hover:text-white py-2 px-6 md:px-8 border border-orange-700 hover:border-transparent rounded-full mt-8">
          VIEW PRODUCTS
        </button>
      </div>
    </div>
  );
}

export default Home;
