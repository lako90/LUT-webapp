import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import capitalize from 'lodash/capitalize';

import Grid from '@material-ui/core/Grid';

import PageTitle from '../../../components/PageTitle';

import { getCharacterByIdSelector } from '../selectors';
import AttributesTable from '../AttributesTable';
import FeaturesTable from '../FeaturesTable';

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

    const formattedName = `${capitalize(name)} - ${capitalize(raceName)} ${capitalize(className)}`;

    return (
      <Fragment>
        <PageTitle title={formattedName} />
        <Grid container>
          <Grid item xs={3}>
            <AttributesTable characterAttributes={characterAttributes} />
          </Grid>
          <Grid item xs={3}>
            <FeaturesTable />
          </Grid>
        </Grid>
      </Fragment>
    );
  }

  return null;
};

export default CharacterDetail;
