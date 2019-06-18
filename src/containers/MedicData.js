import React from "react";
import InfoBox from "../components/dashboard/InfoBox";
import { red900 } from "material-ui/styles/colors";
import Avatar from "material-ui/Avatar";
import RecentlyConsults from "../components/dashboard/RecentlyConsults";
import RecentlyExams from "../components/dashboard/RecentlyExams";
import RecentlySurgeries from "../components/dashboard/RecentlySurgeries";
import RecentlyInternations from "../components/dashboard/RecentlyInternations";
import Alerggies from "../components/Alerggies";
import ChronicDiseases from "../components/Diseases";
import PageBase from "../components/PageBase";
import Book from "material-ui/svg-icons/action/book";
import Data from "../data";
import axios from 'axios';
require('babel-polyfill');

class MedicDataPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      exams: [],
      consults: [],
      internations: [],
      surgeries: []
    };
  }

  async componentDidMount() {
    const cpf = localStorage.getItem("cpfUser");
    await axios
      .get(`http://localhost:5000/pacientes/${cpf}`)
      .then(res => this.setState({ user: res.data }));

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
  render() {
    return (
      <PageBase title="Dados Médicos" navigation="Application / Dados Médicos">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <div className="row">
              <div
                className="col-xs-3 col-sm-3 col-md-3 col-lg-3"
                style={{ textAlign: "center", marginTop: "2%" }}
              >
                <Avatar src={require("../images/pacient.png")} size={64} />
              </div>
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <p>Nome : {this.state.user.nome}</p>
                <p>Data de Nascimento : {this.state.user.data_nasc}</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <InfoBox
              Icon={Book}
              color={red900}
              title="Tipo Sanguíneo"
              value={this.state.user.tipo_sanguineo}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <Alerggies data={Data.dashBoardPage.recentExams} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <ChronicDiseases data={Data.dashBoardPage.recentExams} />
          </div>
        </div>
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
            <RecentlyInternations data={this.state.internations} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <RecentlySurgeries data={this.state.surgeries} />
          </div>
        </div>
      </PageBase>
    );
  }
}

export default MedicDataPage;
