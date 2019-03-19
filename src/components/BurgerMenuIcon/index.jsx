import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import styles from './styles';

class BurgerMenuIcon extends Component {
  render() {
    const {
      classes: { menuButton, slideLeft },
      drawerOpen,
      onClick,
    } = this.props;

    return (
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={onClick}
        className={classNames(menuButton, drawerOpen && slideLeft)}
      >
        <MenuIcon />
      </IconButton>
    );
  }
}

BurgerMenuIcon.propTypes = {
  classes: PropTypes.shape().isRequired,
  drawerOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

BurgerMenuIcon.defaultProps = {
  drawerOpen: false,
};

export default withStyles(styles)(BurgerMenuIcon);
