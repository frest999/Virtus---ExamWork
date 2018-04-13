import React from 'react';
import "./MessageNotification.css";

class MessageNotification extends React.Component {
  constructor() {
    super();
    this.state = {
      newMessages: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        newMessages: true
      })
    },3000)
  }

  render() {
    return (
        this.state.newMessages && <p className={this.props.coordinates}></p>
    )
  }
}

export default MessageNotification;