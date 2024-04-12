"use client";
import React, { useState, useEffect } from "react";
import {getBasePath } from "@/app/data";

const NavButton = ({ name, link }) => {
  return (
    <a className="btn btn-ghost" href={link}>
      {name}
    </a>
  );
};

const NavBar = () => {
  return (
      <nav
      className={`navbar bg-base-100 z-50`}
    >
      <div>
        <NavButton name="Home" link={getBasePath()} />
        {/* <NavButton name="About" /> */}
        {/* <NavButton name="Contact" /> */}
      </div>
    </nav>
  );
};

export default NavBar;
