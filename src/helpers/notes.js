const notes = [
  { id: 1, title: "New note", body: "text" },
  { id: 2, title: "note2", body: "text2" },
  { id: 3, title: "note3", body: "text3" }
];
export function getNotes() {
  return notes;
}

export function createNote(title, body) {
  const note = {
    id: notes.length + 1,
    title,
    body
  };
  notes.push(note);
  console.log(notes);
  return note;
  // neat
}
