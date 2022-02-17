import "./business.scss";
import expenditure from "./assets/expenditure.png";
import bill from "./assets/bill.png";
import save from "./assets/save.png";
import manage from "./assets/manage.png";
import plan from "./assets/plan.png";
import track from "./assets/track.png";

import { useState } from "react";

export default function Business() {
  const [businessSection, setBusinessSection] = useState(false);
  const [individualSection, setIndividualSection] = useState(true);

  return (
    <div className="business" id="business">
      <div className="header">
        <div className="title">
          Our <span>Plans</span>
        </div>
        <div className="container">
          <button
            className="individual"
            style={
              individualSection
                ? { backgroundColor: "#36e29a", color: "#fff",  }
                : { backgroundColor: "#fff", color: "#371841",  }

                
            }
            onClick={() =>
              setIndividualSection(!individualSection) ||
              setBusinessSection(!businessSection)
            }
          >
            Individual plan
          </button>
          <button
            className="business"
            style={
              businessSection
                ? { backgroundColor: "#36e29a", color: "#fff" }
                : { backgroundColor: "#fff", color: "#371841" }
            }
            onClick={() =>
              setBusinessSection(!businessSection) ||
              setIndividualSection(!individualSection)
            }
          >
            Business plan
          </button>
        </div>
      </div>

      <div
        className={
          individualSection ? "individualSection active" : "individualSection"
        }
      >
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
              <a href="#intro" className="joim">
                Join the waiting list
              </a>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="featureTitle">
            Features available on the individual plan
          </div>

          <div className="firstCont">
            <div className="firstImg">
              <img src={expenditure} alt="" />
            </div>
            <div className="firstContent">
              <div className="tracking">Expenditure Tracking</div>
              <div className="trackCont">
                Keep tabs on your expenses. Know which expense is taking up too
                much of your budget. Personalize your account to suit you
                better.
              </div>
              <br />
              <a href="#intro">Join waitlist {">>"}</a>
            </div>
          </div>

          <hr />

          <div className="secondCont">
            <div className="secondContent">
              <div className="save">Bills Payment</div>
              <div className="saveCont">
                Pay bills when due, autamoate bill payment and never have to
                worry about bill pending anymore. Simply free and stressless
              </div>
              <br />
              <a href="#intro">Join waitlist {">>"}</a>
            </div>
            <div className="secondImg">
              <img src={bill} alt="" />
            </div>
          </div>

          <hr />

          <div className="thirdCont">
            <div className="thirdImg">
              <img src={save} alt="" />
            </div>
            <div className="thirdContent">
              <div className="warren">Save In Style</div>
              <div className="warrenCont">
                Automate and customize your savings to suit your goals, whether
                it’s a vacation, to buy a car or to make re-invest, your dream
                lifestyle can be achieved, with just a little bit of discipline.
              </div>
              <br />
              <a href="#intro">Join waitlist {">>"}</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          businessSection ? "businessSection active" : "businessSection"
        }
      >
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
              <a href="#intro" className="joim">
                Join the waiting list
              </a>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="featureTitle">
            Features available on the business plan
          </div>

          <div className="firstCont">
            <div className="firstImg">
              <img src={plan} alt="" />
            </div>
            <div className="firstContent">
              <div className="plan">Plan With Ease</div>
              <div className="planCont">
                Be up to date with your Finances, schedule those payments and
                get your business running smoothly. No need for bulky
                spreadsheets, get to plan and track your finances with ease.
              </div>
              <br />
              <a href="#intro">Join waitlist {">>"}</a>
            </div>
          </div>

          <hr />

          <div className="secondCont">
            <div className="secondContent">
              <div className="manage">Manage Your Financial Records</div>
              <div className="manageCont">
                No more bulky spreadsheets, manage your inventory and create
                invoices with ease. Keep track of goods. Simple and reliable.
              </div>
              <br />
              <a href="#intro">Join waitlist {">>"}</a>
            </div>
            <div className="secondImg">
              <img src={manage} alt="" />
            </div>
          </div>

          <hr />

          <div className="thirdCont">
            <div className="thirdImg">
              <img src={track} alt="" />
            </div>
            <div className="thirdContent">
              <div className="track">Track The Needful</div>
              <div className="trackCont">
                All business expenses will be sorted for taxes as you spend, so
                that way, you don't have to worry about them later. Track what
                your business is spending on.
              </div>
              <br />
              <a href="#intro">Join waitlist {">>"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
