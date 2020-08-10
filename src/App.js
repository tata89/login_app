import React from 'react';
import './App.css';
import Loginform from "./components/Login_form/Loginform"
import EmpList from "./components/EmployeeList/EmpList"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Loginform} />
          <Route path="/Emplist" component={EmpList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
