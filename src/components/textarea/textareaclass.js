import React from "react";
import "./textarea.css";
import { whentyping, deleteCurrent } from "../functions/functions";

export default function Textarea({
  id,
  placeholder,
  value,
  refreshList,
  notes
}) {
  return (
    <>
    <div onClick={() => deleteCurrent(refreshList, true)} className="trash"></div>
    <div className="textarea">
      <div
        id="text"
        className="writableArea"
        placeholder={placeholder}
        contentEditable="true"
        onInput={() => whentyping(refreshList)}
      ></div>
    </div>
    </>
  );
}
