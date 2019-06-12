import React, { PropTypes } from "react";
import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import {  pink600, white } from "material-ui/styles/colors";
import { typography } from "material-ui/styles";
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';

const PacientsInHospital = props => {
  const styles = {
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: pink600,
      color: white
    }
  };


  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 " style={{textAlign:'center'}}>
              Pacientes No Hospital
              <br />
              <b>Hospital XXXXXXXXXX</b>
            </div>
          </div>
        </Subheader>
        {props.data.map(item => (
          <div key={item.title}>
            <ListItem
              leftAvatar={<Avatar src={require("../../images/pacient.png")} />}
              primaryText={item.title}
              secondaryText={item.text}
              rightIconButton={<Link to="/medicConsult"><FlatButton label="Iniciar Consulta" style={{color:'green'}}/></Link>}
            />
            <Divider inset={true} />
          </div>
        ))}
      </List>
    </Paper>
  );
};

PacientsInHospital.propTypes = {
  data: PropTypes.array
};

export default PacientsInHospital;
