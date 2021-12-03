import React from 'react';

import { getImageByCharacterName } from '../../../utils/images';
import { Character } from '../types';
import {
  CharacteristicsWrapper,
  PersonalInfoWrapper,
  Wrapper,
} from './CharacterPersonalInfo.styles';
import { Species } from '../../species/types';
import { Planet } from '../../planets/types';

interface Props {
  character: Character;
  characterSpecies: Species[];
  characterPlanet: Planet | null;
}

const CharacterPersonalInfo = ({ character, characterSpecies, characterPlanet }: Props) => {
  return (
    <Wrapper>
      <img src={getImageByCharacterName(character.name)} alt={character.name} />

      <PersonalInfoWrapper>
        <h2 className="title">{character.name}</h2>

        <div className="header">
          {characterPlanet && <span className="subtitle">{characterPlanet.name}</span>}
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
          {characterPlanet && (
            <li className="row">
              <b className="property">Planet Population</b>
              <span className="value">{characterPlanet.population}</span>
            </li>
          )}
        </CharacteristicsWrapper>
      </PersonalInfoWrapper>
    </Wrapper>
  );
};

export { CharacterPersonalInfo };
