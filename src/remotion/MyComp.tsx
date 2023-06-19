import React from "react";
import { AbsoluteFill } from "remotion";
import { Text } from "./Text";
import { Background } from "./Background";
import { Followers } from "./Followers";
export const MyComp: React.FC<{ name: string; followers: number }> = ({
  name,
  followers,
}) => {
  return (
    <AbsoluteFill>
      <Background />
      <Text name={name} />;
      <Followers followers={followers} />
    </AbsoluteFill>
  );
};
