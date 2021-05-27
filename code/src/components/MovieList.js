import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
  return (
    <Link to={`/movie/${props.id}`} className='movie'>
      <div className='description'>
        <p className='title'>{props.title}</p>
      </div>
      <img className='poster' src={props.image} />
    </Link>
  );
};
export default MovieList;