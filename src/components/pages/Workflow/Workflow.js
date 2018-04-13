import React from "react";
import Selects from "../../atoms/Selects/Selects";
import "../GeneralStyles.css";
import "./Workflow.css";
import WorkflowDnD from "../../organisms/WorkflowDnD/WorkflowDnD";
import ProjectsTable from "../../molecules/ProjectsTable/ProjectsTable";

const sortProjects = ["All","Microsoft","Google","Symu.co","JCD.pl","Facebook","Themeforest"];

class Workflow extends React.Component{

  constructor(props){
    super(props);
    this.state={
      tab: "AllProjects",
      allProjectsList: []
    }
  }

  componentWillMount() {
    fetch("/api/all/projects", {
      headers: {
        "Content-type": "application/json"
      },
      method: "get"
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            allProjectsList: res
          });
        })
  }

  handleTabs =(tabItem)=> {
    this.setState({
      tab: tabItem
    })
  };

  filterCompany =(e)=>{
    const changeCompany = e.target.value;
    fetch("/api/all/projects", {
      headers: {
        "Content-type": "application/json"
      },
      method: "get"
    })
        .then(res => res.json())
        .then(res => {
          if(changeCompany === "All"){
            this.setState({
              allProjectsList: res,
              tab: "AllProjects"
            })
          }
          if(changeCompany === "Microsoft"){
            this.setState({
              allProjectsList: res.filter((e)=>{
                return e.nameCompany === "Microsoft"
              }),
              tab: "AllProjects"
            })
          }
          if(changeCompany === "Google"){
            this.setState({
              allProjectsList: res.filter((e)=>{
                return e.nameCompany === "Google"
              }),
              tab: "AllProjects"
            })
          }
          if(changeCompany === "Symu.co"){
            this.setState({
              allProjectsList: res.filter((e)=>{
                return e.nameCompany === "Symu.co"
              }),
              tab: "AllProjects"
            })
          }
          if(changeCompany === "JCD.pl"){
            this.setState({
              allProjectsList: res.filter((e)=>{
                return e.nameCompany === "JCD.pl"
              }),
              tab: "AllProjects"
            })
          }
          if(changeCompany === "Facebook"){
            this.setState({
              allProjectsList: res.filter((e)=>{
                return e.nameCompany === "Facebook"
              }),
              tab: "AllProjects"
            })
          }
          if(changeCompany === "Themeforest"){
            this.setState({
              allProjectsList: res.filter((e)=>{
                return e.nameCompany === "Themeforest"
              }),
              tab: "AllProjects"
            })
          }
        })
  };

  render(){
    return(
      <section className="AAA">
        <header className="WorkflowHeader">
          <div className="content WorkflowHeaderContent">
            <div className="LeftWorkflowHeader">
              <h2 className={this.state.tab === "AllProjects" ? "ActiveTitleHeader" : "TitleHeader"}
                  onClick={() => this.handleTabs("AllProjects")}>
                All projects ({this.state.allProjectsList.length})
              </h2>
              <h2 className={this.state.tab === "WorkflowDnD" ? "ActiveTitleHeader" : "TitleHeader"}
                  onClick={() => this.handleTabs("WorkflowDnD")}>
                Workflow
              </h2>
            </div>
            <div className="RightWorkflowHeader">
              <h2 className="SelectTitle">Show projects:</h2>
              {
                this.state.tab === "WorkflowDnD" ?
                    <Selects
                        onChange={this.filterCompany}
                        data={sortProjects}
                        selectClass="Selects SelectWorkflow"/>:
                    <Selects
                        onChange={this.filterCompany}
                        data={sortProjects}
                        selectClass="Selects SelectWorkflow"/>
              }
             </div>
          </div>
        </header>
        <div>
          {
            this.state.tab === "WorkflowDnD" ? <WorkflowDnD data={this.state.allProjectsList}/> :
                                               <ProjectsTable data={this.state.allProjectsList}/>
          }
        </div>
      </section>
    )
  }
}

export default Workflow;