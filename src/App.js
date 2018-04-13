import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateLayout from "./PrivateLayout";

//pages
import AuthorizationPage from "./components/pages/AuthorizationPage/AuthorizationPage";
import Home from "./components/pages/Home/Home";
import Workflow from "./components/pages/Workflow/Workflow";
import Raport from "./components/pages/Raport/Raport";
import Inbox from "./components/pages/Inbox/Inbox";
import Users from "./components/pages/Users/Users";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/login" component={AuthorizationPage} />

            <PrivateLayout exact path="/" component={Home}/>
            <PrivateLayout exact path="/workflow" component={Workflow}/>
            <PrivateLayout exact path="/raport" component={Raport}/>
            <PrivateLayout exact path="/inbox" component={Inbox}/>
            <PrivateLayout exact path="/users" component={Users}/>
            <PrivateLayout component={PageNotFound}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
