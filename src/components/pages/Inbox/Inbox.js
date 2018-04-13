import React from "react";
import "../GeneralStyles.css"
import "./Inbox.css";
import Selects from "../../atoms/Selects/Selects";
import InboxSection from "../../organisms/ChatSections/InboxSection";
import SentSection from "../../organisms/ChatSections/SentSection";
import TrashSection from "../../organisms/ChatSections/TrashSection";

const inboxData = ["All", "Today", "Yesterday"];

class Inbox extends React.Component{

  constructor(props) {
    super(props);


    this.state = {
      tab: "InboxChat",
      messagesInbox: [],
      messagesSent: [],
      messagesTrash: [],
      messagesTrashView: [],
      messagesInboxView: [],
      messagesSentView: [],
      isLoading: false
    }
  }

  componentWillMount() {
    this.setState({isLoading: true});
    fetch('/api/user/chat/inbox', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
        .then(res => res.json())
        .then(res => {
          let messageArray = res;
          let sum = 0;
          for (let index in messageArray) {
            for (let messageArrayIndex in messageArray[index]) {
              sum+= (typeof messageArray[index][messageArrayIndex] === "boolean") ?
                  !messageArray[index][messageArrayIndex] : 0;
            }
          }
          this.setState({
            messagesInboxView: res,
            messagesInbox: res,
            isLoading: false,
            sum: sum,
            messageData: res
          });

        });
    fetch('/api/user/chat/sent', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            messagesSentView: res,
            messagesSent: res,
            isLoading: false
          });

        });
  }

  onSelectChange = (selectFilter) => {

    if (selectFilter.target.value === 'All') {
      fetch('/api/user/chat/inbox', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            messagesInboxView: res
          });

        });
      fetch('/api/user/chat/sent', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            messagesSentView: res
          });

        });
    }

    if (selectFilter.target.value === 'Today') {
      let filterInputMessage = this.state.messagesInbox.filter((e) => {
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Today,"
      });
      this.setState({
        messagesInboxView: filterInputMessage
      });
      let filterSentMessage = this.state.messagesSent.filter((e) => {
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Today,"
      });
      this.setState({
        messagesSentView: filterSentMessage
      });
      let filterTrashMessage = this.state.messagesTrash.filter((e) => {
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Today,"
      });
      this.setState({
        messagesTrashView: filterTrashMessage
      })
    }
    if (selectFilter.target.value === 'Yesterday') {
      let filterInputMessage = this.state.messagesInbox.filter((e) => {
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Yesterday,"
      });
      this.setState({
        messagesInboxView: filterInputMessage
      });
      let filterSentMessage = this.state.messagesSent.filter((e) => {
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Yesterday,"
      });
      this.setState({
        messagesSentView: filterSentMessage
      });
      let filterTrashMessage = this.state.messagesTrash.filter((e) => {
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Yesterday,"
      });
      this.setState({
        messagesTrashView: filterTrashMessage
      })
    }

  };

  handleTabs = (value) => {
    this.setState({
      tab: value
    })
  };


  render(){

    return(
        <section>
          <header className="InboxHeader">
            <div className="LeftInboxHeader">
              <h2 className={this.state.tab === "InboxChat" ? "ChatIcon InboxHeaderIcon ActiveChat": "ChatIcon InboxHeaderIcon"}
                  onClick={() => this.handleTabs("InboxChat")}>
                Inbox({this.state.sum})
              </h2>
              <h2 className={this.state.tab === "Sent" ? "ChatIcon SentHeaderIcon ActiveChat": "ChatIcon SentHeaderIcon"}
                  onClick={() => this.handleTabs("Sent")}>
                Sent</h2>
              <h2 className={this.state.tab === "Trash" ? "ChatIcon TrashHeaderIcon ActiveChat": "ChatIcon TrashHeaderIcon"}
                  onClick={() => this.handleTabs("Trash")}>
                Trash</h2>
            </div>
            <div className="RightInboxHeader">
              <h2>Filter messages:</h2>
              <Selects
                  onChange={this.onSelectChange}
                  data={inboxData}
                  selectClass="Selects SelectWorkflow"
              />
            </div>
          </header>
          <div className="InBoxChat">
            {
              this.state.tab === "InboxChat" && this.state.isLoading === false ?
                  <InboxSection data={this.state.messagesInboxView.slice(0, 4)}/> : null
            },
            {
              this.state.tab === "Sent" ?
                  <SentSection data={this.state.messagesSentView.slice(0, 4)}/> : null
            },
            {
              this.state.tab === "Trash" ?
                  <TrashSection data={this.state.messagesSentView.slice(0, 4)}/> : null
            }
          </div>
        </section>
    )
  }
}

export default Inbox;