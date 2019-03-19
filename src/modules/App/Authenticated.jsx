import React, { Component, Fragment } from 'react';

import MainBar from '../../components/MainBar';

class Authenticated extends Component {
  render() {
    return (
      <Fragment>
        <MainBar />
        <main>
          {null}
        </main>
      </Fragment>
    );
  }
}

export default Authenticated;
