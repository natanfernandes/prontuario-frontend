import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, cyan600, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import {Link} from 'react-router';

const RecentlySurgeries = (props) => {

  const styles = {
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan600,
      color: white
    }
  };

  const iconButtonElement = (
    <IconButton
      touch={true}
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>View</MenuItem>
    </IconMenu>
  );

  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}><div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 m-b-15 ">
              Cirurgias Recentes
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 m-b-15 ">
              <Link to="/surgeries"><RaisedButton label="Ver tudo" default={true} style={{ height:'100%'}} /></Link>
            </div>
          </div></Subheader>
        {props.data.map(item =>
          <div key={item.index}>
            <ListItem
              leftAvatar={<Avatar src={require('../../images/doctor.png')} />}
              primaryText={item.descricao}
              secondaryText={item.data}
              rightIconButton={rightIconMenu}
            />
            <Divider inset={true} />
          </div>
        )}
      </List>
    </Paper>
  );
};

RecentlySurgeries.propTypes = {
  data: PropTypes.array
};

export default RecentlySurgeries;
