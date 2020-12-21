const notes = [
  { id: 1, title: "New note", body: "text" },
  { id: 2, title: "note2", body: "text2" },
  { id: 3, title: "note3", body: "text3" }
];

export let identifyer = {id: 0};

export function getNotes() {
  return notes;
}

export function createNote(title, body) {
  const note = {
    id: notes.length + 1,
    title,
    body
  };
  identifyer.id = notes.length + 1;
  notes.push(note);
  console.log(notes);
  return note;
  // neat
}

export function updateNote(id, title, body) {
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }
  notes.splice(indexToUpdate, 1, note)
  return notes
}

export function deleteNote(id) {
  const indexToDelete = notes.findIndex((note) => note.id === id)
  notes.splice(indexToDelete, 1)
  return true
}