import React, { useContext, useEffect } from 'react';
import './css/AsideAnimeDetails.css';
import { useParams } from 'react-router-dom';
import getAnimeById from '../../services/fetchs/getAnimeById';
import AnimeContext from '../../context/AnimeContext';

export default function AsideAnimeDetails() {
  const { animeDetails, setAnimeDetails } = useContext(AnimeContext);
  const { id } = useParams();
  // const [animeDetails, setAnimeDetails] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const anime = await getAnimeById(id);
      setAnimeDetails(anime);
    };
    fetch();
  }, [id, setAnimeDetails]);

  if (animeDetails) {
    return (
      <div className="asideAnimeDetails">
        <img src={ animeDetails.images.jpg.image_url } alt="" />
        <h4>Alternative Titles</h4>
        <p>
          Japanese:
          {` ${animeDetails.title_japanese}`}
        </p>
        <h4>Information</h4>
        <p>
          Type:
          {` ${animeDetails.type}`}
        </p>
        <p>
          Episodes:
          {` ${animeDetails.episodes}`}
        </p>
        <p>
          Status:
          {` ${animeDetails.status}`}
        </p>
        <p>
          Aired:
          {` ${animeDetails.aired.string}`}
        </p>
        <p>
          Producers:
          {` ${animeDetails.producers.map(({ name }) => name)}`}
        </p>
        <p>
          Studios:
          {animeDetails.studios.map(({ name }) => name)}
        </p>
        <p>
          Source:
          {` ${animeDetails.source}`}
        </p>
        <p>
          Genres:
          {` ${animeDetails.genres.map(({ name }) => name)}`}
        </p>
        <p>
          Themes:
          {` ${animeDetails.themes.map(({ name }) => name)}`}
        </p>
        <p>
          Duration:
          {` ${animeDetails.duration}`}
        </p>
        <p>
          Rating:
          {` ${animeDetails.rating}`}
        </p>
        <h4>Statistics</h4>
        <p>
          Score:
          {` ${animeDetails.score}`}
        </p>
        <p>
          Ranked:
          {` #${animeDetails.rank}`}
        </p>
        <p>
          Popularity:
          {` #${animeDetails.popularity}`}
        </p>
        <p>
          Members:
          {` ${animeDetails.members}`}
        </p>
        <p>
          Favorites:
          {` ${animeDetails.favorites}`}
        </p>

      </div>
    );
  }
}
// <p>Licensors: {}</p>
// <p>Synonyms:</p>
