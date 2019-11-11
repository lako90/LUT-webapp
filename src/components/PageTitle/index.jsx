import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import Button from '../Button';

import commonStyles from '../../styles';

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

class PageTitle extends Component {
  renderIcon = icon => icon && <Icon>{icon}</Icon>

  render() {
    const { action, title } = this.props;
    const { icon, label, linkTo } = action;

    return (
      <Fragment>
        <StyledTitle>
          <Typography
            variant={'h6'}
            color={'inherit'}
          >
            {title}
          </Typography>
          {Object.keys(action).length
            ? (
              <Button
                component={false}
                linkTo={linkTo}
                size={'small'}
                square
              >
                {this.renderIcon(icon)}
                {label}
              </Button>
            )
            : null
          }
        </StyledTitle>
        <Divider />
      </Fragment>
    );
  }
}

PageTitle.propTypes = {
  action: PropTypes.shape({
    icon: PropTypes.string,
    label: PropTypes.string,
    linkTo: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
};

PageTitle.defaultProps = {
  action: {},
};

export default withStyles(commonStyles)(PageTitle);
