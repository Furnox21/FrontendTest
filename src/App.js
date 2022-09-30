import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./Component/Header";
import ListStudent from "./Student/ListStudent";
import CreateStudent from "./Student/CreateStudent";
import Details from "./Student/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListStudent}></Route>
            <Route path="/students" component={ListStudent}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/add-student/:id" component={CreateStudent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
