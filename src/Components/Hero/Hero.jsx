import React from "react";
import PlantBG from "../../Content/Group 12.png";

function Hero() {
  return (
    <div>
      <div className="bg-gradient-to-r from-ForestGreen-500 to-ForestGreen-700 h-screen text-white flex flex-col justify-center">
        <div>
          <img
            src={PlantBG}
            alt="BackgroundIMG"
            className="absolute bottom-0 lg:"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-left text-center my-12 font-bold">
            Affordable Wooden furniture refurbishment
          </h1>
          <div className="my-7 flex flex-col lg:flex-row text-center align-middle justify-center">
            <div className="lg:mx-7">
              <a
                href="#"
                className="lg:mx-7 bg-white py-4 px-8 text-ForestGreen-700 rounded-lg"
              >
                Book a consultation
              </a>
            </div>
            <div className="my-7 lg:m-0">
              <a href="#" className="my-10 lg:m-0">
                See my previous work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
