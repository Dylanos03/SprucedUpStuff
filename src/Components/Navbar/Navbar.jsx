import React from "react";
import "../../index.css";
import Logo from "../../Content/LogoLgW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav id="Navbar" className=" sticky top-0 z-50 bg-ForestGreen-500">
      <div className="min-w-screen-xl flex flex-wrap sm:items-center justify-evenly mx-auto p-4 gap-24 align-middle ">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
        <img src={Logo} alt="" className="h-8" />
        <ul className="sm:flex flex-wrap justify-between gap-16 items-center text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li className="text-ForestGreen-500 bg-white px-6 py-2 rounded-md">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
