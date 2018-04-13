import React from "react";
import "./Btns.css";

class EnterBtn extends React.Component{
  render(){
    return(
      <div className="EnterBtnBlock">
        <button type="submit" className="Btn EnterBtn">Enter</button>
      </div>
    )
  }
}

export default EnterBtn;