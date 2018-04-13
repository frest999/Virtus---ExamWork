import React from "react";
import ReactHighcharts from "react-highcharts";
import salesReport from "../../../config/salesReportChart.config";
import "./SalesReport.css"
import Selects from "../../atoms/Selects/Selects";

const periodsSales = ["Year","Month","Week"];

class SalesReportChart extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      dataReport: []
    }
  }

  componentWillMount() {
    fetch("/api/sales/year", {
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      method: "GET",
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            dataReport: res
          });
          let chart = this.salesReport.getChart();
          chart.series[0].setData(this.state.dataReport, true);
        });
}
  handleChange = (e) => {
    if (e.target.value === "Year") {
      fetch("/api/sales/year", {
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        method: "GET",
      })
          .then(res => res.json())
          .then(res => {
            this.setState({
              dataReport: res
            });
            let chart = this.salesReport.getChart();
            chart.series[0].setData(this.state.dataReport, true);
          });
    }
    else if (e.target.value === "Month") {
      fetch("/api/sales/month", {
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        method: "GET",
      })
          .then(res => res.json())
          .then(res => {
            this.setState({
              dataReport: res
            });
            let chart = this.salesReport.getChart();
            chart.series[0].setData(this.state.dataReport, true);
          });
    }
    else if (e.target.value === "Week") {
      fetch("/api/sales/week", {
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        method: "GET",
      })
          .then(res => res.json())
          .then(res => {
            this.setState({
              dataReport: res
            });
            let chart = this.salesReport.getChart();
            chart.series[0].setData(this.state.dataReport, true);
          });
    }
  };

  render(){
    return(
        <div className="SalesRaportChart">
          <header>
            <h2>Sales Report</h2>
            <div className="RightChartHeader">
              <p>Sales:</p>
              <Selects
                onChange={this.handleChange}
                data={periodsSales}
                selectClass="Selects"/>
            </div>
          </header>
          <ReactHighcharts config={salesReport} ref={(chart) => {this.salesReport = chart}}/>
        </div>
    )
  }
}

export default SalesReportChart;