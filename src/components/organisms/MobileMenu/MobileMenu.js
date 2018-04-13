import React from "react";
import {NavLink} from "react-router-dom";
import "./MobileMenu.css";

class MobileMenu extends React.Component{
  constructor(){
    super();
    this.state={
      mobileMenu: false
    }
  }

  handleMobileMenu =()=>{
    this.setState({
     mobileMenu: !this.state.mobileMenu
    })
  };

  render(){
    let activeMobileMenu;
    if(this.state.mobileMenu){
      activeMobileMenu = (
          <ul className="MobileMenu">
            <li><NavLink to="/" exact activeClassName={"ActiveMainNav"}>Home page</NavLink></li>
            <li><NavLink to="/workflow" activeClassName={"ActiveMainNav"}>Workflow</NavLink></li>
            <li><NavLink to="/raport" activeClassName={"ActiveMainNav"}>Raport</NavLink></li>
            <li><NavLink to="/inbox" activeClassName={"ActiveMainNav"}>Inbox</NavLink></li>
            <li><NavLink to="/users"  activeClassName={"ActiveMainNav"}>Users</NavLink></li>
          </ul>
      )
    }
    return(
          <nav>
           <button onClick={this.handleMobileMenu} className="MobileMenuBtn"></button>
            {activeMobileMenu}
          </nav>
    )
  }
}

export default MobileMenu;