import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { API_KEY, BACKDROP_URL, POSTER_URL } from '../components/Urls.js';
import Movie from '../components/Movie';
import Loading from '../components/Loading';

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setMovie(json);
      })
      .finally(() => {
        window.scrollTo(0, 0)
      })
  }, [params.id]);

  if (movie.id) {
    return (
      <section className='movie-wrapper' style={{background: `url(${BACKDROP_URL}${movie.backdrop_path})`}}>
        <Movie
          id={movie.id}
          title={movie.title}
          poster={`${POSTER_URL}${movie.poster_path}`}
          plot={movie.overview}
          vote={movie.vote_average}
          releaseDate={movie.release_date}
          setMovie={setMovie} />
      </section>
    );
  } else if (movie.success === false){
    return <Redirect to="/404" />;
  }
  else {
    return <Loading />;
  }
};
export default MoviePage;