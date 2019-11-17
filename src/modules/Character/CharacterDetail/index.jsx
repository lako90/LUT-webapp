import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import PageTitle from '../../../components/PageTitle';

import { getCharacterByIdSelector } from '../selectors';
import AttributesTable from '../AttributesTable';

const CharacterDetail = () => {
  const { id } = useParams();
  const character = useSelector(getCharacterByIdSelector(id));

  if (character) {
    const {
      name,
      race: { name: raceName },
      class: { name: className },
      characterAttributes,
    } = character;

    const formattedName = `${name} - ${raceName} ${className}`;

    return (
      <Grid container>
        <Grid item xs={12}>
          <PageTitle title={formattedName} />
        </Grid>

        <Grid item xs={3}>
          <AttributesTable characterAttributes={characterAttributes} />
        </Grid>
        <Grid item xs />
      </Grid>
    );
  }

  return null;
};

export default CharacterDetail;
