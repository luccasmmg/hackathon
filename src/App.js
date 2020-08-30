import React from "react";
import Header from "./Header.jsx";
import MaybeDataForm from "./MaybeDataForm.jsx";
import NoDataForm from "./NoDataForm.jsx";
import DataForm from "./DataForm.jsx";
import Main from "./Main.jsx";
import MainRequirement from "./MainRequirement.jsx";
import MainInfographic from "./MainInfographic.jsx";
import MainCompany from "./MainCompany.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import "./tailwind.output.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/requirement/" exact component={MainRequirement} />
        <Route path="/requirement/maybedata" exact component={MaybeDataForm} />
        <Route path="/requirement/nodata" exact component={NoDataForm} />
        <Route path="/requirement/data" exact component={DataForm} />
        <Route path="/infographic" exact component={MainInfographic} />
        <Route path="/company" exact component={MainCompany} />
        <Route path="/sobre" exact component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
