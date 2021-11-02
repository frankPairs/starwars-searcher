import React, { useEffect } from 'react';

import { FetchStatus } from '../../../typedefs/enums';
import { Progress } from '../../../components/feedback';
import { useLoadMoreQuery } from '../hooks';
import { Wrapper } from './CharactersLoadMore.styles';

const CharactersLoadMore = () => {
  const [{ hasMoreCharacters, status }, { loadMoreCharacters }] = useLoadMoreQuery();

  useEffect(() => {
    // We remove the window scroll listener when there are not more characters to load.
    if (hasMoreCharacters) {
      window.addEventListener('scroll', loadMoreCharacters);
    } else {
      window.removeEventListener('scroll', loadMoreCharacters);
    }

    return () => {
      window.removeEventListener('scroll', loadMoreCharacters);
    };
  }, [hasMoreCharacters, loadMoreCharacters]);

  return <Wrapper>{status === FetchStatus.LOADING && hasMoreCharacters && <Progress />}</Wrapper>;
};

export { CharactersLoadMore };
