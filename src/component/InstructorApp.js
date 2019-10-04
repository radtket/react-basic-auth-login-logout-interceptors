import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListCoursesComponent from "./ListCoursesComponent";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import MenuComponent from "./MenuComponent";
// import AuthenticationService from "../service/AuthenticationService";
import AuthenticatedRoute from "./AuthenticatedRoute";

const InstructorApp = () => {
  return (
    <>
      <Router>
        <>
          <MenuComponent />
          <Switch>
            <Route component={LoginComponent} exact path="/" />
            <Route component={LoginComponent} exact path="/login" />
            <AuthenticatedRoute
              component={LogoutComponent}
              exact
              path="/logout"
            />
            <AuthenticatedRoute
              component={ListCoursesComponent}
              exact
              path="/courses"
            />
          </Switch>
        </>
      </Router>
    </>
  );
};

export default InstructorApp;
