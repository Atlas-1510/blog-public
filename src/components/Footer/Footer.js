import React from "react";
import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <div className="flex justify-center items-center p-5">
      <IconContext.Provider value={{ size: "2.5rem", color: "#9CA3AF" }}>
        <div>
          <SiGithub />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Footer;
