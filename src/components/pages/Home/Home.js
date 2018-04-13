import React from "react";
import "./Home.css";
import "../GeneralStyles.css";
import "./HomePageCalendar.css";
import ChartBlock from "../../molecules/ChartBlock/ChartBlock";
import ProjectsBox from "../../molecules/ProjectsBox/ProjectsBox";
import SalesRaportChart from "../../molecules/SalesRepotChart/SalesReportChart";
import MessageBox from "../../molecules/MessageBox/MessageBox";
import Calendar from "react-calendar";

class Home extends React.Component{

  render(){
    const nowDate = new Date();
    return(
        <section className="content HomePageContent">
          <ChartBlock classChart="HomePageChart"/>
          <ProjectsBox/>
          <SalesRaportChart/>
          <MessageBox/>
          <Calendar
              value={nowDate}
              locale="en-EN"
          />
        </section>
    )
  }
}

export default Home;