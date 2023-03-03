import React from 'react';
import AsideAnimeDetails from '../components/animeDetails/AsideAnimeDetails';
import MainContentAnimeDetails from '../components/animeDetails/MainContentAnimeDetails';

import Header from '../components/header/Header';

export default function AnimeDetails() {
  return (
    <>
      <Header />
      <div className="MainConatinerAnimeDetails">
        <AsideAnimeDetails />
        <MainContentAnimeDetails />
      </div>
    </>
  );
}
