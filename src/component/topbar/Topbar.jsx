import "./topbar.scss";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="logo">
          <a href="#intro">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="bar">
          <div className="barLeft">
            <div className="barCont">
              <Link to="/about" className="barLink">
                About Us
              </Link>
            </div>
            <div className="barCont">
              <a href="#business" className="barLink">
                For Business
              </a>
            </div>
            <div className="barCont">
              <a href="#contact" className="barLink">
                Contact Us
              </a>
            </div>
          </div>

          <div className="barRight">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
        <button className="join">Join Waitlist</button>
      </div>

      <div className={"menu " + (menuOpen && "active")}>
        <div className="menuContainer">
          <div className="menuCont">
            <Link
              to="/about"
              className="menuLink"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              About Us
            </Link>
          </div>
          <div className="menuCont">
            <a
              href="#business"
              className="menuLink"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              For Business
            </a>
          </div>
          <div className="menuCont">
            <a
              href="#contact"
              className="menuLink"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Contact Us
            </a>
          </div>

          <div className="button">
            <button className="join" onClick={() => setMenuOpen(!menuOpen)}>
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
