import { Player } from "@remotion/player";
import { MyComp } from "../MyComp";
import { useState, useEffect } from "react";
import { Followers } from "../Followers";
import axios from "axios";
import React from "react";

export const Appl: React.FC = () => {
  const [name, setName] = useState("");
  const [followers, setFollowers] = useState(0);

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const fetchFollowersCount = async () => {
      try {
        if (name) {
          const response = await axios.get(
            `https://api.github.com/users/${name}`
          );
          setFollowers(response.data.followers);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchFollowersCount();
  }, [name]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Player
        component={MyComp}
        inputProps={{ name, followers }}
        durationInFrames={120}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        style={{
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
          width: 480,
          height: 240,
        }}
        controls
      />
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input type="submit" />
      </div>
    </div>
  );
};
