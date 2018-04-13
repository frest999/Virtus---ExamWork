import React from "react";
import EnterBtn from "../../../atoms/Btns/EnterBtn";
import { withRouter } from "react-router";
import "../Forms.css";

class LogForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      username: "",
      password: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let userData = {
      login: this.state.username,
      pass: this.state.password
    };

    fetch("/api/auth", {
      headers: {
        "Content-type": "application/json"
      },
      method: "post",
      body: JSON.stringify(userData),
    })
        .then(res => res.json())
        .then(res => {
          if (res.check) {
            JSON.stringify(localStorage.setItem("userCheck", res.check));
            JSON.stringify(localStorage.setItem("username", this.state.username));
            console.log(this.state.username);
            this.props.history.push("/")
          } else {
            this.setState({
              username: "",
              password: "",
            });
          }
        });
  };

  handleChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  };
  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <div className="InputsBlock">
            <div className="inputIcon inputLogin">
              <input
                  className="MainFormInputs"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
              />
            </div>
            <div className="inputIcon inputPassword">
              <input
                  className="MainFormInputs"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
              />
            </div>
          </div>
          <EnterBtn/>
        </form>
    )
  }
}

export default withRouter(LogForm);
