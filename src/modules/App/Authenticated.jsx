import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = ({ spacing }) => ({
  title: {
    marginBottom: spacing.unit * 3,
  },
});

class Authenticated extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
  }

  state = { appBarValue: 0 }

  handleAppBarChange = (event, value) => {
    this.setState({ appBarValue: value });
  }

  render() {
    const { classes } = this.props;
    const { appBarValue } = this.state;

    return (
      <Fragment>
        <Typography
          variant={'h3'}
          color={'primary'}
          className={classes.title}
        >
          {'LUT - Unofficial app'}
        </Typography>
        <AppBar position={'static'} color={'secondary'}>
          <Tabs
            value={appBarValue}
            onChange={this.handleAppBarChange}
            indicatorColor="primary"
            centered
          >
            <Tab label="Giocatore" />
            <Tab label="Master" />
            <Tab label="Inventario" />
            <Tab label="Viaggi" />
          </Tabs>
        </AppBar>
        <main>
          {appBarValue === 0 && null}
        </main>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Authenticated);
