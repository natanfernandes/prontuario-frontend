import React from "react";
import RecentlyConsults from "../components/dashboard/RecentlyConsults";
import RecentlyExams from "../components/dashboard/RecentlyExams";
import RecentlySurgeries from "../components/dashboard/RecentlySurgeries";
import RecentlyPacients from "../components/dashboard/RecentlyPacients";
import MakeCheckin from "../components/dashboard/MakeCheckin";
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
      surgeries: [],
      sec:{},
      hosp:{},
      recentPacients:[],
      med:{}
    };
  }
  componentWillMount() {
    this.setState({
      sessionType: localStorage.getItem("tipo")
    });
  }
  async componentDidMount() {
    const cpf = localStorage.getItem("cpfUser");
    let crm = '';
    if(localStorage.getItem("crmUser")){
      crm = localStorage.getItem("crmUser");
    }
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

    if (this.state.sessionType == "Secretário") {
      await axios
        .get(`http://localhost:5000/secretarios/${cpf}`)
        .then(res5 => this.setState({ sec: res5.data }));
      await axios
        .get(`http://localhost:5000/hospitais/${this.state.sec.cnpj_hospital}`)
        .then(res6 => this.setState({ hosp: res6.data }));
      await axios
        .get(`http://localhost:5000/hospitais/${this.state.sec.cnpj_hospital}/checkins`)
        .then(res6 => this.setState({ recentPacients: res6.data }));
        console.log(this.state.recentPacients)
    }
    if (this.state.sessionType == "Médico") {
      await axios
        .get(`http://localhost:5000/medicos/${crm}`)
        .then(res5 => this.setState({ med: res5.data }));
      await axios
        .get(`http://localhost:5000/hospitais/${this.state.med.hospitais[0]}`)
        .then(res6 => this.setState({ hosp: res6.data }));
      await axios
        .get(`http://localhost:5000/hospitais/${this.state.med.hospitais[0]}/checkins`)
        .then(res6 => this.setState({ recentPacients: res6.data }));
        console.log(this.state.recentPacients)
    }
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
            <RecentlyPacients data={this.state.recentPacients} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <MarkedConsults data={this.state.recentPacients} hosp={this.state.hosp.nome}/>
          </div>
        </div>
      );
    } else if (this.state.sessionType === "Secretário") {
      return (
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <MakeCheckin />
            <br />
            <RecentlyPacients data={this.state.recentPacients} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <PacientsInHospital data={this.state.recentPacients} hosp={this.state.hosp.nome}/>
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
