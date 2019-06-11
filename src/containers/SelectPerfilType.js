import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Checkbox from "material-ui/Checkbox";
import { grey500, white } from "material-ui/styles/colors";
import PersonAdd from "material-ui/svg-icons/social/person-add";
import Help from "material-ui/svg-icons/action/help";
import TextField from "material-ui/TextField";
import { Link } from "react-router";
import ThemeDefault from "../theme-default";
import Avatar from "material-ui/Avatar";

const SelectPerfilType = () => {
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

    const setSessionPerfilType = (type) => {
        localStorage.setItem('tipo',type);
    }
   
  return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <div>
        <div style={styles.loginContainer}>
          <div className="row">
            <div className="col-12 col-lg-12" style={{ textAlign:'center' }}>
            <h1>Você é Médico e Paciente, escolha o tipo de perfil que irá acessar o sistema:</h1>
            </div>
            <div className="col-6 col-lg-6" style={{ textAlign:'center' }}>
              <Paper style={styles.paper}>
                <Link to="/app/dashboard" onClick={() => setSessionPerfilType('Paciente')}>
                  <Avatar src={require("../images/user.png")} size={50} />
                  <p>Paciente</p>
                </Link>
              </Paper>
            </div>
            <div className="col-6 col-lg-6" style={{ textAlign:'center' }}>
              <Paper style={styles.paper}>
                <Link to="/app/dashboard" onClick={() => setSessionPerfilType('Médico')}>
                  <Avatar src={require("../images/doctor.png")} size={50} />
                  <p>Médico</p>
                </Link>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default SelectPerfilType;
