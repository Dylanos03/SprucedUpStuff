import React from "react";
import ImgRow1 from "../../Content";

function Portfolio() {
  return (
    <div className="my-12 ">
      <h2 className="text-2xl font-bold my-8">My Previous Work</h2>
      <div className="flex h-72  animate-sliding-left ">
        {ImgRow1.map((item, index) => (
          <img
            className=" p-2 "
            key={index}
            src={require("../../Content/ImageRow1/" + item.src + ".jpeg")}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
