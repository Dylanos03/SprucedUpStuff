import React from "react";
import PlantBG from "../../Content/Group 12.png";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-ForestGreen-500 to-ForestGreen-700 h-64">
      <img src={PlantBG} alt="BackgroundIMG" className="absolute" />
    </div>
  );
}

export default Hero;
