import React from "react";

const Movie = (props) => {
  return (
    <div className='movie-content'>
      <div className='movie-description'>
        <p className='movie-title'>{props.title}</p>
      </div>
      <img className='movie-poster' src={props.poster} />
    </div>
  );
};
export default Movie;