import React, { PropTypes } from "react";
import Avatar from "material-ui/Avatar";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import axios from "axios";
import Snackbar from "material-ui/Snackbar";
import moment from 'moment';
require("babel-polyfill");

class RecentlyPacients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openSnack: false,
      paciente: {},
      cpf: ""
    };
  }
  async pesquisarPaciente() {
    await axios
      .get(`http://localhost:5000/pacientes/${this.state.cpf}`)
      .then(res => this.setState({ paciente: res.data }));
    console.log(this.state.paciente);
  }

  //abre modal checkin
  handleOpen() {
    this.setState({ open: true });
  }

//fecha modal checkin
  handleClose() {
    this.setState({ open: false, paciente: {} });
  }

//post checkin
  submitCheckin() {
    this.setState({ open: false, paciente: {}, openSnack: true });
    let today = new Date();
    today = moment(today).format('YYYY-MM-DD hh:mm:ss');
    const cpf_sec = localStorage.getItem('cpfUser');
    const checkin = {
      cpf_paciente: this.state.cpf,
      cpf_secretario: cpf_sec,
      data: today
    };
    console.log(today);
    axios.post(`http://localhost:5000/secretarios/${cpf_sec}/novo_checkin`,  checkin )
      .then(res => {
        console.log(res);
      });
  }

//pega cpf digitado
  handleChangeCpf(event) {
    this.setState({ cpf: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

//fecha snackbar
  handleRequestClose() {
    this.setState({
      openSnack: false
    });
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        secondary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Concluir Check-in"
        primary={true}
        disabled={false}
        onClick={this.submitCheckin.bind(this)}
      />
    ];
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
        <RaisedButton
          primary={true}
          label="Fazer Check-in de Paciente no Hospital"
          fullWidth={true}
          onClick={this.handleOpen.bind(this)}
        />
        <Dialog
          title="Fazer Check-in de Paciente"
          modal={true}
          open={this.state.open}
          actions={actions}
          onSubmite={this.handleSubmit}
        >
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
              <h1>Insira o CPF do Paciente:</h1>
              <TextField
                onChange={this.handleChangeCpf.bind(this)}
                hintText="CPF"
                floatingLabelText="CPF do Paciente"
              />
              <br />
              <RaisedButton
                primary={true}
                label="Procurar Paciente"
                fullWidth={false}
                onClick={this.pesquisarPaciente.bind(this)}
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
              <div className="row">
                <div
                  className="col-xs-3 col-sm-3 col-md-3 col-lg-3"
                  style={{ textAlign: "center", marginTop: "2%" }}
                >
                  <Avatar src={require("../../images/pacient.png")} size={64} />
                </div>
                {Object.keys(this.state.paciente).length == 0 ? (
                  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <p style={{ color: "red" }}>Nome : </p>
                    <p style={{ color: "red" }}>Email : </p>
                  </div>
                ) : (
                  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <p style={{ color: "green" }}>
                      Nome : {this.state.paciente.nome}
                    </p>
                    <p style={{ color: "green" }}>
                      Email : {this.state.paciente.email}{" "}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog>
        <Snackbar
          open={this.state.openSnack}
          message="Check-in realizado"
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </div>
    );
  }
}

RecentlyPacients.propTypes = {
  data: PropTypes.array
};

export default RecentlyPacients;
