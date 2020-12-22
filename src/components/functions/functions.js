import { createNote, getNotes, updateNote, deleteNote, updateStorage } from "../../helpers/notes";
import {ToastsStore} from 'react-toasts';
import {clickedId } from "../functions/selectedNote"
const findByPropInObjectArray = (arr, prop) => match => arr.find(e => e[prop] === match);
const findBody = findByPropInObjectArray(getNotes(), "body");

export const createNew = (refreshPanel, reload) => {
      createNote("New note", "");
      if(reload){
        refreshPanel();
      }
      updateStorage("set", getNotes());
      ToastsStore.success("Successfully created note!")
}

export const deleteCurrent = (refreshPanel, reload) => {
      deleteNote(clickedId)
      if(reload){
        refreshPanel();
      }
      console.log("Note run")
      ToastsStore.error("Deleted note!")
}

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

  doneTyping(refreshPanel)
}
