import React from "react";
import { Circle } from "rc-progress";
import "./CircleDiagram.css";

class CircleDiagram extends React.Component{
  render(){
    return(
        <li className="ProgressCircleBlock">
          <div className="ProgressCircle">
            <Circle
                     percent={this.props.data.percent}
                     strokeWidth="3"
                     trailWidth="3"
                     trailColor="#505464"
                     strokeColor="#2196f3"
            />
            <p className="Percent">{this.props.data.percent}%</p>
          </div>
          <div className="CircleDescription">
            <p className="CircleNumbers">{this.props.data.number}</p>
            <p className="CircleKind">{this.props.data.kind}</p>
          </div>
        </li>
    )
  }
}

export default CircleDiagram;