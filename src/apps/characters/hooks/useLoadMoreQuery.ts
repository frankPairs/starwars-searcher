import { useMemo } from 'react';
import throttle from 'lodash/throttle';

import { useCharactersQuery } from './useCharactersQuery';

interface State {
  hasMoreCharacters: boolean;
  isFetching: boolean;
}

interface Actions {
  fetchMoreCharacters: () => void;
}

const SCROLLY_OFFSET = 250;
const THROTTLE_TIME = 300;

function useLoadMoreQuery(): [State, Actions] {
  const [{ hasMoreCharacters, isFetching }, { loadMoreCharacters }] = useCharactersQuery();
  /**
   * It triggers a load more action when scroll vertical position is close the the bottom of the
   * page. SCROLLY_OFFSET is necessary because we want to trigger the event 200 pixels before
   * the scroll vertical position is on the bottom.
   */
  const fetchMoreCharacters = useMemo(() => {
    return throttle(() => {
      // This check is necessary to avoid useless calls when user navigates between pages
      if (window.pageYOffset === 0) {
        return;
      }

      const bodyHeight = document.body.offsetHeight;
      const scrollYThreshold = window.innerHeight + window.pageYOffset + SCROLLY_OFFSET;

      if (scrollYThreshold >= bodyHeight && !isFetching) {
        loadMoreCharacters();
      }
    }, THROTTLE_TIME);
  }, [isFetching]);

  return [{ hasMoreCharacters, isFetching }, { fetchMoreCharacters }];
}

export { useLoadMoreQuery };
