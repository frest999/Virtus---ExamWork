import React from "react";
import "./BoxUserPhoto.css";

class BoxUserPhoto extends React.Component{

  render(){
    return(
      <div className="BoxUserPhoto">
        <img src={this.props.imgSrc} alt={this.props.alt}/>
      </div>
    )
  }
}

export default BoxUserPhoto;