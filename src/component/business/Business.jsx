import "./business.scss";
import firstImage from "./assets/1.png";
import secondImage from "./assets/2.png";
import thirdImage from "./assets/3.png";
import vector from "./assets/vector.png";

import {useState} from "react"

export default function Business() {
  const [businessSection, setBusinessSection] = useState(false);

  function handleClick(){
    setBusinessSection((prevState) => !prevState);
  }

  return (
    <div className="business" id="business">
      <div className="header">
        <div className="title">
          Our <span>Plans</span>
        </div>
        <div className="container">
          <button className="individual" style={businessSection?{backgroundColor: "#fff", color: "#371841"} : {backgroundColor: "#36e29a", color: "#fff"}} onClick={handleClick}>Individual plan</button>
          <button className="business" style={businessSection?{backgroundColor: "#36e29a", color: "#fff"} : {backgroundColor: "#fff", color: "#371841"}} onClick={handleClick}>Business plan</button>
        </div>
      </div>

      <div className="individualSection" style={businessSection?{ display: "none" } : {display: "block"}}>
        <div className="mid">
          <div className="background">
            <div className="content">
              <div className="contentTitle">Be Your Own Financial Manager.</div>
              <div className="budget">
                Budget. save. invest and track your cash flow
              </div>
              <div className="spend">
                Spend, save and invest. Your best financial solution all in one
                place, gives you <br /> control over your finances whenever,
                wherever. Reliable, secure and safe.
              </div>
              <button className="joim">Join the waiting list</button>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="featureTitle">
            Features available on the individual plan
          </div>

          <div className="firstCont">
            <div className="firstImg">
              <img src={firstImage} alt="" />
            </div>
            <div className="firstContent">
              <div className="circle">
                <img src={vector} alt="" />
              </div>
              <div className="tracking">Budget And Expense Tracking</div>
              <div className="trackCont">
                Keep tabs on your expenses. Know which expense is taking up too
                much of your budget. Personalize your account to suit you
                better.
              </div>
            </div>
          </div>

          <hr />

          <div className="secondCont">
            <div className="secondContent">
              <div className="circle">
                <img src={vector} alt="" />
              </div>
              <div className="save">Save In Style</div>
              <div className="saveCont">
                Automate and customize your savings to suit your goals, whether
                it’s a vacation, to buy a car or to make re-invest, your dream
                lifestyle can be achieved, with just a little bit of discipline.
              </div>
            </div>
            <div className="secondImg">
              <img src={secondImage} alt="" />
            </div>
          </div>

          <hr />

          <div className="thirdCont">
            <div className="thirdImg">
              <img src={thirdImage} alt="" />
            </div>
            <div className="thirdContent">
              <div className="circle">
                <img src={vector} alt="" />
              </div>
              <div className="warren">Be Like Warren</div>
              <div className="warrenCont">
                Make your money make you more money. Grow your investment with
                time. Like Albert Einstien would say, " Compound interest is the
                8th wonder of the world ", so Invest now, and live better.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="businessSection" style={businessSection?{ display: "block" } : {display: "none"}}>
        <div className="mid">
          <div className="background">
            <div className="content">
              <div className="contentTitle">
                Manage Your Business Finances Like An Expert
              </div>
              <div className="grow">
                Grow your business with our effective tool for financial
                management
              </div>
              <div className="expenses">
                With Azabox you can manage your inventory, financial records,
                budget and track your expenses <br /> as well as schedule
                payment. Take your business to the next level, take control of
                your finances.
              </div>
              <button className="joim">Join the waiting list</button>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="featureTitle">
            Features available on the business plan
          </div>

          <div className="firstCont">
            <div className="firstImg">
              <img src={firstImage} alt="" />
            </div>
            <div className="firstContent">
              <div className="circle">
                <img src={vector} alt="" />
              </div>
              <div className="plan">Plan with ease</div>
              <div className="planCont">
                Be up to date with your Finances, schedule those payments and
                get your business running smoothly. No need for bulky
                spreadsheets, get to plan and track your finances with ease.
              </div>
            </div>
          </div>

          <hr />

          <div className="secondCont">
            <div className="secondContent">
              <div className="circle">
                <img src={vector} alt="" />
              </div>
              <div className="manage">Manage your financial records</div>
              <div className="manageCont">
                No more bulky spreadsheets, manage your inventory and create
                invoices with ease. Keep track of goods. Simple and reliable.
              </div>
            </div>
            <div className="secondImg">
              <img src={secondImage} alt="" />
            </div>
          </div>

          <hr />

          <div className="thirdCont">
            <div className="thirdImg">
              <img src={thirdImage} alt="" />
            </div>
            <div className="thirdContent">
              <div className="circle">
                <img src={vector} alt="" />
              </div>
              <div className="track">Track the needful</div>
              <div className="trackCont">
                All business expenses will be sorted for taxes as you spend, so
                that way, you don't have to worry about them later. Track what
                your business is spending on.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
