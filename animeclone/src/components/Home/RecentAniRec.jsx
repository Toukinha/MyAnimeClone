import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getRecentAnime from '../../services/fetchs/getRecentAnime';

export default function RecentAniRec() {
  const history = useNavigate();
  const [animesSNow, setAnimesSNow] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const TWENTYFIVE = 25;
      const animes = await getRecentAnime();
      const twentyFive = animes.data.slice(0, TWENTYFIVE);
      setAnimesSNow(twentyFive);
      console.log(twentyFive);
    };
    fetch();
  }, []);

  const carrosel = useRef(null);

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
      <h3>Animes Recomendation</h3>
      <div className="carrosel" ref={ carrosel }>
        {
          animesSNow.map(({ entry }) => entry.map((item) => {
            const { images: { jpg }, title } = item;
            return (
              <div className="animeCardSNow" key={ item.mal_id }>
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
          }))
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
