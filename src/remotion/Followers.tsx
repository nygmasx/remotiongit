import React from "react";
import { useState } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Followers: React.FC<{ followers: number }> = ({ followers }) => {
  const frame = useCurrentFrame();
  const opacity = Math.min(1, frame / 60);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
      <div>
        <p style={{ fontSize: "5em", color: "#fff", opacity: opacity }}>
          You have {followers} followers!
        </p>
      </div>
    </AbsoluteFill>
  );
};
