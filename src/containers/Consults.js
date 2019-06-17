import React from "react";
import Consults from "../components/consults/Consults";
import PageBase from "../components/PageBase";
import axios from "axios";
require("babel-polyfill");

class MedicData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consults: []
    };
  }
  async componentDidMount () {
    const cpf = localStorage.getItem('cpfUser');
    await axios.get(`http://localhost:5000/pacientes/${cpf}/consultas`).then((res) => this.setState({ consults: res.data }));
  }
  render() {
    return (
      <PageBase title="Consultas" navigation="Application / Consultas">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
            <Consults data={this.state.consults} />
          </div>
        </div>
      </PageBase>
    );
  }
}

export default MedicData;
