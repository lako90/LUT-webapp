import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleLogin from 'react-google-login';

import {
  signinRequest as signinRequestAction,
  signinSuccess as signinSuccessAction,
  signinError as signinErrorAction,
} from './actions';

const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

class Authentication extends Component {
  handleRequest = () => {
    const { signinRequest } = this.props;
    signinRequest();
  }

  handleSuccess = ({ profileObj: user }) => {
    const { signinSuccess } = this.props;
    signinSuccess(user);
  }

  handleError = ({ error }) => {
    const { signinError } = this.props;
    signinError(error);
  }

  render() {
    return (
      <Fragment>
        <GoogleLogin
          clientId={REACT_APP_GOOGLE_CLIENT_ID}
          onRequest={this.handleRequest}
          onSuccess={this.handleSuccess}
          onFailure={this.handleError}
        />
      </Fragment>
    );
  }
}

Authentication.propTypes = {
  signinRequest: PropTypes.func.isRequired,
  signinSuccess: PropTypes.func.isRequired,
  signinError: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  signinRequest: bindActionCreators(signinRequestAction, dispatch),
  signinSuccess: bindActionCreators(signinSuccessAction, dispatch),
  signinError: bindActionCreators(signinErrorAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
