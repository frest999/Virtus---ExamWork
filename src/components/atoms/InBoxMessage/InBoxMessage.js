import React from "react";
import "./InBoxMessage.css";

class InBoxMessage extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      unReadMessage: this.props.bgMessage
    }
  }

  handleRead =()=> {
    if(!this.state.unReadMessage ){
      this.props.sumMessage(this.props.allUnReadMess - 1);
    }
    this.setState({
      unReadMessage: true
    });
  };

  render(){
    return(
        <div onClick={this.props.click ? this.handleRead : null} className="InBoxMessage">
          <div className="InBoxPhoto">
            <img src={this.props.userPhoto} alt={this.props.userName}/>
          </div>
          <div className="InBoxInfo">
            <div className="InBoxHeader">
              <p className="InBoxName">{this.props.userName}</p>
              <p className={!this.state.unReadMessage ? "InBoxTime UnreadMessage":"InBoxTime"}>{this.props.time}</p>
            </div>
            <p className="InBoxText">{this.props.text}</p>
          </div>
        </div>
    )
  }
}

export default InBoxMessage;