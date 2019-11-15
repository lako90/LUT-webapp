import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import CharacterList from '../Character/CharacterList';
import CharacterDetail from '../Character/CharacterDetail';
import MainBar from '../../components/MainBar';

import { getCharacters } from '../Character/actions';

import styles from './styles';

const Authenticated = ({ classes: { content } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Fragment>
      <MainBar />
      <main className={content}>
        <Switch>
          <Route
            exact
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
};

Authenticated.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Authenticated);
