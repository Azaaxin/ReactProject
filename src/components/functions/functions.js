import { createNote } from "../../helpers/notes";

const doneTyping = (refreshPanel) => {
  let a = document.getElementsByClassName("writableArea")[0];
  console.log(a)
    createNote("Example note", a);
    refreshPanel();
  
}
export const whentyping = (refreshPanel, a)=>{
    createNote("Example note", a);
    refreshPanel();

  // let typingTimer;
  // let doneTypingInterval = 2000;
  // clearTimeout(typingTimer);
  // typingTimer = setTimeout(doneTyping(refreshPanel), doneTypingInterval);
}
