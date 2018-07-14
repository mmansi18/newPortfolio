import React, { Component } from "react";
import {HashRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Form from "./components/Form";
import Portfolio from "./components/Portfolio"

class App extends Component {
    render(){
        return(
            <Router>
                <div>
                  <Route exact path="/" component={AboutMe} />
                  <Route exact path="/contact" component={Form} />
                  <Route exact path="/portfolio" component={Portfolio} />
                </div>
            </Router>
        )
    }    
};
export default App;
