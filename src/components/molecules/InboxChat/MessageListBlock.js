import React from "react";
import "./InboxChat.css";

class ChatList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeChat: [...this.props.data],
    }
  }

  listClick = (e) => {
    this.props.onClickMessage(e);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeChat: nextProps.data
    });
  }

  render() {
    return (
        <div className="ChatList">
          {this.state.activeChat.map((item, index) => {
            return (
                <div onClick={() => this.listClick(item)} key={index} className="MessageChatItem">
                  <div className="HeaderListBlock">
                    <div className="NameListBlock">
                      <div className="ChatListImg">
                        <img src={item.img} alt={item.name}/>
                      </div>
                      <p className="ChatListName">{item.name}</p>
                    </div>
                    <div className={!item.read? "ChatListDate ChatListUnread": "ChatListDate" }>
                      <span>{item.chat[item.chat.length - 1].date}</span>
                    </div>
                  </div>
                  <p className="ChatListText">
                    {item.chat[item.chat.length - 1].text}
                  </p>
                </div>
            )
          })}

        </div>
    )
  }
}

export default ChatList;