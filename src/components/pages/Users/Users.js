import React from "react";
import "../GeneralStyles.css";
import "./Users.css";
import Selects from "../../atoms/Selects/Selects";
import UserTable from "../../molecules/UserTable/UserTable";

const usersSort = ["All Users","Online", "Offline"];

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersStatus: [],
      userList: []
    }
  }

  componentWillMount() {
    fetch("/api/all/users", {
      headers: {
        "Content-type": "application/json"
      },
      method: "get"
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            userList: res,
            usersStatus: res
          })
        })
  }


  render(){
    const sortOnStatusUser =(e)=> {
      if(e.target.value === "All Users"){
        this.setState({
          usersStatus: this.state.userList
        });
      }
      else if (e.target.value === "Online") {
        let activity = this.state.userList.filter((user) => {
              return user.activeStatus
            }
        );
        this.setState({
          usersStatus: activity
        })

      }
      else if (e.target.value === "Offline") {
        let activity = this.state.userList.filter((user) => {
              return !user.activeStatus
            }
        );
        this.setState({
          usersStatus: activity
        });

      }
    };
    return(
        <section>
          <header className="UserSectionHeader">
            <h2 className="UserSectionTitle">Users ({this.state.usersStatus.length})</h2>
           <div className="RightUsersCol">
           <h2 className="UserSort">Users sort:</h2>
            <Selects
                onChange={sortOnStatusUser}
                data={usersSort}
                selectBlockClass="SelectLabel SelectBlock SelectBlockSort"
                selectClass="Selects SelectWorkflow"/>
           </div>
          </header>
          <div className="content">
            <UserTable data={this.state.usersStatus}/>
          </div>
        </section>
    )
  }
}

export default Users;