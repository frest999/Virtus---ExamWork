import React from "react";
import ProfileImg from "../../../assets/img/UsersPhotos/userPhoto1.png";
import "./ProfileMenu.css";
import ProfileMenuBtn from "../Btns/ProfileMenuBtn";

class ProfileMenu extends React.Component{
  render(){
    return(
        <div className="ProfileMenuBlock">
          <div className="ProfileImg">
            <img src={ProfileImg} alt="ProfileImg"/>
          </div>
          <ProfileMenuBtn/>
        </div>
    )
  }
}

export default ProfileMenu;