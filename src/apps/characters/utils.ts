function getCharacterIdFromUrl(characterUrl: string) {
  const splitUrlBySlash = characterUrl.split('/');

  return splitUrlBySlash[splitUrlBySlash.length - 2];
}

export { getCharacterIdFromUrl };
