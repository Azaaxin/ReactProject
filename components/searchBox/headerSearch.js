import React from "react";
import "./headerSearch.css";
export default function HeaderSearchComponent({ name, placeholder, profile }) {
  return (
    <div className="header_search_area">
      <span></span>
      <input type="text" placeholder={placeholder}></input>
      <div className="search_go_button">O</div>
    </div>
  );
}
