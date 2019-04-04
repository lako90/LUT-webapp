import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import DrawerContext from '../MainBar/drawerContext';

import DrawerItem from './DrawerItem';

import styles from './styles';

class MainDrawer extends Component {
  constructor(props) {
    super(props);

    this.drawerItems = [
      {
        icon: 'mail',
        label: 'Personaggi',
        linkTo: '/characters',
      }, {
        icon: 'mail',
        label: 'Equipaggiamento',
        linkTo: '/equipments',
      },
    ];
  }

  renderDrawerItem = ({
    icon,
    label,
    linkTo,
  }) => (
    <DrawerItem
      key={`${linkTo}-${label}`}
      icon={icon}
      label={label}
      linkTo={linkTo}
    />
  )

  render() {
    const {
      classes: { drawer, drawerHeader },
      theme: { direction },
    } = this.props;

    return (
      <DrawerContext.Consumer>
        {({ openDrawer, closeDrawer, drawerOpen }) => (
          <SwipeableDrawer
            open={drawerOpen}
            className={drawer}
            variant={'persistent'}
            anchor={'left'}
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
              {this.drawerItems.map(this.renderDrawerItem)}
            </List>
          </SwipeableDrawer>
        )}
      </DrawerContext.Consumer>
    );
  }
}

MainDrawer.propTypes = {
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
};

export default withStyles(styles, { withTheme: true })(MainDrawer);
