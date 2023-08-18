import React, { useRef, useState } from "react";
import "../../index.css";
import Logo from "../../Content/LogoLgW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  // const Dropdown = document.getElementById("Menu");
  // console.log(Dropdown);
  let dropdownOpen = false;

  let Icon = faX;
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(faBars);

  function handleClick() {
    const Dropdown = DropdownRef.current;
    const Navbar = NavbarRef.current;
    Dropdown.classList.toggle("hidden");
    dropdownOpen = !dropdownOpen;
    setOpen(!open);
  }

  const DropdownRef = useRef(null);
  const NavbarRef = useRef(null);

  return (
    <nav id="Navbar" className=" fixed top-0 z-50  w-full duration-100 ">
      <div
        ref={NavbarRef}
        className="min-w-screen-xl lg:flex flex-wrap items-center justify-evenly mx-auto p-4 gap-24 align-middle absolute w-full "
      >
        <div className="flex justify justify-between">
          <img src={Logo} alt="" className="h-8" />
          <FontAwesomeIcon
            icon={open ? faX : faBars}
            color="white"
            className="lg:hidden h-8 cursor-pointer w-8"
            onClick={handleClick}
          />
        </div>
        <ul
          id="Menu"
          ref={DropdownRef}
          className="lg:flex lg:flex-row flex-col flex-wrap justify-between gap-16 items-center text-white text-left duration-100 lg:background-none bg-ForestGreen-500 hidden "
        >
          <li className="lg:my-0 my-4 ">
            <a href="#">Home</a>
          </li>
          <li className="lg:my-0 my-4 ">
            <a href="#">About</a>
          </li>
          <li className="lg:my-0 my-4 ">
            <a href="#">Services</a>
          </li>
          <li className="lg:my-0 my-4 ">
            <a href="#">Portfolio</a>
          </li>
          <li className="lg:my-0 my-12">
            <a
              href="#"
              className="text-ForestGreen-500 bg-white px-6 py-2 rounded-md "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
