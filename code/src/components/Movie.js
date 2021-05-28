import React from "react";

import SimilarMovies from '../components/SimilarMovies';

const Movie = (props) => {
  return (
    <div className='movie-content'>
      <div className='movie-details-wrapper'>
        <img alt='poster' className='poster' src={props.poster} />
        <div className='description'>
          <p className='title'>{props.title}</p>
          <p className='vote'><span className='label'>Rating:</span> {props.vote}</p>
          <p className='release-date'><span className='label'>Release date:</span> {props.releaseDate}</p>
          <p className='plot'>{props.plot}</p>
        </div>
      </div>
      <SimilarMovies />
    </div>
  );
};
export default Movie;