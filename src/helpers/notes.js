let notes = [
  { id: 1, title: "New note", body: "" }
];
let i = 0;

export let identifyer = {id: 0};

export function getNotes() {
  if(i === 0){
    UpdateNoteFromStorage()
    i = 1;
  }
  return notes;
}

export function createNote(title, body) {
  var res = Math.max.apply(Math,notes.map(function(o){return o.id;}))
  if (notes.length === 0){
    res=0;
  }
  const note = {
    id: res + 1,
    title,
    body
  };
  identifyer.id = notes.length + 1;
  notes.push(note);
  console.log(notes);
  updateStorage("set", notes);
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
  updateStorage("set", notes);
  return notes
}

export function deleteNote(id) {
  const indexToDelete = notes.findIndex((note) => note.id === id)
  notes.splice(indexToDelete, 1)
  updateStorage("set", notes);
  return true
}
export const updateStorage = (e, data) => {
  if(e === "set"){
      localStorage.clear();
      localStorage.setItem('LesoNotes', JSON.stringify(data));
  }else if(e === "get"){
    return JSON.parse(localStorage.getItem('LesoNotes'))
  }
}

export function UpdateNoteFromStorage() {
  if(notes !== undefined){
    notes.length = 0;
    notes.push(...updateStorage("get"))
    console.error(updateStorage("get"))
    }
}