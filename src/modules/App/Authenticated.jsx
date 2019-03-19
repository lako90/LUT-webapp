import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainBar from '../../components/MainBar';
import CharacterList from '../Character/CharacterList';

class Authenticated extends Component {
  render() {
    return (
      <Router>
        <MainBar />
        <main>
          <Route
            path="/characters"
            component={CharacterList}
          />
        </main>
      </Router>
    );
  }
}

export default Authenticated;
