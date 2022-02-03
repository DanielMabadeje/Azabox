import "./intro.scss";

import rectangle from "./assets/rectangle.png";
import unsplash from "./assets/unsplash.png";
import unsplash1 from "./assets/unsplash1.png";
import unsplash2 from "./assets/unsplash2.png";
import frame2 from "./assets/Frame2.png";
import Success from "../success/Success";

export default function Intro({ success, setSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className={"intro " + (success && "active")} id="intro">
      <div className="success">
        {success && <Success success={success} setSuccess={setSuccess} />}
      </div>
      <div className="left">
        <div className="top">TAKE CONTROL OVER YOUR FINANCIALS</div>
        <div className="upperMid">
          Stay on the peak of your <span>bills</span> and manage your{" "}
          <span>finances</span> better
        </div>
        <div className="mid">
          Be the first to know we launch, Join our wait list today
        </div>
        <form onSubmit={handleSubmit} className="list">
          <div className="email">
            <input
              type="email"
              required
              placeholder="Enter your email address"
            />
            <button type="submit" className="join">
              Join now
            </button>
          </div>
        </form>
      </div>

      <div className="right">
        <img src={frame2} alt="" />
      </div>
    </div>
  );
}
