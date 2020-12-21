import React from "react";
import PanelParts from "./panelParts";

import { selectNote } from "../functions/selectedNote";
import "./panel.css";
export default function Panel({
  name,
  desc,
  id,
  onClick,
  notes,
  refreshPanel
}) {
  return (
    <div className="panel" onCLick={refreshPanel}>
      <span>Saved notes</span>
      {notes.map((note) => (
        <PanelParts
          onClick={() => selectNote(note)}
          name={note.title}
          desc={note.desc}
          id={note.id}
        />
      ))}
    </div>
  );
}
