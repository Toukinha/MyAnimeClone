import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import getSeasonNow from '../../services/fetchs/getSeason';
import './css/Carrosel.css';

export default function SeasonNowCarrosel() {
  const carrosel = useRef(null);
  const history = useNavigate();
  const [animesSNow, setAnimesSNow] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const animes = await getSeasonNow();
      setAnimesSNow(animes.data);
      console.log(animes.data);
    };
    fetch();
  }, []);

  const handleLeftClick = () => {
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
  };

  const handleRightClick = () => {
    carrosel.current.scrollLeft += carrosel.current.offsetWidth;
  };

  const handleRedirect = (id) => {
    history(`/anime/${id}`);
  };

  return (
    <div className="carrosel-container">
      <h3>Winter Animes 2023</h3>
      <div className="carrosel" ref={ carrosel }>
        {
          animesSNow.map((item) => {
            const { members, images: { jpg }, title } = item;
            return (
              <div className="animeCardSNow" key={ members }>

                <button
                  type="button"
                  className="animeImageSNow"
                  onClick={ () => handleRedirect(item.mal_id) }
                >
                  <img src={ jpg.image_url } alt={ title } />
                </button>
                <p>{ title }</p>
              </div>
            );
          })
        }

      </div>
      <button
        onClick={ handleLeftClick }
        type="button"
        className="leftBtn"
      >
        &#8249;

      </button>
      <button
        onClick={ handleRightClick }
        type="button"
        className="rightBtn"
      >
        &#8249;

      </button>
    </div>
  );
}
