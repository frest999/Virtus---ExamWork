import React from "react";
import CircleDiagram from "../../atoms/CircleDiagram/CircleDiagram";
import "./HomeCircleDiagrams.css";



class HomeCircleDiagrams extends React.Component{

  render(){
    return(
        <ul className={this.props.classCircleChart}>
          {
           this.props.circlesData.map(item => {
              return (
                  <CircleDiagram data={item} key={item.id}/>
              )
            })
          }
        </ul>
    )
  }
}

export default HomeCircleDiagrams;