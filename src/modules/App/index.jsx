import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Authenticated from './Authenticated';
import Authentication from '../Authentication';

const styles = ({ spacing, breakpoints }) => ({
  layout: {
    width: 'auto',
    marginTop: spacing.unit * 3,
    marginLeft: spacing.unit * 3,
    marginRight: spacing.unit * 3,
    [breakpoints.up(1100 + spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    authentication: PropTypes.shape({
      data: PropTypes.shape(),
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([
        PropTypes.shape(),
        PropTypes.bool,
      ]),
    }).isRequired,
  }

  render() {
    const {
      classes,
      authentication,
    } = this.props;

    return (
      <Fragment>
        <div className={classes.layout}>
          {
            authentication.data
              ? <Authenticated />
              : <Authentication />
          }
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });

export default connect(mapStateToProps)(
  withStyles(styles)(App),
);
