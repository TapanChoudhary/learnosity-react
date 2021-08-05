import { Button } from "@material-ui/core";
import React from "react";

export function Card({ title, handleEdit, handlePreview }) {
  return (
    <div
      style={{
        height: 200,
        width: 240,
        margin: 20,
        padding: 10,
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        justifyContent: "space-around",
        fontWeight: "bold",
        fontSize: "1.1rem",
        textAlign: "center",
        cursor: "pointer",
        boxShadow:
          "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </div>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" color="secondary" onClick={handleEdit}>
          Edit
        </Button>

        <Button variant="contained" color="primary" onClick={handlePreview}>
          Preview
        </Button>
      </div>
    </div>
  );
}
