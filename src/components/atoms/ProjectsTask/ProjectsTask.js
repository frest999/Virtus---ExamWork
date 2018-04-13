import React from "react";
import BoxUserPhoto from "../Box/BoxUserPhoto/BoxUserPhoto";
import "./ProjectsTask.css";

class ProjectsTask extends React.Component{

  render(){
    return(
        <div>
          {this.props.data.map((item, id) => {
            return (
                <div className="ProjectsTask" key={id}>
                  <div className="TaskInfo">
                    <BoxUserPhoto imgSrc={item.userImg} alt="User1"/>
                    <div className="ProjectsDescription">
                      <h3 className="NameProjects">{item.nameProject}</h3>
                      <p className="NameCompany">{item.nameCompany}
                        <span className="PriceProjects">${item.price}</span></p>
                    </div>
                  </div>
                  <button className="TaskMenu"></button>
                </div>
            )
          })}
        </div>


    )
  }
}

export default ProjectsTask;