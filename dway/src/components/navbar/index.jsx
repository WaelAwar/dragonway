import "./styles.css";
import React, { useState, useEffect } from "react";
import dway from "../../assets/dway.png";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="header">
      <a href="#1" className="logo">
        <img src={dway} alt="" />
      </a>
      {(toggleMenu || screenWidth > 780) && (
        <ul className="navlist">
          <li>
            <a className="items" href="#1">
              STORE
            </a>
          </li>
          <li>
            <a className="items" href="#1">
              Manual
            </a>
          </li>
          <li>
            <a className="items" href="#1">
              Contact us
            </a>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        <Hamburger
          direction="left"
          toggled={isOpen}
          duration={0.8}
          toggle={setOpen}
          color="#a72ed7"
        />
      </button>
    </div>
  );
}
