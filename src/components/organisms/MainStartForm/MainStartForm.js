import React from "react";
import {Tabs, Tab} from "material-ui/Tabs";
import "./MainStartForm.css";
import LogForm from "../../molecules/Forms/LogForm/LogForm";
import RegForm from "../../molecules/Forms/RegForm/RegForm";

class MainStartForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      value: 'b',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
        <Tabs
            className="TabsBlock"
            contentContainerClassName="TabContent"
            tabItemContainerStyle={{
              backgroundColor: "#2f3242",
              height: "80px",
              width: "400px",
            }}
            inkBarStyle={{
              backgroundColor: "#2196f3",
              height: "5px"
            }}
            value={this.state.value}
            onChange={this.handleChange}
        >
          <Tab label="Registration" value="a">
            <div>
              <h2 className="TabTitle">Registration <span>Form</span></h2>
              <RegForm/>
            </div>
          </Tab>
          <Tab label="Login" value="b">
            <div>
              <h2 className="TabTitle">Welcome <span>back!</span></h2>
              <LogForm/>
            </div>
          </Tab>
        </Tabs>
    );
  }
}

export default MainStartForm;