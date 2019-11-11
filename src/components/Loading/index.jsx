import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from '@material-ui/core/Modal';

const Loading = ({ active }) => (
  <Modal open={active}>
    <LinearProgress />
  </Modal>
);


Loading.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Loading;
