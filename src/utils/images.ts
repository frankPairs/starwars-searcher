import characterImages from '../assets/json/characterImages.json';

/**
 * Returns an url image related to a character name.
 *
 * @param name {string}: Character's name
 */
function getImageByCharacterName(name: string): string {
  // TODO: add fallback image
  return characterImages[name] || '';
}

export { getImageByCharacterName };
