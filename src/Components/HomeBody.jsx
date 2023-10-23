import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";

function HomeBody() {
  return (
    <div className="flex flex-col justify-center items-center home-body w-screen">
      <div className="flex justify-center items w-1/2">
        {/* left side */}
        <div className="flex flex-col justify-center w-1/2">
          <h1 className="text-4xl font-bold">
            <Typewriter
              words={["Hi,I'm Hashan", "Mobile Developer", "Web Developer"]}
              loop={100}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            👋
          </h1>
          <p className="font-thin pt-5">
            Hi, I'm Hashan. I'm a passionate mobile and web developer and I
            create digital magic with a passion for design and development.💻
          </p>
          <div className="pt-5">
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} className="h-4" />
            </a>
            <a href="#" className="px-3">
              <FontAwesomeIcon icon={faGithub} className="h-4" />
            </a>
          </div>
        </div>

        {/* right side */}
        <div className="flex w-1/2 justify-end">
          <img
            src="../../assets/images/my.jpg"
            className="h-40 home-img shape"
          />
        </div>
      </div>
      <div className="flex pt-16 w-1/2">
        <p className="text-blue-700 font-bold">Tech Stack</p>
        <div className="vl h-8 ml-5 border-l-4 border-blue-400"></div>
        <div className="flex">
          <img className="pl-10 h-8" src="../../assets/images/html.png" />
          <img className="px-5 h-8" src="../../assets/images/css.png" />
          <img className="px-5 h-8" src="../../assets/images/js.png" />
          <img className="px-5 h-8" src="../../assets/images/laravel.png" />
          <img className="px-5 h-8" src="../../assets/images/react.png" />
          <img className="px-5 h-8" src="../../assets/images/flutter.png" />
          <img className="px-5 h-8" src="../../assets/images/tailwind.png" />
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
