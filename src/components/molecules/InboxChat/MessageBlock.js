import React from "react";
import "./InboxChat.css";
import userImg from "../../../assets/img/UsersPhotos/userPhoto1.png";


class ChatMessage extends React.Component {

  addMessage = (e) => {
    e.preventDefault();
    let myText = this.refs.input.value;
    let myMess = {};
    let date = new Date();
    let now = (date.toLocaleString("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }) + " , " + date.toLocaleString(undefined, {
      hour: "2-digit",
      minute: "2-digit"
    }));

    myMess.answer = true;
    myMess.date = now;
    myMess.text = myText;

    this.props.onAddMessage(myMess);
    this.refs.input.value = ""
  };

  render() {
    return (
        <div className="ChatMessage">
          {this.props.data.map((item, id) => {
            let messages;
            if(item.answer){
              messages = (
                  <div>
                    <div className="MUTuser">
                      <div className={"TextBlock TextBlockUser"}>
                        <p>{item.text}</p>
                      </div>
                      <div className="ImgChatBlock">
                        <img src={(item.answer ? userImg : this.props.dataImg.img)}
                             alt={item.name}
                        />
                      </div>
                    </div>
                    <p className="ChatDateText ChatDateUser">{item.date}</p>
                  </div>
              )
            }

            if(!item.answer) {
              messages = (
                  <div>
                    <div className="MUTanswer">
                      <div className="ImgChatBlock">
                        <img src={(item.answer ? userImg : this.props.dataImg.img)}
                             alt={item.name}
                        />
                      </div>
                      <p className="TextBlock TextBlockAnswer">{item.text}</p>
                    </div>
                    <p className="ChatDateText ChatDateAnswer">{item.date}</p>
                  </div>

              )
            }
            return (
                <div key={id} className="MessageTextBlock">
                  {messages}
                </div>
            )

          })
          }
           <form onSubmit={this.addMessage}>
              <input className="ChatMessageTextField" ref="input" type="text"  placeholder="Write a message"/>
              <button className="InputFile"/>
            </form>
        </div>
    )
  }
}

export default ChatMessage;