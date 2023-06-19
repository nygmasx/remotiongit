import React from "react";

export const Left: React.FC = () => {
  return (
    <div
      className=""
      style={{
        width: "40%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#fff" }}>
        <span style={{ color: "#0B84F3" }}>Programmatic</span> content and
        rendering{" "}
      </h1>
      <p style={{ color: "#fff" }}>
        Fetch data from an API and use it as the content. Display it in
        real-time with the <a href="">@remotion/player</a>. Render videos
        programmatically using <a href="">@remotion/lambda</a>.
      </p>
    </div>
  );
};
