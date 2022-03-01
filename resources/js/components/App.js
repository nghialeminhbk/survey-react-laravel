import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Result from './ResultSurvey/Result';
import Create from './CreateSurvey/Create';
const { default: Home } = require("./Home/Home")

function App() {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/surveys/:id" >
                        <Result />
                    </Route>
                    <Route path="/surveys/:id/create" >
                        <Create />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));

