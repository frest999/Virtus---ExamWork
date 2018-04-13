import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MainStartForm from "../../organisms/MainStartForm/MainStartForm";
import "./AuthorizationPage.css";
import VirtusLogo from '../../../assets/img/virtus-logo.png';

class AuthorizationPage extends React.Component{

  componentWillMount() {
    if (localStorage.getItem("userCheck")) {
      return (
          this.props.history.push('/')
      )
    }
  }

  render(){
    return(
      <MuiThemeProvider>
        <div className="AuthorizationPage">
          <div className="TabsAndLogo">
            <MainStartForm/>
            <div className="MainLogoBlock">
              <img src={VirtusLogo} alt="Virtus"/>
              <h1>Virtus</h1>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default AuthorizationPage;