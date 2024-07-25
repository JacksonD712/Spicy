import React from "react";

const StarRating = ({rating}) => {
  const stars = Array.from({length: 5}, (_, index) => (
    <span
      key={index}
      className={`text-yellow-400 ${
        index < rating ? "fill-current" : "fill-gray-400"
      } text-2xl`}
    >
      ★
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

export default StarRating;
