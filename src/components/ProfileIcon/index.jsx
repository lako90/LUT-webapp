import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './styles';

class ProfileIcon extends Component {
  state = {
    profileMenuOpen: false,
  }

  toggleProfileMenu = ({ currentTarget }) => {
    this.setState({ profileMenuOpen: !!currentTarget });
  };

  closeProfileMenu = () => {
    this.setState({ profileMenuOpen: false });
  };

  render() {
    const { profileMenuOpen } = this.state;
    const {
      classes: { avatar },
      profileData: { name, imageUrl },
    } = this.props;

    return (
      <Fragment>
        <IconButton
          onClick={this.toggleProfileMenu}
          color="inherit"
          disableRipple
        >
          <Avatar
            title={name}
            src={imageUrl}
            className={avatar}
          />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={profileMenuOpen}
          onClose={this.closeProfileMenu}
        >
          <MenuItem onClick={this.closeProfileMenu}>{'Profile'}</MenuItem>
          <MenuItem onClick={this.closeProfileMenu}>{'Logout'}</MenuItem>
        </Menu>
      </Fragment>
    );
  }
}

ProfileIcon.propTypes = {
  classes: PropTypes.shape().isRequired,
  profileData: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(ProfileIcon);
