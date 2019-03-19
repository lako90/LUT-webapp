import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import CharacterList from '../Character/CharacterList';
import MainBar from '../../components/MainBar';

class Authenticated extends Component {
  render() {
    return (
      <Fragment>
        <MainBar />
        <main>
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

export default Authenticated;
