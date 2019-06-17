import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400,red500, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import {Link} from 'react-router';

const RecentlyExams = (props) => {
  
  const styles = {
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: red500,
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
      <MenuItem>Ver</MenuItem>
    </IconMenu>
  );

  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}><div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 m-b-15 ">
              Exames Recentes
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 m-b-15 ">
              <Link to="/exams"><RaisedButton label="Ver tudo"  default={true} style={{ height:'100%'}}/></Link>
            </div>
          </div></Subheader>
        {props.data.map(item =>
          <div key={item.tipo}>
            <ListItem
              leftAvatar={<Avatar icon={<Wallpaper />} />}
              primaryText={item.tipo}
              secondaryText={item.nome_local +' , '+item.data}
              rightIconButton={rightIconMenu}
            />
            <Divider inset={true} />
          </div>
        )}
      </List>
    </Paper>
  );
};

RecentlyExams.propTypes = {
  data: PropTypes.array
};

export default RecentlyExams;
