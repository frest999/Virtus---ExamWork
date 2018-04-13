import React from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./WorkflowDnD.css";

//component
import WorkflowColumn from "../../molecules/WorkflowColumn/WorkflowColumn";

class WorkflowDnD extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      statusProject: this.props.data
    };
  }
  
  render() {
    const quened = this.state.statusProject.filter((project)=>{
      return project.status === "Quened";
    });

    const planning = this.state.statusProject.filter((project)=>{
      return project.status === "Planning";
    });
    const design = this.state.statusProject.filter((project)=>{
      return project.status === "Design";
    });
    const development = this.state.statusProject.filter((project)=>{
      return project.status === "Development";
    });
    const testing = this.state.statusProject.filter((project)=>{
      return project.status === "Testing";
    });
    const completed = this.state.statusProject.filter((project)=>{
      return project.status === "Completed";
    });
    return (
        <div className="content">
          <div className="WorkflowContent">
            <WorkflowColumn name="Quened" id={1} list={quened} />
            <WorkflowColumn name="Planning" id={2} list={planning} />
            <WorkflowColumn name="Design" id={3} list={design} />
            <WorkflowColumn name="Development" id={4} list={development} />
            <WorkflowColumn name="Testing" id={5} list={testing} />
            <WorkflowColumn name="Completed" id={6} list={completed} />
          </div>
        </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(WorkflowDnD);