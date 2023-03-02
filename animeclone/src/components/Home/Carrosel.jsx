import React, { useEffect, useState } from 'react';
import getSeasonNow from '../../services/fetchs/getSeason';
import './css/Carrosel.css';

export default function Carrosel() {
  const [animesSNow, setAnimesSNow] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const animes = await getSeasonNow();
      setAnimesSNow(animes.data);
      console.log(animes);
    };
    fetch();
  }, []);

  return (
    <div className="container">
      <div className="carrosel">
        {
          animesSNow.map((item) => {
            const { members, images: { jpg }, title } = item;
            return (
              <div className="animeCardSNow" key={ members }>
                <div className="animeImageSNow">
                  <img src={ jpg.image_url } alt={ title } />
                </div>
                <p>{ title }</p>
              </div>
            );
          })
        }
      </div>
      <div className="buttonsLR">
        <button type="button" aria-label="imgLeft"><img src="" alt="" /></button>
      </div>
    </div>
  );
}
