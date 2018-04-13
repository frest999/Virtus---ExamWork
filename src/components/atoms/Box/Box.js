import React from "react";
import "./Box.css";

class Box extends React.Component{

  render(){
    return(
        <div className="Box">
          <header>
            <h2>{this.props.headerBox}<span className={this.props.spanClass}>{this.props.span}</span></h2>
          </header>
          {this.props.children}
        </div>
    )
  }
}

export default Box;