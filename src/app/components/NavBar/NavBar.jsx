"use client";
import React, { useState, useEffect } from "react";

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
      className={`navbar bg-base-100 z-50 ${
        showNavBar ? "fixed top-0" : "hidden"
      }`}
    >
      <div>
        <NavButton name="Home" link="/" />
        {/* <NavButton name="About" /> */}
        {/* <NavButton name="Contact" /> */}
      </div>
    </nav>
  );
};

export default NavBar;
