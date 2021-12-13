import "./intro.scss";

import frame from "./assets/Frame.png";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="top">TAKE CONTROL OVER YOUR FINANCIALS</div>
        <div className="upperMid">
          Stay on the peak of your <span>bills</span> and manage your{" "}
          <span>finances</span> better
        </div>
        <div className="mid">Be The First To Know We Launch</div>
        <form action="" className="list">
          <label htmlFor="email" className="label">
            Join the waiting list
          </label>
          <div className="email">
            <input type="email" placeholder="Enter your email address" />
            <button className="join">Join now</button>
          </div>
        </form>
      </div>
      <div className="right">
        <img src={frame} alt="" />
      </div>
    </div>
  );
}
