import React from "react";
import "./InboxChat.css";

class ChatUserInfo extends React.Component {

  render() {
    const user = this.props.data;
    return (
        <div className="InboxUserInfo">
          <div className="InboxUserImg">
            <img src={user.img} alt={user.name}/>
            <span className="OnlineStatus"></span>
          </div>
          <h2 className="InboxUserName">{user.name}</h2>
          <p className="InboxUserPosition">{user.position}</p>
          <p className="InBoxUserText">{user.about}</p>
          {user.email && <p className="InBoxUserText">Email:</p>}
          <p className="InboxPersonalText">{user.email}</p>
          {user.phone && <p className="InBoxUserText">Phone:</p>}
          <p className="InboxPersonalText">{user.phone}</p>
          {user.address && <p className="InBoxUserText">Address:</p>}
          <p className="InboxPersonalText">{user.address}</p>
          {user.email && <p className="InBoxUserText">Organization:</p>}
          <p className="InboxPersonalText">{user.organization}</p>

        </div>
    )
  }
}

export default ChatUserInfo;