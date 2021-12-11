import "./bottom.scss";
import play from "./assets/play.png";
import apple from "./assets/apple.png";
import logo from "./assets/logo.png";
import ln from "./assets/in.png";
import fb from "./assets/fb.png";
import ig from "./assets/ig.png";
import tw from "./assets/tw.png";

export default function Bottom() {
  return (
    <div className="bottom" id="contact">
      <div className="bottomCont">
        <div className="left">
          <form action="" className="waiting">
            <label htmlFor="email" className="title">
              Join Our Waiting List
            </label>
            <div className="input">
              <input type="text" placeholder="Enter your email address" />
              <button className="join">Join now</button>
            </div>
          </form>
        </div>
        <div className="right">
          <div className="title">Mobile App Coming Soon To</div>
          <div className="container">
            <div className="appContainer">
              <img src={play} alt="" />
              <div className="content">Play store</div>
            </div>
            <div className="appContainer">
              <img src={apple} alt="" />
              <div className="content">Apple store</div>
            </div>
          </div>
        </div>
      </div>

      <hr className="hor" />

      <div className="footer">
        <div className="logo">
          <img src={logo} alt="" />
          <div className="text">(c) 2021 Azabox finance</div>
        </div>
        <div className="social">
          <img src={tw} alt="" />
          <img src={ln} alt="" />
          <img src={fb} alt="" />
          <img src={ig} alt="" />
        </div>
      </div>
    </div>
  );
}
