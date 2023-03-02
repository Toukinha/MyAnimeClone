import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import getSeasonNow from '../services/fetchs/getSeason';
import AnimeContext from './AnimeContext';

function AnimeProvider({ children }) {
  const [aniSeasonNow, SetAniSeasonNow] = useState([]);

  useEffect(() => {
    const getSeasonN = async () => {
      const animeSeasonNow = await getSeasonNow();
      SetAniSeasonNow(animeSeasonNow);
    };
    getSeasonN();
  }, []);

  const things = useMemo(() => ({
    aniSeasonNow,
  }), [aniSeasonNow]);

  return (
    <AnimeContext.Provider value={ things }>
      { children }
    </AnimeContext.Provider>
  );
}

AnimeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AnimeProvider;
