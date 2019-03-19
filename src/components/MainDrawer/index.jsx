import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';

import styles from './styles';

class MainDrawer extends Component {
  render() {
    const {
      classes: { drawer, drawerHeader },
      theme: { direction },
      drawerOpen,
      closeDrawer,
      openDrawer,
    } = this.props;

    return (
      <SwipeableDrawer
        open={drawerOpen}
        className={drawer}
        variant="persistent"
        anchor="left"
        onOpen={openDrawer}
        onClose={closeDrawer}
      >
        <div className={drawerHeader}>
          <IconButton onClick={closeDrawer}>
            {
              direction === 'ltr'
                ? <ChevronLeftIcon />
                : <ChevronRightIcon />
            }
          </IconButton>
        </div>

        <Divider />

        <List>
          <Link to={'/characters'}>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Personaggi'} />
            </ListItem>
          </Link>

          <Link to={'/equipments'}>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Equipaggiamento'} />
            </ListItem>
          </Link>
        </List>
      </SwipeableDrawer>
    );
  }
}

MainDrawer.propTypes = {
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
  drawerOpen: PropTypes.bool,
  closeDrawer: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired,
};

MainDrawer.defaultProps = {
  drawerOpen: false,
};

export default withStyles(styles, { withTheme: true })(MainDrawer);
