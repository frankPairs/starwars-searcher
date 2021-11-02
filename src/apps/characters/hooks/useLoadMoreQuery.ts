import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import throttle from 'lodash/throttle';

import { FetchStatus } from '../../../typedefs/enums';
import { selectHasMoreCharacters, selectStatus } from '../selectors';
import { fetchCharacters } from '../asyncThunks';

interface State {
  hasMoreCharacters: boolean;
  status: FetchStatus;
}

interface Actions {
  loadMoreCharacters: () => void;
}

const SCROLLY_OFFSET = 250;
const THROTTLE_TIME = 300;

function useLoadMoreQuery(): [State, Actions] {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const hasMoreCharacters = useSelector(selectHasMoreCharacters);
  /**
   * It triggers a load more action when scroll vertical position is close the the bottom of the
   * page. SCROLLY_OFFSET is necessary because we want to trigger the event 200 pixels before
   * the scroll vertical position is on the bottom.
   */
  const loadMoreCharacters = useMemo(() => {
    return throttle(() => {
      // This check is necessary to avoid useless calls when user navigates between pages
      if (window.pageYOffset === 0) {
        return;
      }

      const bodyHeight = document.body.offsetHeight;
      const scrollYThreshold = window.innerHeight + window.pageYOffset + SCROLLY_OFFSET;

      if (scrollYThreshold >= bodyHeight && status !== FetchStatus.LOADING) {
        dispatch(fetchCharacters());
      }
    }, THROTTLE_TIME);
  }, [status]);

  return [{ hasMoreCharacters, status }, { loadMoreCharacters }];
}

export { useLoadMoreQuery };
