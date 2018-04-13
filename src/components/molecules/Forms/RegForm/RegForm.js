import React from "react";
import EnterBtn from "../../../atoms/Btns/EnterBtn";
import "../Forms.css";

class RegForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      username : this.state.username,
      password : this.state.password,
    };

    fetch('/api/user' , {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(userData),
    });

    this.setState({
      username: '',
      password: '',
    })
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
                placeholder="Login"
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

export default RegForm;