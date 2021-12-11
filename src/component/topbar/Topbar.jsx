import "./topbar.scss";
import logo from "./assets/logo.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="logo">
          <a href="#intro"><img src={logo} alt="" /></a>
        </div>
        <div className="bar">
          <a href="#about" className="barLink">About Us</a>
          <a href="#business" className="barLink">For Business</a>
          <a href="#contact" className="barLink">Contact Us</a>
          <button className="join">Join Waitlist</button>
        </div>
      </div>
    </div>
  );
}
