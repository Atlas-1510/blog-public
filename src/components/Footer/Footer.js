import React from "react";
import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <div className="flex justify-center items-center h-[10vh]">
      <IconContext.Provider value={{ size: "2.5rem", color: "#9CA3AF" }}>
        <a href="https://github.com/Atlas-1510/blog-public">
          <SiGithub />
        </a>
      </IconContext.Provider>
    </div>
  );
}

export default Footer;
