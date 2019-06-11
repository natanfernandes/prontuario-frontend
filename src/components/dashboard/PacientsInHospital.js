import React, { PropTypes } from "react";
import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import { grey400, pink600, white } from "material-ui/styles/colors";
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

  const iconButtonElement = (
    <IconButton touch={true} tooltipPosition="bottom-left">
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Inicar Consulta</MenuItem>
    </IconMenu>
  );

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
              leftAvatar={<Avatar src={require("../../images/doctor.png")} />}
              primaryText={item.title}
              secondaryText={item.text}
              rightIconButton={<FlatButton label="Iniciar Consulta" style={{color:'green'}}/>}
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
