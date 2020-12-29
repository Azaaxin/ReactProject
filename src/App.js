import React, { useEffect, useState } from "react";
import { getNotes } from "./helpers/notes.js";
import "./styles.css";
import PanelParts from "./components/panel/panel";
import Textarea from "./components/textarea/textareaclass";
import {ToastsContainer, ToastsStore} from 'react-toasts';
export default function App() {
  if (localStorage.getItem("LesoNotes") === null) {
    localStorage.setItem("LesoNotes", "[]");
  }
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const notes = getNotes;
    setNotes(notes);
  }, [setNotes]);

  const reload = () => {
    const notes = getNotes;
    setNotes([...notes()]);
  };

  return (
    <div className="Layout">
      <PanelParts
        notes={notes}
        name="SandCastle"
        desc="Rolling around.."
        refreshList={reload}
        id={1}
      />
      <Textarea refreshList={reload} placeholder="Write something" />
      <ToastsContainer store={ToastsStore}/>
    </div>
  );
}
