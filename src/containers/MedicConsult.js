import React from "react";
import Avatar from "material-ui/Avatar";
import InfoBox from "../components/dashboard/InfoBox";
import { red900 } from "material-ui/styles/colors";
import RecentlyConsults from "../components/dashboard/RecentlyConsults";
import RecentlyExams from "../components/dashboard/RecentlyExams";
import RecentlySurgeries from "../components/dashboard/RecentlySurgeries";
import RecentlyInternations from "../components/dashboard/RecentlyInternations";
import Alerggies from "../components/Alerggies";
import ChronicDiseases from "../components/Diseases";
import PageBase from "../components/PageBase";
import RaisedButton from "material-ui/RaisedButton";
import Book from "material-ui/svg-icons/action/book";
import Data from "../data";
import axios from "axios";
import Snackbar from "material-ui/Snackbar";
import moment from 'moment';
require("babel-polyfill");

class MedicConsult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      exams: [],
      consults: [],
      internations: [],
      surgeries: [],
      cpf_paciente: "",
      crm:'',
      openSnack:false
    };
  }
  componentWillMount() {
    if (
      this.props.params.cpf_paciente ||
      this.props.params.cpf_paciente != undefined
    ) {
      this.setState({ cpf_paciente: this.props.params.cpf_paciente });
    }
  }
  
  async componentDidMount() {
    if(localStorage.getItem('crmUser')){
      this.setState({crm:localStorage.getItem('crmUser')})
    }
    await axios
      .get(`http://localhost:5000/pacientes/${this.state.cpf_paciente}`)
      .then(res => this.setState({ user: res.data }));

    await axios
      .get(`http://localhost:5000/pacientes/${this.state.cpf_paciente}/exames`)
      .then(res => this.setState({ exams: res.data }));

    await axios
      .get(
        `http://localhost:5000/pacientes/${this.state.cpf_paciente}/consultas`
      )
      .then(res2 => this.setState({ consults: res2.data }));

    await axios
      .get(
        `http://localhost:5000/pacientes/${this.state.cpf_paciente}/internacoes`
      )
      .then(res3 => this.setState({ internations: res3.data }));

    await axios
      .get(
        `http://localhost:5000/pacientes/${this.state.cpf_paciente}/cirurgias`
      )
      .then(res4 => this.setState({ surgeries: res4.data }));
  }
  submitConsult(){
    let today = new Date();
    today = moment(today).format('YYYY-MM-DD hh:mm:ss');
    const consult = {
      cpf_paciente:this.state.cpf_paciente,
      crm_medico:this.state.crm,
      data:today
    }
    console.log(today)
    axios.post(`http://localhost:5000/medicos/${this.state.crm}/iniciar_consulta`,  consult )
      .then(res => {
        console.log(res);
      });
    this.setState({
      openSnack: true
    });
    window.location="/dashboard";
  }
  handleRequestClose() {
    this.setState({
      openSnack: false
    });
  }
  render() {
    return (
      <PageBase
        title="Informações do Paciente"
        navigation="Application / Consulta"
      >
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
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
            <RaisedButton
              primary={true}
              label="Finalizar Consulta"
              fullWidth={true}
              onClick={this.submitConsult.bind(this)}
            />
          </div>
        </div>
        <Snackbar
          open={this.state.openSnack}
          message="Consulta realizada"
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </PageBase>
    );
  }
}

export default MedicConsult;
