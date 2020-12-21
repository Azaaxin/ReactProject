export let clickedId;

export function selectNote(e) {
  [...document.querySelectorAll(".panelNote")].map((element) => {
    element.style.backgroundColor = "white";
  });
  clickedId = e.id;
  if(e.body !== undefined){ document.getElementsByClassName("writableArea")[0].innerHTML = e.body;}
  document.getElementById(e.id).style.backgroundColor = "gray";
}
