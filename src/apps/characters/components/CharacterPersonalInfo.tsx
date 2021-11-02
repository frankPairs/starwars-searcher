import React from 'react';

import { getImageByCharacterName } from '../../../utils/images';
import { Character } from '../types';
import {
  CharacteristicsWrapper,
  PersonalInfoWrapper,
  Wrapper,
} from './CharacterPersonalInfo.styles';
import { useCharacterSpeciesQuery } from '../../species';
import { useCharacterPlanetQuery } from '../../planets';

interface Props {
  character: Character;
}

const CharacterPersonalInfo = ({ character }: Props) => {
  const { characterSpecies } = useCharacterSpeciesQuery(character);
  const { characterPlanet } = useCharacterPlanetQuery(character.homeWorld);

  return (
    <Wrapper>
      <img src={getImageByCharacterName(character.name)} alt={character.name} />

      <PersonalInfoWrapper>
        <h2 className="title">{character.name}</h2>

        <div className="header">
          {characterPlanet && <span className="subtitle">{characterPlanet.name} </span>}
          {characterSpecies.length > 0 && (
            <span className="subtitle">
              - {characterSpecies.map((species) => species.name).join('/ ')}
            </span>
          )}
        </div>

        <CharacteristicsWrapper>
          <li className="row">
            <b className="property">Gender</b>
            <span className="value">{character.gender}</span>
          </li>
          <li className="row">
            <b className="property">Height</b>
            <span className="value">{character.height}</span>
          </li>
          <li className="row">
            <b className="property">Mass</b>
            <span className="value">{character.mass}</span>
          </li>
          <li className="row">
            <b className="property">Skin Color</b>
            <span className="value">{character.skinColor}</span>
          </li>
        </CharacteristicsWrapper>
      </PersonalInfoWrapper>
    </Wrapper>
  );
};

export { CharacterPersonalInfo };
