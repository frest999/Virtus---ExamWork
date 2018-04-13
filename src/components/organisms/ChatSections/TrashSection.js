import React from "react";
import "./InboxSection.css";

class TrashSection extends React.Component{


  render(){
    return(
        <div className="TrashTitleBlock">
          <h2 className="TrashTitle">You have not deleted messages!</h2>
        </div>

    )
  }

}

export default TrashSection;