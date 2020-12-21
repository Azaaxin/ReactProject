import React from "react";
import "./textarea.css";
import { whentyping } from "../functions/functions";

export default function Textarea({
  id,
  placeholder,
  value,
  refreshList,
  notes
}) {
  return (
    <div className="textarea">
      <div
        id="text"
        className="writableArea"
        placeholder={placeholder}
        contentEditable="true"
        onInput={() => whentyping(refreshList)}
      ></div>
    </div>
  );
}
