import React from "react";
import { useState } from "react";
import { AbsoluteFill } from "remotion";

export const Text: React.FC<{ name: string }> = ({ name }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    transform: isHover ? "scale(1.5)" : "scale(1)",
    transition: isHover ? "transform.2s" : "rgb(0, 191, 255)",
  };
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p style={{ fontSize: "7em", color: "#fff" }}>Hello {name} !</p>
      </div>
    </AbsoluteFill>
  );
};
