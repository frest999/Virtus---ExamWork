import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './UserTable.css';


class UserTable extends React.Component {

  UserId =(cell,row)=>{
    return(
        <div className="ColumnsUserTable">
            <p className="UserPost">{row.userId}</p>
        </div>

    )
  };

  UserImg =(cell, row)=>{
    return(
        <div className="UserNameCol ColumnsUserTable">
          <div className="UserPhoto">
            <p className={row.active ? "OnlineImg": null}></p>
            <img src={row.userImg} alt=""/>
          </div>
          <div>
            <p className="UserName">{row.userName}</p>
            <p className="UserPost">{row.userPost}</p>
          </div>
        </div>
    )
  };

  UserActivity =(cell, row)=>{
    return(
        <div className="ColumnsUserTable">
          <p className={row.activeStatus ? "ActiveStatus OnlineUserStatus" : "ActiveStatus OfflineUserStatus"}>
            {row.activeStatus ? "Online now!": "Offline"}
          </p>
        </div>
    )
  };

  UserMail =(cell, row)=>{
    return(
        <div className="ColumnsUserTable">
          <a className="EmailLink" href="">{row.userEmail}</a>
        </div>
    )
  };

  UserPhone =(cell, row)=>{
    return(
        <div className="ColumnsUserTable">
          <a className="PhoneLink" href="">{row.userPhone}</a>
        </div>
    )
  };

  render() {
    const options = {
      sizePerPage: 7,
      hideSizePerPage: true,
      sizePerPageList: [ 7, 10, 15 ]
    };


    return (
        <div>
          <BootstrapTable
              ref='table'
              data={ this.props.data }
              pagination
              options = {options}
              tableHeaderClass='UserTableTitle'
              tableStyle={ { border: 'none' } }
              tableBodyClass='UserTableBody'>
            <TableHeaderColumn
                width="10%"
                dataField='id'
                thStyle={{border: 'none'}}
                dataFormat={this.UserId}
                isKey>
              User ID
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField='id'
                thStyle={{border: 'none'}}
                dataFormat={this.UserImg}
            >
              Name and Position
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField='mail'
                thStyle={{border: 'none'}}
                dataFormat={this.UserMail}>
              Mail
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField='phone'
                thStyle={{border: 'none'}}
                dataFormat={this.UserPhone}>
              Phone
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField='status'
                thStyle={{border: 'none'}}
                dataFormat={this.UserActivity}>
              Activity
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
    );
  }
}

export default UserTable;