import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
// import NotFound from "../pages/404";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import Navbar from "../components/Navbar";

export default function SourceRouter () {
  return (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route path = "/pageTwo"  component = {PageTwo}/>
                <Route exact path = "/pageOne" component = {PageOne} />
                <Route exact path = "/pageThree" component = {PageThree} />
                {/* <Route path="*">
                    <NotFound />
                </Route> */}
                <Redirect to="/" />

            </Switch>
        </div>
    </Router>
  );
};
