import React from "react";

export default function Button({ text, handleClick }) {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#1877b1",
          textTransform: "uppercase",
          padding: "0.7rem",
          border: "1px solid #1877b1",
          color: "white",
          borderRadius: 2,
          margin: 10,
        }}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}
