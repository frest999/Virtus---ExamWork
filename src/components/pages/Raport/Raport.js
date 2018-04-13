import React from "react";
import ReactHighcharts from "react-highcharts";
import "../GeneralStyles.css";
import "./Raport.css";
import HomeCircleDiagrams from "../../molecules/HomeCircleDiagrams/HomeCircleDiagrams";
import areaChart from "../../../config/areaChart.config";
import Selects from "../../atoms/Selects/Selects";
import StatisticsTable from "../../molecules/StatisticsTable/StatisticsTable";

const periodRaport = ["Week","Month","Year"];


const statisticsData = [
  {
    id: "st1",
    campaing: "Lorem ipsum doler sit amet tetur",
    time: "6 days",
    views: 358000,
    visitors: 58200,
    ctr: 25,
    cpc: 3.02,
    cpv: 2.51,
    cpm: 28.35,
    status: "Active"

  },
  {
    id: "st2",
    campaing: "Sed do eiusmod tempor ",
    time: "7 hours",
    views: 1200,
    visitors: 800,
    ctr: 10,
    cpc: 8.45,
    cpv: 6.13,
    cpm: 45.22,
    status: "Disable"

  },
  {
    id: "st3",
    campaing: "Consectetur adipisicing elit sed",
    time: "3 days",
    views: 69000,
    visitors: 7300 ,
    ctr: 19,
    cpc: 6.22,
    cpv: 3.90,
    cpm: 37.80,
    status: "Active"

  }
];

class Raport extends React.Component{

  constructor(props){
    super(props);
    this.state={
      circlesData: [],
      areaChart: [],
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

  handleChange = (e) => {
    if (e.target.value === "Week") {
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
    }
    if (e.target.value === "Month") {
      fetch("/api/raport/diagram/month", {
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
    }
    if (e.target.value === "Year") {
      fetch("/api/raport/diagram/year", {
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
    }

    if (e.target.value === "Week") {
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
    if (e.target.value === "Month") {
      fetch("/api/raport/area/month", {
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
              categories: ["1th week","2th week","3th week","4th week"]
            });
          });
    }
    if (e.target.value === "Year") {
      fetch("/api/raport/area/year", {
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
              categories: ["JAN","FEB","MAR","APR","MAY","JUN","JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
            });
          });
    }
  };


  render(){
    return(
        <section>
          <header className="RaportSectionHeader">
            <HomeCircleDiagrams classCircleChart="RaportDiagramsBlock" circlesData={this.state.circlesData}/>
            <div className="RightHeaderRaport">
              <p>Show:</p>
              <Selects
                  onChange={this.handleChange}
                  data={periodRaport}
                  selectClass="Selects"/>
            </div>
          </header>
          <ReactHighcharts config={areaChart} ref={(chart) => {this.areaChart = chart}}/>
          <StatisticsTable data={statisticsData}/>
        </section>
    )
  }
}

export default Raport;