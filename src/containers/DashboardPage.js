import React from "react";
import RecentlyConsults from "../components/dashboard/RecentlyConsults";
import RecentlyExams from "../components/dashboard/RecentlyExams";
import RecentlySurgeries from "../components/dashboard/RecentlySurgeries";
import RecentlyPacients from "../components/dashboard/RecentlyPacients";
import RecentlyInternations from "../components/dashboard/RecentlyInternations";
import PacientsInHospital from "../components/dashboard/PacientsInHospital";
import MarkedConsults from "../components/dashboard/MarkedConsults";
import globalStyles from "../styles";
import Data from "../data";
import axios from 'axios';


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
    });
    console.log(Data.dashBoardPage.recentExams)
  }

  componentDidMount  () {
    let res = axios.get(`http://localhost:5000/pacientes/${localStorage.getItem('userCpf')}/exames`);
    let { data } = res.data;
    console.log(res);
    this.setState({ users: data });
  }
  renderPerfilDashboard() {
    if(this.state.sessionType === "Paciente") {
      return (<div>
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
          </div>);
    }else if(this.state.sessionType === "Médico"){
      return (<div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyPacients data={Data.dashBoardPage.recentPacients} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <MarkedConsults data={Data.dashBoardPage.pacientsInHospital} />
            </div>
          </div>);
    }else if(this.state.sessionType === "Secretário"){
       return (<div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyPacients data={Data.dashBoardPage.recentPacients} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <PacientsInHospital data={Data.dashBoardPage.pacientsInHospital} />
            </div>
          </div>);
    }
  }
  render() {
    return (
      <div>
        <h3 style={globalStyles.navigation}>Application / Dashboard </h3>
        {this.renderPerfilDashboard()}
      </div>
    );
  }
}

export default DashboardPage;
