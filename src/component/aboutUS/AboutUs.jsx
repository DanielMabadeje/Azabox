import "./aboutUs.scss";
import AboutTopbar from "../topbar/AboutTopbar";
import Bottom from "../bottom/Bottom";
import logo from "./assets/logo.png";

export default function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="top">
        <AboutTopbar />
      </div>
      <div className="us">
        <div className="left">
          <div className="title">
            About <span>Us</span>
          </div>
          <div className="content">
            A few things you need to know about azabox
          </div>
        </div>

        <div className="right">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="mission">
        <div className="title">
          Our <span>mission</span>
        </div>
        <div className="content">
          We're on a path to make financial management accessible to individuals
          and businesses who want to take personal control of their finances.
        </div>
      </div>
      <div className="story">
        <div className="cont">
          <div className="title">
            Our <span>story</span>
          </div>
          <div className="content">
            Azabox is building a smart financial management system for users to
            plan, spend, track, save and invest their money with ease. At
            Azabox, our values are in service to our customers. We believe
            there's a more enlightened way to manage finances. Financial
            management should be built to work for everyone. That's why we
            Azabox lets you manage your finances on your own terms and pace. We
            help you plan your finances, track your expenses, save and invest
            your funds securely all in one place, giving you control over your
            finances whenever, wherever. Reliably, secure and safe.
          </div>
        </div>
        <div className="container">
          So, have we convinced you enough? if we have, why not sign up to our
          waiting list so you’ll be notified when we launch
        </div>
      </div>
      <div className="bottom">
          <Bottom />
      </div>
    </div>
  );
}
