import "./buttons.css";
import React from "react";

export default function Buttons({ value, url, id, handleClick }) {
  return (
    <button className="regularBtn" id={id} onClick={handleClick}>
      {value}
    </button>
  );
}
