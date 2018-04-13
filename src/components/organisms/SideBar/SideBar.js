import React from "react";
import {NavLink} from "react-router-dom";
import "./SideBar.css";
import MessageNotification from "../../atoms/MessageNotification/MessageNotification";

class SideBar extends React.Component{
  render(){
    return(
      <nav>
        <ul className="SideBar">
          <li><NavLink to="/" exact className="LeftBarIcon HomeIcon" activeClassName={"ActiveMainNav"}></NavLink></li>
          <li><NavLink to="/workflow" className="LeftBarIcon WorkflowIcon" activeClassName={"ActiveMainNav"}></NavLink></li>
          <li><NavLink to="/raport" className="LeftBarIcon ProjectsIcon" activeClassName={"ActiveMainNav"}></NavLink></li>
          <li>
            <NavLink to="/inbox" className="LeftBarIcon RaportIcon" activeClassName={"ActiveMainNav"}>
              <MessageNotification coordinates="NewMessageIcon InBoxNotification"/>
            </NavLink>
          </li>
          <li><NavLink to="/users" className="LeftBarIcon InboxIcon" activeClassName={"ActiveMainNav"}></NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default SideBar;