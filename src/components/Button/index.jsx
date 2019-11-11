import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MuiButton from '@material-ui/core/Button';

const Button = ({ children, linkTo, square }) => (
  <MuiButton
    component={linkTo ? Link : undefined}
    to={linkTo}
    style={square ? { borderRadius: 0 } : {}}
  >
    {children}
  </MuiButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  linkTo: PropTypes.string,
  square: PropTypes.bool,
};

Button.defaultProps = {
  linkTo: undefined,
  square: false,
};

export default Button;
