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

// Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

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
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <Link to={'/characters'}>
              <ListItemText primary={'Characters'} />
            </Link>
          </ListItem>
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
