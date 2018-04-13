import React from "react";

import MessageListBlock from "../../molecules/InboxChat/MessageListBlock";
import MessageBlock from "../../molecules/InboxChat/MessageBlock";
import InboxUserInfo from "../../molecules/InboxChat/InboxUsersInfo";

class SentSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activeChat: [],
      myMessage: {},
      chatId : 0,
      allData: [],
      userInfo: []
    }
  }

  componentWillMount(){
    this.setState({
      allData: this.props.data
    })
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      allData: nextProps.data
    })
  }

  messageOnClick = (e) => {
    this.setState({
      activeChat: e.chat,
      chatId: e.id,
      userInfo: e.info
    });
  };

  addMessage = (e) => {
    this.setState({
      myMessage: e,
      activeChat: [...this.state.activeChat, e]
    });
  };

  render(){
    return(
        <div className="ChatWrap">
          <div className="ChatListBlock">
            <MessageListBlock
                newData={this.state.myMessage}
                onClickMessage={this.messageOnClick}
                data={this.state.allData}
            />
          </div>
          <div className="ChatMessageBlock">
            <MessageBlock
                dataImg={this.state.userInfo}
                onAddMessage={this.addMessage}
                data={this.state.activeChat}
            />
          </div>
          <div className="ChatUserInfo">
            <InboxUserInfo data={this.state.userInfo}/>
          </div>
        </div>

    )
  }

}

export default SentSection;