import "./topbar.scss";
import logo from "./assets/logo.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="logo">
          <a href="#intro">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="bar">
          <div className="barCont">
            <a href="#about" className="barLink">
              About Us
            </a>
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

          <button className="join">Join Waitlist</button>
        </div>
      </div>
    </div>
  );
}
