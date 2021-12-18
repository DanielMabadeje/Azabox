import "./topbar.scss";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AboutTopbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="bar">
          <div className="barLeft">
            <div className="barCont">
              <Link to="/about" className="barLink">
                About Us
              </Link>
            </div>
            <div className="barCont">
              <Link to="/" className="barLink">
                For Business
              </Link>
            </div>
            <div className="barCont">
              <a href="#contact" className="barLink">
                Contact Us
              </a>
            </div>

            <button className="join">Join Waitlist</button>
          </div>

          <div className="barRight">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>

      <div className={"menu " + (menuOpen && "active")} style={menuOpen ? {visibility: "visible", transition: "all 1s ease"} : {visibility: "hidden", transition: "all 1s ease"}}>
        <div className="menuContainer" style={menuOpen ? {display: "block"} : {display: "none"}}>
          <div className="menuCont">
            <Link to="/about" className="menuLink" onClick={()=> setMenuOpen(!menuOpen)}>
              About Us
            </Link>
          </div>
          <div className="menuCont">
            <Link to="/" className="menuLink" onClick={()=> setMenuOpen(!menuOpen)}>
              For Business
            </Link>
          </div>
          <div className="menuCont">
            <a href="#contact" className="menuLink" onClick={()=> setMenuOpen(!menuOpen)}>
              Contact Us
            </a>
          </div>

          <div className="button"><button className="join"  onClick={()=> setMenuOpen(!menuOpen)}>Join Waitlist</button></div>
        </div>
      </div>
    </div>
  );
}
