import React from 'react';
import Header from '../components/header/Header';
import RecentAniRec from '../components/Home/RecentAniRec';
import SeasonNowCarrosel from '../components/Home/SeasonNowCarrosel';

export default function Main() {
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <SeasonNowCarrosel />
        <RecentAniRec />
      </div>
    </div>
  );
}
