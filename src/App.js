import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <div className="main">
            <Switch>
              <Route path="/projects" component={Projects} exact />
            </Switch>
            <Switch>
              <Route path="/contact" component={Contact} exact />
            </Switch>
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
