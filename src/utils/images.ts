import characterImages from '../assets/json/characterImages.json';

/**
 * Returns an url image related to a character name.
 *
 * @param name {string}: Character's name
 */
function getImageByCharacterName(name: string): string {
  return characterImages[name as keyof typeof characterImages] || '';
}

export { getImageByCharacterName };
