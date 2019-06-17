import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import { grey500, white } from "material-ui/styles/colors";
import { Link } from "react-router";
import ThemeDefault from "../theme-default";
import Avatar from "material-ui/Avatar";
const styles = {
  loginContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: "auto",
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    margin: "auto"
  },
  paper: {
    padding: 20,
    overflow: "auto"
  },
  buttonsDiv: {
    textAlign: "center",
    padding: 10
  },
  flatButton: {
    color: grey500
  },
  checkRemember: {
    style: {
      float: "left",
      maxWidth: 180,
      paddingTop: 5
    },
    labelStyle: {
      color: grey500
    },
    iconStyle: {
      color: grey500,
      borderColor: grey500,
      fill: grey500
    }
  },
  loginBtn: {
    float: "right"
  },
  btn: {
    background: "#4f81e9",
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: "#4f81e9"
  },
  btnGoogle: {
    background: "#e14441"
  },
  btnSpan: {
    marginLeft: 5
  }
};

class SelectPerfilType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cpfUser: "",
      crmUser: "",
      medico: false,
      paciente: true,
      secretario: false,
      sessionType: ""
    };
  }
  componentWillMount() {
    let cpf = "";
    let crm = "";
    let medico = false;
    let secretario = false;

    if (localStorage.getItem("cpfUser")) {
      cpf = localStorage.getItem("cpfUser");
    }
    if (localStorage.getItem("crmUser")) {
      crm = localStorage.getItem("crmUser");
    }
    if (localStorage.getItem("medico")) {
      medico = localStorage.getItem("medico");
    }
    if (localStorage.getItem("secretario")) {
      secretario = localStorage.getItem("secretario");
    }

    this.setState({
      cpfUser: cpf,
      crmUser: crm,
      medico: medico,
      secretario: secretario
    });
  }
  setSessionPerfilType(type) {
    localStorage.setItem("tipo", type);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.loginContainer}>
            <div className="row">
              <div
                className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                style={{ textAlign: "center" }}
              >
                <h1>Escolha o tipo de perfil que irá acessar o sistema:</h1>
              </div>
              <div
                className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
                style={{ textAlign: "center" }}
              >
                <Paper style={styles.paper}>
                  <Link
                    to="/dashboard"
                    onClick={() => this.setSessionPerfilType("Paciente")}
                  >
                    <Avatar src={require("../images/pacient.png")} size={50} />
                    <p>Paciente</p>
                  </Link>
                </Paper>
              </div>
              {this.state.medico ? (
                <div
                  className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
                  style={{ textAlign: "center" }}
                >
                  <Paper style={styles.paper}>
                    <Link
                      to="/dashboard"
                      onClick={() => this.setSessionPerfilType("Médico")}
                    >
                      <Avatar src={require("../images/doctor.png")} size={50} />
                      <p>Médico</p>
                    </Link>
                  </Paper>
                </div>
              ) : (
                <div
                  className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
                  style={{ textAlign: "center" }}
                />
              )}

              {this.state.secretario ? (
                <div
                  className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
                  style={{ textAlign: "center" }}
                >
                  <Paper style={styles.paper}>
                    <Link
                      to="/dashboard"
                      onClick={() => this.setSessionPerfilType("Secretário")}
                    >
                      <Avatar
                        src={require("../images/secretario.png")}
                        size={50}
                      />
                      <p>Secretário</p>
                    </Link>
                  </Paper>
                </div>
              ) : (
                <div
                  className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
                  style={{ textAlign: "center" }}
                />
              )}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SelectPerfilType;
