import React from "react";
export default function Userinfo({ name, desc, profile }) {
  return (
    <>
      <div onClick={profile} className="userText">
        {name}
      </div>
      <div className="userDesc">{desc}</div>
    </>
  );
}
