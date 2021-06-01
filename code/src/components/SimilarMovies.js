import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_KEY, POSTER_URL } from '../components/Urls';

const SimilarMovies = () => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        setSimilarMovies(json.results);
      })
  }, []);

  if (similarMovies.length > 0) {
    return (
      <div className='similar-movies-wrapper'>
        <h1>Similar Movies</h1>
        <div className='similar-movies-list'>
          {similarMovies.map((similarMovie) => {
            return (
              <div className='similar-movie' key={similarMovie.id}>
                <Link to={`/movie/${similarMovie.id}`} className='similar-movie-link'>
                  <img alt='poster' className='poster' src={`${POSTER_URL}${similarMovie.poster_path}`} />
                  <div className='description'>
                    <p className='title'>{similarMovie.title}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (null);
  }
};
export default SimilarMovies;