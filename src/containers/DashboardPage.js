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
import axios from "axios";
require("babel-polyfill");

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionType: "",
      exams: [],
      consults: [],
      internations: [],
      surgeries: []
    };
  }
  componentWillMount() {
    this.setState({
      sessionType: localStorage.getItem("tipo")
    });
  }
  async componentDidMount() {
    const cpf = localStorage.getItem("cpfUser");
    await axios
      .get(`http://localhost:5000/pacientes/${cpf}/exames`)
      .then(res => this.setState({ exams: res.data }));

    await axios
      .get(`http://localhost:5000/pacientes/${cpf}/consultas`)
      .then(res2 => this.setState({ consults: res2.data }));

    await axios
      .get(`http://localhost:5000/pacientes/${cpf}/internacoes`)
      .then(res3 => this.setState({ internations: res3.data }));

    await axios
      .get(`http://localhost:5000/pacientes/${cpf}/cirurgias`)
      .then(res4 => this.setState({ surgeries: res4.data }));
  }
  // async componentDidMount() {
  //   const response = await fetch(`http://localhost:5000/pacientes/${localStorage.getItem('userCpf')}/exames`);
  //   const json = await response.json();
  //   console.log(json)
  // }
  renderPerfilDashboard() {
    if (this.state.sessionType === "Paciente") {
      return (
        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyConsults data={this.state.consults} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyExams data={this.state.exams} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlySurgeries data={this.state.surgeries} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyInternations data={this.state.internations} />
            </div>
          </div>
        </div>
      );
    } else if (this.state.sessionType === "Médico") {
      return (
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <RecentlyPacients data={Data.dashBoardPage.recentPacients} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <MarkedConsults data={Data.dashBoardPage.pacientsInHospital} />
          </div>
        </div>
      );
    } else if (this.state.sessionType === "Secretário") {
      return (
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <RecentlyPacients data={Data.dashBoardPage.recentPacients} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <PacientsInHospital data={Data.dashBoardPage.pacientsInHospital} />
          </div>
        </div>
      );
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
