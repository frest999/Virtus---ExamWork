import React from "react";
import ReactHighcharts from "react-highcharts";
import areaChart from "../../../config/areaChart.config";
import "./ChartBlock.css";
import HomeCircleDiagrams from "../HomeCircleDiagrams/HomeCircleDiagrams";

class ChartBlock extends React.Component{
  constructor(props){
    super(props);
    this.state={
      circlesData: [],
      areaChart: []
    }
  }

  componentWillMount(){
    fetch("/api/raport/diagram/week", {
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      method: "GET",
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            circlesData: res
          });
        });

    fetch("/api/raport/area/week", {
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      method: "GET",
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            areaChart: res
          });
          let chart = this.areaChart.getChart();
          chart.series[0].setData(this.state.areaChart, true);
          chart.xAxis[0].update({
            categories: ["MON","TUE","WED","THU","FRI","SAT","SUN"]
          });
        });
    }

  render(){
    return(
        <div className={this.props.classChart}>
          <HomeCircleDiagrams classCircleChart="HomeDiagramsBlock" circlesData={this.state.circlesData}/>
          <ReactHighcharts config={areaChart} ref={(chart) => {this.areaChart = chart}}/>
        </div>
    )
  }
}

export default ChartBlock;