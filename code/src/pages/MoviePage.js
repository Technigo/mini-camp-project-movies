import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { API_KEY, BACKDROP_URL, POSTER_URL } from '../components/Urls.js';
import Movie from '../components/Movie';

const MoviePage = (props) => {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((json) => {
        setMovie(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(movie)
  return (
    <section className='movie-wrapper' style={{background: `url(${BACKDROP_URL}${movie.backdrop_path})`}}>
      <Link to='/'>
        <button type="button" className='back-button'>Back</button>
      </Link>
      <Movie title={movie.title} poster={`${POSTER_URL}${movie.poster_path}`} />
    </section>
  );
};
export default MoviePage;