import React from "react";
import "./Notification.css";
import MessageNotification from "../MessageNotification/MessageNotification";
import InBoxMessage from "../InBoxMessage/InBoxMessage";

class Notification extends React.Component{
  constructor(){
    super();
    this.state={
      messageList: false,
      messageData: []
    }
  }

  componentWillMount(){
    fetch("/api/message/list", {
      headers: {
        "Content-type": "application/json"
      },
      method: "get"
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            messageData: res
          });
        })
  }


  handleMessage =()=>{
    this.setState({
      messageList: !this.state.messageList
    })
  };

  render(){
    let MessageData;
    if(this.state.messageList){
      MessageData = (
          <div className="NotificationList">
            {
              this.state.messageData.slice(0, 5).map((item, id) => {
                return (
                    <div key={id}>
                      <InBoxMessage
                          classInBox="NotificationMessageList InBoxMessage"
                          userPhoto={item.userPhoto}
                          userName={item.name}
                          time={item.time}
                          text={item.text}
                          click={false}
                          bgMessage={item.statusRead}
                      />
                    </div>
                )
              })
            }
          </div>
      )
    }
    return(
        <div className="NotificationBlock">
          <MessageNotification coordinates="NewMessageIcon MainNotification"/>
          <button onClick={this.handleMessage} className="Notification"></button>
          {MessageData}
        </div>
    )
  }
}

export default Notification;