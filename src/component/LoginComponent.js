import React, { Component } from "react";
import AuthenticationService from "../service/AuthenticationService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "in28minutes",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginClicked = () => {
    const { username, password } = this.state;
    const { history } = this.props;
    // in28minutes,dummy
    // if(this.state.username==='in28minutes' && this.state.password==='dummy'){
    //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
    //     this.props.history.push(`/courses`)
    //     //this.setState({showSuccessMessage:true})
    //     //this.setState({hasLoginFailed:false})
    // }
    // else {
    //     this.setState({showSuccessMessage:false})
    //     this.setState({hasLoginFailed:true})
    // }

    AuthenticationService.executeBasicAuthenticationService(username, password)
      .then(() => {
        AuthenticationService.registerSuccessfulLogin(username, password);
        history.push(`/courses`);
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });

    // AuthenticationService
    //     .executeJwtAuthenticationService(username, password)
    //     .then((response) => {
    //         AuthenticationService.registerSuccessfulLoginForJwt(username, response.data.token)
    //         history.push(`/courses`)
    //     }).catch(() => {
    //         this.setState({ showSuccessMessage: false })
    //         this.setState({ hasLoginFailed: true })
    //     })
  };

  render() {
    const {
      username,
      password,
      hasLoginFailed,
      showSuccessMessage,
    } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {/* <ShowInvalidCredentials hasLoginFailed={hasLoginFailed}/> */}
          {hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {showSuccessMessage && <div>Login Sucessful</div>}
          {/* <ShowLoginSuccessMessage showSuccessMessage={showSuccessMessage}/> */}
          User Name:{" "}
          <input
            name="username"
            onChange={this.handleChange}
            type="text"
            value={username}
          />
          Password:{" "}
          <input
            name="password"
            onChange={this.handleChange}
            type="password"
            value={password}
          />
          <button
            className="btn btn-success"
            onClick={this.loginClicked}
            type="button"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
