import React from "react";
import Link from "next/link";

const NavbarItemMobile = (props) => {
  return (
    <Link href={props.link}>
      <li onClick={props.event} className="py-4 text-sm">
        {props.name}
      </li>
    </Link>
  );
};

export default NavbarItemMobile;
