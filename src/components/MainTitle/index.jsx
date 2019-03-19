import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import commonStyles from '../../styles';

class MainTitle extends Component {
  render() {
    const {
      classes: { grow },
      title,
    } = this.props;

    return (
      <Typography
        variant="h6"
        color="inherit"
        className={grow}
      >
        {title}
      </Typography>
    );
  }
}

MainTitle.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string,
};

MainTitle.defaultProps = {
  title: 'LUT | Unofficial app',
};

export default withStyles(commonStyles)(MainTitle);
