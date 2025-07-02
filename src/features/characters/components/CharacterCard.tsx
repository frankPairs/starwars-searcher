import { useNavigate } from '@tanstack/react-router';

import { getImageByCharacterName } from '../../../utils/images';
import type { Character } from '../types';
import { getCharacterIdFromUrl } from '../utils';
import { Image, MoreInfo, Overlap, Wrapper } from './CharacterCard.styles';

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  const navigate = useNavigate();
  const characterId = getCharacterIdFromUrl(character.url);

  function navigateToCharacterDetailView() {
    navigate({ to: `/characters/$characterId`, params: { characterId } });
  }

  return (
    <Wrapper key={character.url}>
      <Overlap>
        <p className="title">{character.name} </p>

        <MoreInfo className="button-wrapper">
          <button type="button" onClick={navigateToCharacterDetailView}>
            More info
          </button>
        </MoreInfo>
      </Overlap>
      <Image loading="lazy" src={getImageByCharacterName(character.name)} alt={character.name} />
    </Wrapper>
  );
};

export { CharacterCard };
