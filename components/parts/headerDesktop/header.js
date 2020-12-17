import React from "react";
import "./header.css";
import Hlinks from "./headerLinks";
import Huser from "./headerUser";
import Hlogo from "./headerLogo";
import Hsearch from "./headerSearch";
export default function Header({ logo, links, desc, id, avatarUrl }) {
  return (
    <div className="head">
      <Hlogo logo={logo} />
      <Hlinks text={links} />
      <Hsearch />
      <Huser avatarUrl={avatarUrl} />
    </div>
  );
}
