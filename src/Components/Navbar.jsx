import React from "react";

function Navbar() {
  return (
    <nav className="w-full home-navbar">
      <ul className="flex px-20 py-4 ">
        <li>
          <a href="#" className="font-bold text-2xl">
            Hashan.dev
          </a>
        </li>
        <li className="ml-auto px-5 font-medium">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#" className="px-5 font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#" className="px-5 font-medium">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="px-5 font-medium">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
