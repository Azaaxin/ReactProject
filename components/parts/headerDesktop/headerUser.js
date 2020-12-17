import React from "react";
export default function Huser({ name, onClick, avatarUrl }) {
  return (
    <>
      <div className="header_user_area">
        <div
          onClick={onClick}
          className="userFavicon"
          style={{ backgroundImage: `url(${avatarUrl})` }}
        ></div>
      </div>
    </>
  );
}
