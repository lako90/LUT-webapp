import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import CharacterList from '../Character/CharacterList';
import CharacterDetail from '../Character/CharacterDetail';
import MainBar from '../../components/MainBar';

import styles from './styles';

class Authenticated extends Component {
  render() {
    const { classes: { content } } = this.props;

    return (
      <Fragment>
        <MainBar />
        <main className={content}>
          <Switch>
            <Route
              path="/characters"
              component={CharacterList}
            />
            <Route
              path="/characters/:id"
              component={CharacterDetail}
            />
            <Route
              path="/equipments"
              component={CharacterList}
            />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

Authenticated.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Authenticated);
