import React, {useEffect, useRef} from "react";
import one from "../assets/story1.jpeg";
import two from "../assets/story2.jpeg";

function Story() {
  const leftColumnRef = useRef(null);
  const imageOneRef = useRef(null);
  const imageTwoRef = useRef(null);

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const images = [imageOneRef.current, imageTwoRef.current];
    if (!leftColumn || images.some(image => !image)) return;

    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          leftColumn.style.transition = "transform 1s ease-out";
          leftColumn.style.transform = "translateX(0)";

          images.forEach(image => {
            image.style.transition = "transform 1s ease-out";
            image.style.transform = "translateX(0)";
          });
        } else {
          leftColumn.style.transform = "translateX(-100%)";
          images.forEach(image => {
            image.style.transform = "translateX(100%)";
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(leftColumn);
    images.forEach(image => observer.observe(image));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-zinc-900 h-full flex justify-center items-center pt-20 pb-20">
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="text-center md:text-left"
            ref={leftColumnRef}
            style={{ transform: "translateX(-100%)" }}
          >
            
            <h1
              className="text-white text-4xl md:text-6xl"
              style={{ fontFamily: "Aldhabi, cursive" }}
            >
              Our Story
            </h1>
            <p
              className="text-white mt-4"
              style={{
                fontFamily: "Bookman Old Style, serif",
                fontWeight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div
              className="relative w-64 h-96"
              ref={imageOneRef}
              style={{ transform: "translateX(100%)" }}
            >
              <img src={one} alt="Product Image" className="w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div
              className="relative w-64 h-96"
              ref={imageTwoRef}
              style={{ transform: "translateX(100%)" }}
            >
              <img src={two} alt="Product Image" className="w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
