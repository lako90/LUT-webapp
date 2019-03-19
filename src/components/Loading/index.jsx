import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from '@material-ui/core/Modal';

class Loading extends Component {
  render() {
    const { active } = this.props;

    return (
      <Modal open={active}>
        <LinearProgress />
      </Modal>
    );
  }
}

Loading.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Loading;
