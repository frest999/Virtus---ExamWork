import React from "react";
import Box from "../../atoms/Box/Box";
import InBoxMessage from "../../atoms/InBoxMessage/InBoxMessage";


class MessageBox extends React.Component{
 constructor(props){
   super(props);
   this.state={
     sum: 0,
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

         let messageArray = res;
         let sum = 0;
         for (let index in messageArray) {
           for (let messageArrayIndex in messageArray[index]) {
             sum+= (typeof messageArray[index][messageArrayIndex] === "boolean") ?
                 !messageArray[index][messageArrayIndex] : 0;
           }
         }
         this.setState({
           sum: sum,
           messageData: res
         });

  })
 }

  sumMessage =(number)=> {
    this.setState({ sum: number})

  };

  render(){
    return(
        <Box headerBox={"Inbox"} span={this.state.sum} spanClass="InBoxPoint">
          {
            this.state.messageData.slice(0,3).map((item, id) => {
              return(
                  <div key={id}>
                    <InBoxMessage
                        classInBox="InBoxMessage"
                        userPhoto={item.userPhoto}
                        userName={item.name}
                        time={item.time}
                        text={item.text}
                        click={true}
                        bgMessage={item.statusRead}
                        allUnReadMess={this.state.sum}
                        sumMessage={this.sumMessage}
                    />
                  </div>
              )
            })
          }
        </Box>
    )
  }
}

export default MessageBox;