import React from "react";
import Navbar from "../Components/Navbar";

import HomeBody from "../Components/HomeBody";

function Home() {
  return (
    <div className="bg-blue-200 home area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Navbar />
      <HomeBody />
    </div>
  );
}

export default Home;
