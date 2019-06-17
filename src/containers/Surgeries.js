import React from "react";
import Surgeries from "../components/surgeries/Surgeries";
import PageBase from "../components/PageBase";
import axios from "axios";
require("babel-polyfill");

class SurgeriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surgeries: []
    };
  }

  async componentDidMount() {
    const cpf = localStorage.getItem("cpfUser");
    await axios
      .get(`http://localhost:5000/pacientes/${cpf}/cirurgias`)
      .then(res => this.setState({ surgeries: res.data }));
  }
  render() {
    return (
      <PageBase title="Cirurgias" navigation="Application / Cirurgias">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
            <Surgeries data={this.state.surgeries} />
          </div>
        </div>
      </PageBase>
    );
  }
}

export default SurgeriesPage;
