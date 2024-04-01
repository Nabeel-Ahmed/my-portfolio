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
  const [showNavBar, setShowNavBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(
    window.scrollY || window.pageYOffset
  );
  const threshold = 100; // Adjust this value as needed

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < threshold;

      setShowNavBar(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

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
