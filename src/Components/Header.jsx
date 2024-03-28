import React from "react";

import homeImage from "../images/home.png"
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function Header() {

  return (
    <BrowserRouter forceRefresh={true}>
      <div className="box">
        <header>
          <div className="btn">
            <button className="button">
              <Link to="/">Home</Link>
            </button>
            <button className="button">
              <Link to="/discover">Discover</Link>
            </button>
            <button className="button">
              <Link to="/bestsellers">Bestsellers</Link>
            </button>
            <button className="button">
              <Link to="/genre">Genre </Link>
            </button>
          </div>
        </header>
      </div>
      <Switch>
        <Route exact path="/">
          <img className="bottom-space" src={homeImage} alt="" />
        </Route>
        {/* <Route path="/discover"></Route>
        <Route path="/add"></Route>
        <Route path="/about"></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
