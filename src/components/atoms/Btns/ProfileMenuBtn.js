import React from "react";
import { withRouter } from 'react-router';
import "./Btns.css";

class ProfileMenuBtn extends React.Component{

  constructor(props){
    super(props);
     this.state={
       dropDownMenu: false
     }
  }

  handleDropDown = () => {
    this.setState({
      dropDownMenu: !this.state.dropDownMenu
    })
  };

  signOut =()=>{
    localStorage.clear("username");
    localStorage.clear("password");
    this.props.history.push('/login');
  };

  render(){
    const userName = localStorage.getItem("username");
    let ProfileMenuItems;

    if(this.state.dropDownMenu){
      ProfileMenuItems = (
          <div className="ProfileMenuItems">
            <p>Signed in as <span className="UserName">{userName}</span></p>
            <ul>
              <li>Your profile</li>
              <li>Settings</li>
              <li>Help</li>
            </ul>
            <button className="Btn SignOutBtn" onClick={this.signOut}>Sign out</button>
          </div>
      )
    }
    return(
     <div>
      <button className="Btn ProfileMenuBtn" onClick={this.handleDropDown}></button>
      {ProfileMenuItems}
     </div>
    )
  }
}

export default withRouter(ProfileMenuBtn);