import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import commonStyles from '../../styles';

class PageTitle extends Component {
  render() {
    const {
      classes: { grow },
      title,
    } = this.props;

    return (
      <Fragment>
        <Typography
          variant="h6"
          color="inherit"
          className={grow}
        >
          {title}
        </Typography>
        <Divider />
      </Fragment>
    );
  }
}

PageTitle.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(commonStyles)(PageTitle);
