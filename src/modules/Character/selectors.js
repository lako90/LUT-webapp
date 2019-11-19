import { createSelector } from 'reselect';

const getCharactersSelector = ({ characters: { data } }) => data;

const getCharacterByIdSelector = characterId => createSelector(
  [getCharactersSelector],
  characters => characters && characters.find(({ id }) => id === characterId),
);

const getCharacterFeatures = characterId => createSelector(
  [getCharacterByIdSelector(characterId)],
  ({
    currentHealth,
    currentMana,
    totalHealth,
    totalMana,
    money,
    experience,
  }) => ({
    currentHealth,
    currentMana,
    totalHealth,
    totalMana,
    money,
    experience,
  }),
);

export {
  getCharactersSelector,
  getCharacterByIdSelector,
  getCharacterFeatures,
};
