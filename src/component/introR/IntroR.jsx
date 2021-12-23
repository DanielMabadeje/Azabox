import "./introR.scss";

export default function IntroR() {
  return (
    <div className="introR">
      <form action="" className="list">
        <label htmlFor="email" className="label">
          Join the waiting list
        </label>
        <div className="email">
          <input type="email" placeholder="Enter your email address" />
          <button className="join">Join now</button>
        </div>
      </form>
      <div className="right">
        <img src="assets/img/Frame.png" alt="" />
      </div>
    </div>
  );
}
