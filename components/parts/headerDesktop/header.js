import React from "react";
import "./header.css";
import Hlinks from "./headerLinks";
import Huser from "./headerUser";
import Hlogo from "./headerLogo";
import Hsearch from "./headerSearch";
export default function Header({ logo, links, desc, id, profile }) {
  return (
    <div className="head">
      <Hlogo />
      <Hlinks text={links} />
      <Hsearch />
      <Huser />
    </div>
  );
}
