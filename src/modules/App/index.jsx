import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import { checkToken as checkTokenAction } from '../Authentication/actions';

import Loading from '../../components/Loading';
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
    app: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
    authentication: PropTypes.shape({
      data: PropTypes.shape(),
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([
        PropTypes.shape(),
        PropTypes.bool,
      ]),
    }).isRequired,
    checkToken: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { checkToken } = this.props;

    checkToken();
  }

  render() {
    const {
      classes,
      app: { loading },
      authentication: { data: userData },
    } = this.props;

    return (
      <Fragment>
        <Loading active={loading} />
        <div className={classes.layout}>
          {
            userData
              ? <Authenticated />
              : <Authentication />
          }
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ app, authentication }) => ({ app, authentication });
const mapDispatchToProp = dispatch => ({
  checkToken: bindActionCreators(checkTokenAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProp)(
  withStyles(styles)(App),
);
