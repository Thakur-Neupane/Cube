import React from "react";

import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaFacebook,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import "./cube.scss";

const Cube = () => {
  const getIconColor = (icon) => {
    switch (icon) {
      case FaReact:
        return "#61DBFB";
      case FaGithub:
        return "#1d1a1a";
      case FaNodeJs:
        return "#e34c26";
      case SiExpress:
        return "#264de4";
      case FaFacebook:
        return "#f0db4f";
      case FaGitAlt:
        return "#F1502F";
      default:
        return "black";
    }
  };

  return (
    <div className="cube">
      <div className="cubespinner">
        {[FaReact, FaGithub, FaNodeJs, SiExpress, FaFacebook, FaGitAlt].map(
          (Icon, index) => (
            <div key={index} className={`face face${index + 1}`}>
              <Icon style={{ color: getIconColor(Icon) }} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Cube;
