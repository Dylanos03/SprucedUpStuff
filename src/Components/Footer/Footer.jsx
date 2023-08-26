import React from "react";
import LogoW from "../../Content/LogoLgW.png";

function Footer() {
  return (
    <div className="mt-6 bg-gray-700 p-4 py-8">
      <img src={LogoW} alt="LogoW" className=" px-4" />
      <div className="flex flex-col gap-4 my-9">
        <div className="flex flex-col gap-1 text-white">
          <a href="#">FaceBook</a>
          <a href="#">Instagram</a>
          <a href="#">Email</a>
        </div>
        <div className="flex gap-1 flex-col text-white">
          <a href="#">Top</a>
          <a href="#">About</a>
          <a href="#">Services</a>
        </div>

        <a href="#" className="text-white">
          Built by Dylan O'Sullivan
        </a>
      </div>
    </div>
  );
}

export default Footer;
