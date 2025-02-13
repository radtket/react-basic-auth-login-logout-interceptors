import React from "react";
import { Link, withRouter } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";

const MenuComponent = () => {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
          <a className="navbar-brand" href="http://www.in28minutes.com">
            in28Minutes
          </a>
        </div>
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link" to="/courses">
              Courses
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          {!isUserLoggedIn && (
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <Link
                className="nav-link"
                onClick={AuthenticationService.logout}
                to="/logout"
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(MenuComponent);
