import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import "./components/pages/GeneralStyles.css";
import TopBar from "./components/organisms/TopBar/TopBar";
import SideBar from "./components/organisms/SideBar/SideBar";

class PrivateLayout extends React.Component {

  render ()  {
    const {component: Component, ...rest} =  this.props;
    return (
        <Route {...rest} render={() => {
          if (!localStorage.getItem("userCheck")){
            return <Redirect to="/login"/>
          }
          else if (localStorage.getItem("userCheck")) {
            return (
                <div>
                  <TopBar/>
                  <div className="ContentBlock">
                    <SideBar/>
                    <div className="ComponentStyle">
                      <Component/>
                    </div>
                  </div>
                </div>
            )
          }
        }}/>
    )
  };
}

export default PrivateLayout;