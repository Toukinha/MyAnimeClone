import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import AnimeContext from './AnimeContext';

function AnimeProvider({ children }) {
  const [animeDetails, setAnimeDetails] = useState(false);

  // useEffect(() => {
  //   const getSeasonN = async () => {
  //     const anime = await getAnimeById(id);
  //     setAnimeDetails(anime);
  //   };
  //   getSeasonN();
  // }, []);

  const things = useMemo(() => ({
    animeDetails,
    setAnimeDetails,
  }), [animeDetails]);

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
