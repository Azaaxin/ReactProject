import React from "react";
export default function Hlinks({ text, onClick, href }) {
  return (
    <>
      <div class="header_browse_menu">
        <a href={href} onClick={onClick}>
          {text}
        </a>
      </div>
    </>
  );
}
