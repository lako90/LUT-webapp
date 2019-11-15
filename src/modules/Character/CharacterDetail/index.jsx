import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { getCharacterByIdSelector } from '../selectors';

const CharacterDetail = () => {
  const { id } = useParams();
  const character = useSelector(getCharacterByIdSelector(id));

  if (character) {
    const {
      name,
      race: { name: raceName },
      class: { name: className },
    } = character;

    return (
      <Grid container>
        <Grid item xs>
          <Paper>
            {name}
            <br />
            <p>{`${raceName} ${className}`}</p>
          </Paper>
        </Grid>
        <Grid item xs />
      </Grid>
    );
  }

  return null;
};

export default CharacterDetail;
