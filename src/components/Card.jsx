import React from "react";

export default function Card({ title, handleClick }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 180,
        width: 180,
        margin: 20,
        boxShadow:
          "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
      }}
      onClick={handleClick}
    >
      {title}
    </div>
  );
}
