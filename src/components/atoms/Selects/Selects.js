import React from "react";
import "./Selects.css"

class Selects extends React.Component{
  render(){
    return(
      <select onChange={this.props.onChange} className={this.props.selectClass}>
        {
          this.props.data.map((item, index) => {
            return (
              <option key={index} value={item}>{item}</option>
              )
            })}
      </select>
    )
  }
}

export default Selects;