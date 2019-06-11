import React from "react";
import RecentlyConsults from "../components/dashboard/RecentlyConsults";
import RecentlyExams from "../components/dashboard/RecentlyExams";
import RecentlySurgeries from "../components/dashboard/RecentlySurgeries";
import RecentlyPacients from "../components/dashboard/RecentlyPacients";
import RecentlyInternations from "../components/dashboard/RecentlyInternations";
import PacientsInHospital from "../components/dashboard/PacientsInHospital";
import globalStyles from "../styles";
import Data from "../data";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionType: ''
    };
  }
  componentWillMount() {
    this.setState({
      sessionType:localStorage.getItem("tipo")
    })
  }
  render() {
    return (
      <div>
        <h3 style={globalStyles.navigation}>Application / Dashboard </h3>
        {this.state.sessionType === "Paciente" ? (
          <div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                <RecentlyConsults data={Data.dashBoardPage.recentProducts} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                <RecentlyExams data={Data.dashBoardPage.recentExams} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                <RecentlySurgeries data={Data.dashBoardPage.recentProducts} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                <RecentlyInternations data={Data.dashBoardPage.recentExams} />
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyPacients data={Data.dashBoardPage.recentProducts} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <PacientsInHospital data={Data.dashBoardPage.recentExams} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DashboardPage;
