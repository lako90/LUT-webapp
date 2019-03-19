import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MainTitle from '../MainTitle';
import BurgerMenuIcon from '../BurgerMenuIcon';
import MainDrawer from '../MainDrawer';
import ProfileIcon from '../ProfileIcon';

import { propType as authenticationPropType } from '../../modules/Authentication/reducer';

class MainBar extends Component {
  state = {
    drawerOpen: false,
  }

  openDrawer = () => { this.setState({ drawerOpen: true }); }

  closeDrawer = () => { this.setState({ drawerOpen: false }); }

  render() {
    const { drawerOpen } = this.state;
    const { authentication: { data: profileData } } = this.props;

    return (
      <Fragment>
        <AppBar position={'fixed'} color={'secondary'}>
          <Toolbar>

            <BurgerMenuIcon
              drawerOpen={drawerOpen}
              onClick={this.openDrawer}
            />

            <MainTitle />

            <ProfileIcon
              profileData={profileData}
              toggleProfileMenu={this.toggleProfileMenu}
              closeProfileMenu={this.closeProfileMenu}
            />
          </Toolbar>
        </AppBar>

        <MainDrawer
          drawerOpen={drawerOpen}
          closeDrawer={this.closeDrawer}
          openDrawer={this.openDrawer}
        />
      </Fragment>
    );
  }
}

MainBar.propTypes = {
  authentication: authenticationPropType.isRequired,
};

const mapStateToProps = ({ authentication }) => ({ authentication });

export default connect(mapStateToProps)(MainBar);
