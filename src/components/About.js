import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="text-white">
      <div className="linkedin md:ml-[710px] ml-40 md:mt-[-120px]">
        <a
          href="https://www.linkedin.com/in/namanjain16/"
          target="_blank"
          className="font-semibold ml-4"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" className="mr-2" />
          LinkedIn
        </a>
      </div>
      <div className="git md:ml-[627px] ml-[77px] md:mt-4 mt-2 ">
        <a
          href="https://github.com/Namanj1699/"
          target="_blank"
          className="font-semibold ml-24"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" className="mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
