import { RootState } from '../../store';

function selectCharactersAsList(state: RootState) {
  return Object.values(state.characters.data);
}

function selectStatus(state: RootState) {
  return state.characters.status;
}

function selectError(state: RootState) {
  return state.characters.error;
}

function selectFilters(state: RootState) {
  return state.characters.filters;
}

function selectNextLink(state: RootState) {
  return state.characters.next;
}

function selectHasMoreCharacters(state: RootState) {
  return state.characters.next !== null;
}

function selectCharacterIdFromUrl(state: RootState, characterUrl: string) {
  const character = state.characters.data[characterUrl];

  if (!character) {
    return null;
  }

  const splitUrlBySlash = character.url.split('/');

  return splitUrlBySlash[splitUrlBySlash.length - 2];
}

function selectCharacterById(state: RootState, characterId: string) {
  const characterUrls = Object.keys(state.characters.data);
  const characterUrl = characterUrls.find((characterUrl) => {
    const splitUrlBySlash = characterUrl.split('/');
    const id = splitUrlBySlash[splitUrlBySlash.length - 2];

    return id === characterId;
  });

  return characterUrl ? state.characters.data[characterUrl] : null;
}

export {
  selectError,
  selectStatus,
  selectFilters,
  selectNextLink,
  selectCharactersAsList,
  selectHasMoreCharacters,
  selectCharacterIdFromUrl,
  selectCharacterById,
};
