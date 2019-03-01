import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import LinearProgress from '@material-ui/core/LinearProgress';

class Loading extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
  }

  render() {
    const { active } = this.props;

    return (
      <Modal open={active}><LinearProgress /></Modal>
    );
  }
}

export default Loading;
