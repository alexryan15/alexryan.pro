import React from "react";
import Link from "next/link";

const NavbarItem = (props) => {
  return (
    <Link href={props.link}>
      <li className="ml-10 text-sm hover:text-HIGHLIGHT">{props.name}</li>
    </Link>
  );
};

export default NavbarItem;
