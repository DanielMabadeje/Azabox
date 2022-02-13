import "./app.scss";

import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import About from "./component/about/About";
import Business from "./component/business/Business";
import Bottom from "./component/bottom/Bottom";
import AboutUs from "./component/aboutUS/AboutUs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className={"section " + (success && "active")}>
              <div className="intro">
                <Intro success={success} setSuccess={setSuccess} />
              </div>

              <div className="abt">
                <About />
              </div>

              <div className="bus">
                <Business />
              </div>

              <div className="bot">
                <Bottom success={success} setSuccess={setSuccess} />
              </div>
            </div>
          </Route>
          <Route path="/about">
            <div className="aboutUs">
              {" "}
              <AboutUs />{" "}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
