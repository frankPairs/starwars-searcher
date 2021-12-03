import React, { useEffect } from 'react';

import { Progress } from '../../../components/feedback';
import { useLoadMoreQuery } from '../hooks';
import { Wrapper } from './CharactersLoadMore.styles';

const CharactersLoadMore = () => {
  const [{ hasMoreCharacters, isFetching }, { fetchMoreCharacters }] = useLoadMoreQuery();

  useEffect(() => {
    // We remove the window scroll listener when there are not more characters to load.
    if (hasMoreCharacters) {
      window.addEventListener('scroll', fetchMoreCharacters);
    } else {
      window.removeEventListener('scroll', fetchMoreCharacters);
    }

    return () => {
      window.removeEventListener('scroll', fetchMoreCharacters);
    };
  }, [hasMoreCharacters, fetchMoreCharacters]);

  return <Wrapper>{isFetching && hasMoreCharacters && <Progress />}</Wrapper>;
};

export { CharactersLoadMore };
