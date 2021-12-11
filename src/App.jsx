import "./app.scss";

import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import About from "./component/about/About";
import Business from "./component/business/Business";
import Bottom from "./component/bottom/Bottom";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Topbar />
        <div className="section">
          <div className="intro">
            <Intro />
          </div>

          <div className="abt">
            <About />
          </div>

          <div className="bus">
            <Business />
          </div>

          <div className="bot">
            <Bottom />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
