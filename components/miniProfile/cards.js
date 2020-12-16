import React from "react";
import Userinfo from "./userInfo";
import Buttons from "../buttons/regular";
import "./miniProfile.css";
export default function Cards({ name, avatar, url, desc, id, profile }) {
  return (
    <div className="miniProfile_card">
      <div>
        <img className="minProfile" alt="profile_picture" src={avatar} />
      </div>
      <Userinfo name={name} desc={desc} profile={url} />
      <Buttons value="Add Friend" />
    </div>
  );
}
