import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./StatisticsTable.css";


class StatisticsTable extends React.Component{




  CampaingColumn =(cell, row)=> {
    return(
        <div className="StatisticColumn CompainCol">
          <p>{row.campaing}</p>
        </div>
    )
  };
  TimeColumn =(cell, row)=> {
    return(
        <div className="StatisticColumn">
          <p>{row.time}</p>
        </div>
    )
  };

  ViewsColumn =(cell, row)=> {
    return(
        <div className="StatisticColumn">
          <p>{row.views}</p>
        </div>
    )
  };

  VisitorsColumn =(cell, row)=> {
    return(
        <div className="StatisticColumn">
          <p>{row.visitors}</p>
        </div>
    )
  };

  CtrColumn =(cell, row)=> {
    return(
        <div className="StatisticColumn">
          <p>{row.ctr}%</p>
        </div>
    )
  };

  CpcColumn =(cell, row)=> {
    return(
        <div className="StatisticColumn">
          <p>${row.cpc}</p>
        </div>
    )
  };

  CpvColumn =(cell, row)=> {
    return(
        <div className="StatisticColumn">
          <p>${row.cpv}</p>
        </div>
    )
  };

  CpmColumn =(cell, row)=> {
    return(
        <div className="StatisticColumn">
          <p>${row.cpm}</p>
        </div>
    )
  };

  StatusColumn =(cell, row)=> {
    return(
        <div className="StatisticColumn">
          <p className={row.status === "Active" ? "StatisticStatusActive" : "StatisticStatusFalse"}>{row.status}</p>
        </div>
    )
  };

  numericSortFunc =(a, b, order)=> {
    if (order === 'desc') {
      return Number(b.views) - Number(a.views);
    } else {
      return Number(a.views) - Number(b.views);
    }
  };

  caretStyle = (direction) => {
    if (direction === 'asc') {
      return (
          <span className="CaretDown"></span>
      );
    }
    if (direction === 'desc') {
      return (
          <span className="CaretUp"></span>
      );
    }
    return (
        <span className="CaretDown"></span>
    );
  };

  render(){
    const options = {
      sizePerPage: 7,
      hideSizePerPage: true,
      sizePerPageList: [ 7, 10, 15 ]
    };
    return(
          <BootstrapTable
              ref="table"
              bordered={false}
              data={this.props.data}
              options = {options}
              tableHeaderClass="StatisticsTableHeader"
              tableStyle={{border: "none"}}
              tableBodyClass="StatisticsTableBody">
            <TableHeaderColumn
                width="25%"
                caretRender={this.caretStyle}
                dataField="campaing"
                thStyle={{border: "none"}}
                dataFormat={this.CampaingColumn}
                dataSort
                sortFunc={ this.numericSortFunc }
                isKey>
              Campaing
            </TableHeaderColumn>
            <TableHeaderColumn
                width="10%"
                caretRender={this.caretStyle}
                dataField="time"
                thStyle={{border: "none"}}
                dataFormat={this.TimeColumn}
                dataSort
                sortFunc={ this.numericSortFunc }
             >
              Time
            </TableHeaderColumn>
            <TableHeaderColumn
                width="10%"
                caretRender={this.caretStyle}
                dataField="views"
                thStyle={{border: "none"}}
                dataFormat={this.ViewsColumn}
                dataSort
                sortFunc={ this.numericSortFunc }
            >
              Views
            </TableHeaderColumn>
            <TableHeaderColumn
                width="10%"
                caretRender={this.caretStyle}
                dataField="visitors"
                thStyle={{border: "none"}}
                dataFormat={this.VisitorsColumn}
                dataSort
                sortFunc={ this.numericSortFunc }
            >
              Visitors
            </TableHeaderColumn>
            <TableHeaderColumn
                width="10%"
                caretRender={this.caretStyle}
                dataField="ctr"
                thStyle={{border: "none"}}
                dataFormat={this.CtrColumn}
                dataSort
                sortFunc={ this.numericSortFunc }
            >
              CTR
            </TableHeaderColumn>
            <TableHeaderColumn
                width="10%"
                caretRender={this.caretStyle}
                dataField="cpc"
                thStyle={{border: "none"}}
                dataFormat={this.CpcColumn}
                dataSort
                sortFunc={ this.numericSortFunc }
             >
              CPC
            </TableHeaderColumn>
            <TableHeaderColumn
                width="10%"
                caretRender={this.caretStyle}
                dataField="cpv"
                thStyle={{border: "none"}}
                dataFormat={this.CpvColumn}
                dataSort
                sortFunc={ this.numericSortFunc }
             >
              CPV
            </TableHeaderColumn>
            <TableHeaderColumn
                width="10%"
                caretRender={this.caretStyle}
                dataField="cpm"
                thStyle={{border: "none"}}
                dataFormat={this.CpmColumn}
                dataSort
                sortFunc={ this.numericSortFunc }
            >
              CPM
            </TableHeaderColumn>
            <TableHeaderColumn
                width="10%"
                caretRender={this.caretStyle}
                dataField="status"
                thStyle={{border: "none"}}
                dataFormat={this.StatusColumn}
                dataSort
                sortFunc={ this.numericSortFunc }
            >
              Status
            </TableHeaderColumn>
          </BootstrapTable>
    )
  }
}

export default StatisticsTable;