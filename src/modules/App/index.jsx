import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import { checkToken as checkTokenAction } from '../Authentication/actions';
import { propType as authenticationPropType } from '../Authentication/reducer';

import Loading from '../../components/Loading';
import Authenticated from '../Authenticated';
import Authentication from '../Authentication';

import styles from './styles';

class App extends Component {
  componentDidMount() {
    const { checkToken } = this.props;

    checkToken();
  }

  render() {
    const {
      classes: { layout },
      app: { loading },
      authentication: { data: userData },
    } = this.props;

    return (
      <Fragment>
        <Loading active={loading} />
        <div className={layout}>
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

App.propTypes = {
  classes: PropTypes.shape().isRequired,
  app: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
  authentication: authenticationPropType.isRequired,
  checkToken: PropTypes.func.isRequired,
};

const mapStateToProps = ({ app, authentication }) => ({ app, authentication });
const mapDispatchToProp = dispatch => ({
  checkToken: bindActionCreators(checkTokenAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProp)(withStyles(styles)(App));
