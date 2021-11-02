import { Routes, Route } from 'react-router-dom';

import { CharacterListView, CharacterDetailView } from '../views';

const CharactersRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CharacterListView />} />
      <Route path=":characterId" element={<CharacterDetailView />} />
    </Routes>
  );
};

export { CharactersRouter };
