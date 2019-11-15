import { createSelector } from 'reselect';

const getCharactersSelector = ({ characters: { data } }) => data;
const getCharacterByIdSelector = characterId => createSelector(
  [getCharactersSelector],
  characters => characters && characters.find(({ id }) => id === characterId),
);

export {
  getCharactersSelector,
  getCharacterByIdSelector,
};
