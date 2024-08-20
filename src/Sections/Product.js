import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import backgroundImage from "../assets/product.jpg";
import steak from "../assets/steak.png";
import seafood from "../assets/sea.png";
import chicken from "../assets/chicken.png";
import potato from "../assets/potato.png";
import pasta from "../assets/italian.png";
import mexican from "../assets/mexican.png";

function Product() {
  const [selectedId, setSelectedId] = useState(null);

  const categories = [
    {
      id: "1",
      name: "Steak",
      description: "MARINADE",
      image: steak,
      rating: 4,
      colorClass: "text-white",
      recipe: "Recipe for Steak: Ingredients and steps to prepare the steak.",
    },
    {
      id: "2",
      name: "Sea Food",
      description: "SEASONING",
      image: seafood,
      rating: 3,
      colorClass: "text-white",
      recipe:
        "Recipe for Sea Food: Ingredients and steps to prepare the sea food.",
    },
    {
      id: "3",
      name: "Chicken",
      description: "SEASONING",
      image: chicken,
      rating: 5,
      colorClass: "text-white",
      recipe:
        "Recipe for Chicken: Ingredients and steps to prepare the chicken.",
    },
    {
      id: "4",
      name: "Potato",
      description: "SEASONING",
      image: potato,
      rating: 2,
      colorClass: "text-white",
      recipe: "Recipe for Potato: Ingredients and steps to prepare the potato.",
    },
    {
      id: "5",
      name: "Italian",
      description: "SEASONING",
      image: pasta,
      rating: 4,
      colorClass: "text-white",
      recipe:
        "Recipe for Italian: Ingredients and steps to prepare the Italian dish.",
    },
    {
      id: "6",
      name: "Mexican Mix",
      description: "MARINADE",
      image: mexican,
      rating: 1,
      colorClass: "text-white",
      recipe:
        "Recipe for Mexican Mix: Ingredients and steps to prepare the Mexican mix.",
    },
  ];

  const handleCategoryClick = id => {
    setSelectedId(id);
  };

  const handleCloseOverlay = () => {
    setSelectedId(null);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 text-white text-center w-full max-w-7xl px-6">
        <h1
          className="text-9xl pt-8"
          style={{fontFamily: "Aldhabi, serif"}}
        >
          Our Product
        </h1>
       
        <div className="bg-zinc-900 rounded-6xl shadow-4xl mx-auto mb-24  p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(category => (
              <motion.div
                key={category.id}
                layoutId={category.id}
                className="flex items-center p-4 rounded-lg cursor-pointer"
                onClick={() => handleCategoryClick(category.id)}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-36 h-56 object-cover rounded-lg mr-4"
                />
                <div className="flex flex-col justify-center">
                  <motion.h2
                    layoutId={`title-${category.id}`}
                    className="text-4xl"
                    style={{fontFamily: "SilverForteGrungeGrunge"}}
                  >
                    {category.name}
                  </motion.h2>
                  <motion.h5
                    layoutId={`subtitle-${category.id}`}
                    className={`text-3xl ${category.colorClass}`}
                    style={{fontFamily: "Aldhabi, serif"}}
                  >
                    {category.description}
                  </motion.h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center p-4 md:p-6"
          >
            <motion.button
              layoutId={`close-${selectedId}`}
              className="absolute top-4 right-4 text-3xl text-black"
              onClick={handleCloseOverlay}
            >
              &times;
            </motion.button>
            {categories
              .filter(category => category.id === selectedId)
              .map(category => (
                <React.Fragment key={category.id}>
                  <motion.h5
                    layoutId={`subtitle-${category.id}`}
                    className={`text-2xl ${category.colorClass} font-calibri`}
                  >
                    {category.description}
                  </motion.h5>
                  <motion.h2
                    layoutId={`title-${category.id}`}
                    className="text-5xl mb-4"
                  >
                    {category.name}
                  </motion.h2>
                  <motion.img
                    layoutId={`image-${category.id}`}
                    src={category.image}
                    alt={category.name}
                    className="w-48 h-48 object-cover rounded-lg mb-4"
                  />
                  <motion.p className="text-xl p-4">{category.recipe}</motion.p>
                </React.Fragment>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Product;
