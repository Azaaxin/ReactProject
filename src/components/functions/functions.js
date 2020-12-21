import { createNote, getNotes, updateNote, identifyer } from "../../helpers/notes";
import { selectNote, clickedId } from "../functions/selectedNote"
const findByPropInObjectArray = (arr, prop) => match => arr.find(e => e[prop] === match);
const findBody = findByPropInObjectArray(getNotes(), "body");

const doneTyping = (refreshPanel) => {
  
  let a = document.getElementsByClassName("writableArea")[0];
    if(clickedId !== null){
      updateNote(clickedId, a.innerHTML.slice(0, 20), a.innerHTML)
    }else{
      createNote(a.innerHTML, a.innerHTML);
      findBody(getNotes().pop().body === a.innerHTML)
      // selectNote(identifyer);
    }
    refreshPanel();
    
    // console.log(getNotes().pop().body === undefined)
  
}
export const whentyping = (refreshPanel, a)=>{
    // createNote("Example note", a);
    // refreshPanel();

  let typingTimer;
  let doneTypingInterval = 2000;
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => doneTyping(refreshPanel), doneTypingInterval);
}
