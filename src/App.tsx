import React from "react";
import { Appl } from "./remotion/app/App";
import { Left } from "./Left";

import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        margin: "0 auto",
      }}
    >
      <Left />
      <Appl />
    </div>
  );
}

export default App;
