import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { API_URL, POSTER_URL } from './components/Urls.js';

import MovieList from './components/MovieList';
import MoviePage from './pages/MoviePage';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [apiUrl, setApiUrl] = useState([API_URL]);
  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  }, [apiUrl])
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
        <div className='movie-list'>
          {movies.map((movie) => {
            return (
              <MovieList
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={`${POSTER_URL}${movie.poster_path}`} />
            );
          })}
        </div>
        </Route>
        <Route path="/movie/:id" exact>
          <MoviePage movies={movies}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
