import React from "react";
export default function Userinfo({ name, desc, id, onClick }) {
  return (
    <>
      <div id={id} onClick={onClick} className="panelNote">
        <div className="panelNoteTitle">{name}</div>
        {desc}
      </div>
    </>
  );
}
