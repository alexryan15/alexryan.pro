import React from "react";
import Link from "next/link";

const StaticLinks = () => {
  return (
    <div className="flex flex-col justify-between uppercase md:px-12 mt-20">
      <Link href="/#about">
        <p className="text-sm hover:text-HIGHLIGHT">---ABOUT</p>
      </Link>
      <Link href="/#projects">
        <p className="text-sm hover:text-HIGHLIGHT">---Projects</p>
      </Link>
    </div>
  );
};

export default StaticLinks;
