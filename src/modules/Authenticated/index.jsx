import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import CharacterList from '../Character/CharacterList';
import MainBar from '../../components/MainBar';

import styles from './styles';

class Authenticated extends Component {
  render() {
    const { classes: { content } } = this.props;

    return (
      <Fragment>
        <MainBar />
        <main className={content}>
          <Route
            path="/characters"
            component={CharacterList}
          />
          <Route
            path="/equipments"
            component={CharacterList}
          />
        </main>
      </Fragment>
    );
  }
}

Authenticated.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Authenticated);
