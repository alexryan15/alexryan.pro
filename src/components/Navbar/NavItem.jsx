import Link from "next/link";
import React from "react";

const NavItem = ({ props }) => {
  return (
    <Link href="/">
      <h1>{props.name}</h1>
    </Link>
  );
};

export default NavItem;
