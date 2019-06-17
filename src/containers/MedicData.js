import React from "react";
import InfoBox from "../components/dashboard/InfoBox";
import { red900 } from "material-ui/styles/colors";
import Avatar from "material-ui/Avatar";
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
      user: []
    };
  }

  async componentDidMount() {
    const cpf = localStorage.getItem("cpfUser");
    await axios
      .get(`http://localhost:5000/pacientes/${cpf}`)
      .then(res => this.setState({ user: res.data }));
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
      </PageBase>
    );
  }
}

export default MedicDataPage;
