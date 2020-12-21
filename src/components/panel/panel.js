import React from "react";
import PanelParts from "./panelParts";
import { createNew } from "../functions/functions";
import { selectNote } from "../functions/selectedNote";
import "./panel.css";
export default function Panel({
  name,
  desc,
  id,
  onClick,
  notes,
  refreshList
}) {


  return (
    <div className="panel" onCLick={refreshList}>
      <span>Saved notes</span>
      <button onClick={() => createNew(refreshList, true)}>Create new</button>
      { notes.map((note) => (
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

