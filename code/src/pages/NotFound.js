import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='not-found-wrapper'>
      <h1>Whoops, that movie is gone <span role='img' aria-label='emoji'>😦</span></h1>
      <Link to='/' className='link-home'>
        <p>Go to home</p>
      </Link>
    </section>
  );
};
export default NotFound;