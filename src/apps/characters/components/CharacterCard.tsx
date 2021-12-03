import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getImageByCharacterName } from '../../../utils/images';
import { Character } from '../types';
import { Wrapper, Overlap, Image, MoreInfo } from './CharacterCard.styles';
import { getCharacterIdFromUrl } from '../utils';

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  const navigate = useNavigate();
  const characterId = getCharacterIdFromUrl(character.url);

  function navigateToCharacterDetailView() {
    navigate(`/characters/${characterId}`);
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
