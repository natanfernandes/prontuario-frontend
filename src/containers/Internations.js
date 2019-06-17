import React from "react";
import Internations from "../components/internations/Internations";
import PageBase from "../components/PageBase";
import axios from "axios";
require("babel-polyfill");

class InternationsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      internations: [],
    };
  }

  async componentDidMount() {
    const cpf = localStorage.getItem("cpfUser");
    await axios
      .get(`http://localhost:5000/pacientes/${cpf}/internacoes`)
      .then(res => this.setState({ internations: res.data }));
  }
  render() {
    return (
      <PageBase title="Internações" navigation="Application / Internações">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
            <Internations data={this.state.internations} />
          </div>
        </div>
      </PageBase>
    );
  }
}

export default InternationsPage;
