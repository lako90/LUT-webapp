import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DrawerContext from '../MainBar/drawerContext';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

class DrawerItem extends Component {
  render() {
    const { icon, linkTo, label } = this.props;

    return (
      <DrawerContext.Consumer>
        {({ closeDrawer }) => (
          <StyledLink
            to={linkTo}
            onClick={closeDrawer}
          >
            <ListItem button>
              <ListItemIcon>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </StyledLink>
        )}
      </DrawerContext.Consumer>
    );
  }
}

DrawerItem.propTypes = {
  icon: PropTypes.string,
  linkTo: PropTypes.string,
  label: PropTypes.string.isRequired,
};

DrawerItem.defaultProps = {
  icon: null,
  linkTo: '/',
};

export default DrawerItem;
