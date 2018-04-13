import React from "react";
import Box from "../../atoms/Box/Box";
import ProjectsTask from "../../atoms/ProjectsTask/ProjectsTask";

class ProjectsBox extends React.Component{

  constructor(){
    super();
    this.state={
      projectsData:[]
    }
  }

  componentWillMount(){
    fetch("/api/all/projects", {
      headers: {
        "Content-type": "application/json"
      },
      method: "get"
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            projectsData: res.filter((userId)=>{
              return userId.userId === "111ogSD"
            })
          });
        })
  }

  render(){
    return(
        <Box headerBox="Your projects">
          <ProjectsTask data={this.state.projectsData.slice(0,4)}/>
        </Box>
    )
  }
}

export default ProjectsBox;