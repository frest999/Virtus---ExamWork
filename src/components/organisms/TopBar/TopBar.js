import React from "react";
import VirtusLogo from "../../../assets/img/virtus-logo.png";
import AddBtn from "../../atoms/Btns/AddBtn";
import Search from "../../atoms/Search/Search";
import Notification from "../../atoms/Notification/Notification";

import "./TopBar.css";
import ProfileMenu from "../../atoms/ProfileMenu/ProfileMenu";
import MobileMenu from "../MobileMenu/MobileMenu";

class TopBar extends React.Component{
  render(){
    return(
      <header className="TopBar">
        <div className="MainLogo">
          <img src={VirtusLogo} alt="Virtus"/>
          <h1>Virtus</h1>
        </div>
        <ul className="TopRightBlock">
          <li><AddBtn/></li>
          <li><Search/></li>
          <li><Notification/></li>
          <li><ProfileMenu/></li>
          <li className="MobileMenuNav"><MobileMenu/></li>
        </ul>
      </header>
    )
  }
}

export default TopBar;