"use strict";
import React, { useState, useEffect } from "react";
import { getBasePath } from "@/app/data";

const NavButton: React.FC<{ name: string; link: string }> = ({
  name,
  link,
}) => {
  return (
    <a className="btn btn-ghost" href={link}>
      {name}
    </a>
  );
};

const NavBar = () => {
  return (
    <nav className={`navbar bg-base-200 z-50`}>
      <div>
        <NavButton name="Home" link={getBasePath()} />
        {/* <NavButton name="About" /> */}
        {/* <NavButton name="Contact" /> */}
      </div>
    </nav>
  );
};

export default NavBar;
