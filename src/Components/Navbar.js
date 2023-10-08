import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
  const navLink = document.querySelectorAll(".nav_link");
  const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.add("show-menu");
  };
  const handleSignOut=()=>{
    props.setLoggedIn(false)
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  // gsap.from(".home_points", 1.5, { opacity: 0, y: -300, delay: 0.2 });
  // gsap.from(".home_rocket", 1.5, { opacity: 0, y: 300, delay: 0.3 });
  // gsap.from(".home_planet-1", 1.5, { opacity: 0, x: -200, delay: 0.8 });
  // gsap.from(".home_planet-2", 1.5, { opacity: 0, x: 200, delay: 1 });
  // gsap.from(".home_cloud-1", 1.5, { opacity: 0, y: 200, delay: 1.2 });
  // gsap.from(".home_cloud-2", 1.5, { opacity: 0, x: 200, delay: 1.3 });
  // gsap.from(".home_content", 1.5, { opacity: 0, y: -100, delay: 1.4 });
  // gsap.from(".home_title img", 1.5, { opacity: 0, x: 100, delay: 1.6 });
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav_logo">
          <i className="ri-rocket-fill"></i>IIITT
        </Link>
        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list">
            <li className="nav_item">
              <Link to="/" className="nav_link">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/features" className="nav_link">
                StudentDesk
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/pricing" className="nav_link">
                Pricing
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/contact" className="nav_link">
                Contact
              </Link>
            </li>
          </ul>
          {props.loggedIn ? (
            <button to="sign" className="nav_button" onClick={handleSignOut}>
              Sign out
            </button>
          ) : (
            <Link to="signin" className="nav_button">
              Sign in
            </Link>
          )}
          <div className="nav_close" id="nav-close">
            <i className="ri-close-fill"></i>
          </div>
        </div>
        <div className="nav_toggle" id="nav-toggle">
          <i className="ri-apps-2-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
