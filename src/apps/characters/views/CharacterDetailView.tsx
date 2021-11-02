import React from 'react';
import { useParams } from 'react-router-dom';

import { useCharacterQuery } from '../hooks';
import { CharacterDetail } from '../components/CharacterDetail';
import { Wrapper } from './CharacterDetailView.styles';

const CharacterDetailView = () => {
  const params = useParams();
  const { character } = useCharacterQuery(params.characterId || '');

  if (!character) {
    return null;
  }

  return (
    <Wrapper>
      <CharacterDetail character={character} />
    </Wrapper>
  );
};

export { CharacterDetailView };
