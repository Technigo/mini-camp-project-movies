import React from "react";

const Movie = (props) => {
  return (
    <div className='movie-content'>
      <div className='description'>
        <p className='title'>{props.title}</p>
      </div>
      <img className='poster' src={props.poster} />
    </div>
  );
};
export default Movie;