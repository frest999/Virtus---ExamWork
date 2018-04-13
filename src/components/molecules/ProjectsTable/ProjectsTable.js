import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Line } from 'rc-progress';
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import "./ProjectsTable.css";

class ProjectsTable extends React.Component{

  ProjectTitle =(cell, row)=>{
    return(
        <div
            className={
              row.progress === 0 ? "ProjectTableCol ProgressBorder ProgressBorderNull" :
              row.progress >= 100 ? "ProjectTableCol ProgressBorder ProgressBorderFull" :
              "ProjectTableCol ProgressBorder ProgressBorderNumber"}
        >
          <h3 className="ProjectTableTitle ProjectTitleFirst">{row.nameProject}</h3>
          <p className="ProjectTableSubtitle ProjectTitleFirst">{row.nameCompany}</p>
        </div>
    )
  };

  ProjectValue =(cell, row)=>{
    return(
        <div className="ProjectTableCol">
          <h3 className="ProjectTableTitle">${row.price}</h3>
        </div>
    )
  };

  ProjectDeadline =(cell, row)=>{
    return(
        <div className="ProjectTableCol">
          <h3 className="ProjectTableTitle">{row.firstDate}</h3>
          <p className="ProjectTableSubtitle">{row.dateLeft}</p>
        </div>
    )
  };

  ProjectSpent =(cell, row)=>{
    return(
        <div className="ProjectTableCol">
          <h3 className="ProjectTableTitle">{row.timeSpent}</h3>
        </div>
    )
  };

  ProjectProgress =(cell, row)=>{
    return(
        <div className="ProjectTableCol ProjectProgress">
          <h3 className="ProjectTableTitle">{row.progress}%</h3>
          <Line
              width="75%"
              percent={row.progress}
              strokeWidth="4"
              trailWidth="4"
              trailColor="#585c70"
              strokeColor={row.progress >= 100 ? "#4caf50" : "#2196f3"}
          />
        </div>
    )
  };

  ProjectStatus =(cell, row)=>{
    return(
        <div className="ProjectTableCol">
          <h3 className="ProjectTableTitle">{row.status}</h3>
        </div>
    )
  };

  ProjectAssigned =(cell, row)=>{
    return(
        <div className="ProjectTableCol ProjectAssigned">
          <div className="ProjectImgBlock">
            <img src={row.userImg} alt={row.userName}/>
          </div>
          <div className="ProjectUserInfo">
            <h3 className="ProjectTableTitle">{row.userName}</h3>
            <p className="ProjectTableSubtitle">{row.userPost}</p>
          </div>
        </div>
    )
  };

  ProjectMenu =()=>{
    return(
        <p className="ProjectIconMenu"></p>
    )
  };

  render(){
    const options = {
        sizePerPage: 7,
        hideSizePerPage: true,
        sizePerPageList: [ 7, 10, 15 ]
    };
    return(
      <div className="content">
        <BootstrapTable
            ref="table"
            bordered={false}
            data={this.props.data}
            pagination
            options = {options}
            tableHeaderClass="TableHeaderTitle"
            tableStyle={{border: "none"}}
            tableBodyClass="ProjectTableBody">
          <TableHeaderColumn
              width="13%"
              dataField="ProjectTitle"
              thStyle={{border: "none"}}
              dataFormat={this.ProjectTitle}
              isKey>
            Project title
          </TableHeaderColumn>
          <TableHeaderColumn
              width="7%"
              dataField="ProjectValue"
              thStyle={{border: "none"}}
              dataFormat={this.ProjectValue}
          >
            Value
          </TableHeaderColumn>
          <TableHeaderColumn
              width="16%"
              dataField="ProjectDeadline"
              thStyle={{border: "none"}}
              dataFormat={this.ProjectDeadline}
          >
            Deadline
          </TableHeaderColumn>
          <TableHeaderColumn
              width="9%"
              dataField="ProjectSpent"
              thStyle={{border: "none"}}
              dataFormat={this.ProjectSpent}
          >
            Time spent
          </TableHeaderColumn>
          <TableHeaderColumn
              dataField="ProjectProgress"
              thStyle={{border: "none"}}
              dataFormat={this.ProjectProgress}
          >
            Progress
          </TableHeaderColumn>
          <TableHeaderColumn
              width="13%"
              dataField="ProjectStatus"
              thStyle={{border: "none"}}
              dataFormat={this.ProjectStatus}
          >
            Status
          </TableHeaderColumn>
          <TableHeaderColumn
              dataField="ProjectAssigned"
              thStyle={{border: "none"}}
              dataFormat={this.ProjectAssigned}
          >
            Assigned to
          </TableHeaderColumn>
          <TableHeaderColumn
              width="5%"
              dataField="ProjectMenu"
              thStyle={{border: "none"}}
              dataFormat={this.ProjectMenu}
          >
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default ProjectsTable;