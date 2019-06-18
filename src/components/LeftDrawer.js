import React, { PropTypes } from "react";
import Drawer from "material-ui/Drawer";
import { spacing, typography } from "material-ui/styles";
import { white, blue600 } from "material-ui/styles/colors";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router";
import Avatar from "material-ui/Avatar";
import Data from '../data';
import axios from "axios";
require("babel-polyfill");

const styles = {
  logo: {
    cursor: "pointer",
    fontSize: 22,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: blue600,
    paddingLeft: 40,
    height: 56
  },
  menuItem: {
    color: white,
    fontSize: 14
  },
  avatar: {
    div: {
      padding: "15px 0 20px 15px",
      backgroundImage: "url(" + require("../images/medical.jpg") + ")",
      height: 45
    },
    icon: {
      float: "left",
      display: "block",
      marginRight: 15,
      boxShadow: "0px 0px 0px 8px rgba(0,0,0,0.2)"
    },
    span: {
      display: "block",
      color: "white",
      fontWeight: "bold",
      textShadow: "1px 1px #444"
    },
    span2: {
      display: "block",
      color: "white",
      fontWeight: 300,
      textShadow: "1px 1px #444"
    }
  }
};

class LeftDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true,
      sessionType: '',
      menus:[],
      username:''
    };
  }
  
  componentWillMount() {
    const sessionType = localStorage.getItem('tipo');
    this.setState({
      sessionType:sessionType
    });
    if(sessionType == "Médico"){
      this.setState({
        menus:Data.menusMedic
      });
    }
    else if(sessionType == "Paciente"){
      this.setState({
        menus:Data.menusPacient
      });
    }
    else if(sessionType == "Secretário"){
      this.setState({
        menus:Data.menusSec
      });
    }
  }
  async componentDidMount() {
    const cpf = localStorage.getItem("cpfUser");
    await axios
      .get(`http://localhost:5000/pacientes/${cpf}`)
      .then(res => this.setState({ username: res.data.nome }));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.navDrawerOpen !== nextProps.navDrawerOpen) {
      this.setState({ navDrawerOpen: nextProps.navDrawerOpen });
    }
  }

  render() {
    return (
      <Drawer docked={true} open={this.state.navDrawerOpen}>
        <div style={styles.logo}>E-Prontuário</div>
        <div style={styles.avatar.div}>
          <Avatar
            src={require("../images/user.png")}
            size={50}
            style={styles.avatar.icon}
          />
          <span style={styles.avatar.span}>{this.state.username}</span>
          <span style={styles.avatar.span2}>{this.state.sessionType}</span>
        </div>
        <div>
          {this.state.menus.map((menu, index) => (
            <MenuItem
              key={index}
              style={styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link} />}
            />
          ))}
        </div>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string
};

export default LeftDrawer;
