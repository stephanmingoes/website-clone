import React from "react";
import logo from "../../assets/altoleap_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import Effects from "./navbar.js";

const Menu = () => {
  return (
    <>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#process">Process</a>
      </li>
      <li>
        <a href="#team">Team</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );
};

const Navbar = () => {
  const { top, width, toggle, setToggle } = Effects();
  return (
    <div className="navcontainer">
      <nav
        className="navbar"
        style={
          width <= 900
            ? top > 0
              ? { background: "#111820 " }
              : { background: "#222222" }
            : top > 0
            ? { background: "#111820 " }
            : { background: "transparent" }
        }
      >
        <img src={logo} alt="Logo" />
        <ul className="navbar__links">
          <Menu />
        </ul>

        <div className="navbar__menu-icons">
          <GiHamburgerMenu
            color="#fff"
            size={35}
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </nav>
      {toggle && (
        <div
          className="navbar__links-menu"
          style={
            width <= 900 && top > 0
              ? { background: "#111820 " }
              : { background: "#222222" }
          }
        >
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
