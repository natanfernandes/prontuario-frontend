import React from "react";
import Exams from "../components/exams/Exams";
import PageBase from "../components/PageBase";
import axios from 'axios';
require('babel-polyfill');

class ExamsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: [],
    };
  }
   async componentDidMount () {
    const cpf = localStorage.getItem('cpfUser');
    await axios.get(`http://localhost:5000/pacientes/${cpf}/exames`).then((res) => this.setState({ exams: res.data }));
  }
  render() {
    return (
      <PageBase title="Consultas" navigation="Application / Consultas">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
            <Exams data={this.state.exams} />
          </div>
        </div>
      </PageBase>
    );
  }
}

export default ExamsPage;
