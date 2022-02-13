import "./bottom.scss";
import play from "./assets/play.png";
import apple from "./assets/apple.png";
import logo from "./assets/logo.png";
import ln from "./assets/in.png";
import fb from "./assets/fb.png";
import ig from "./assets/ig.png";
import tw from "./assets/tw.png";
import Success from "../success/Success";

export default function Bottom({ success, setSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <div className="bottom" id="contact">
      <div className={"bottomCont " + (success && "active")}>
        <div className="success">
          {success && <Success success={success} setSuccess={setSuccess} />}
        </div>
        <div className="left">
          <form onSubmit={handleSubmit} className="waiting">
            <label htmlFor="email" className="title">
              Join Our Waiting List
            </label>
            <div className="input">
              <input type="text" placeholder="Enter your email address" />
              <button className="join" type="submit">
                Join now
              </button>
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
          <a href="#intro">
            <img src={logo} alt="" />
          </a>
          <div className="text">(c) 2021 Azabox finance</div>
        </div>
        <div className="social">
          <a href="https://twitter.com/Myazabox?t_ANEBQZIfGaYWnz9wgKSg&s=09">
            {" "}
            <img src={tw} alt="" className="tw" />
          </a>
          <a href="https://www.linkedin.com/company/azabox">
            {" "}
            <img src={ln} alt="" className="ln" />
          </a>
          <a href="/">
            {" "}
            <img src={fb} alt="" className="fb" />
          </a>
          <a href="https://instagram.com/myazabox?utm_medium=cppy_link">
            {" "}
            <img src={ig} alt="" className="ig" />
          </a>
        </div>
      </div>
    </div>
  );
}
