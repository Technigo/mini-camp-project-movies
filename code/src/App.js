import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { API_URL, POSTER_URL } from './components/Urls.js';

import MovieList from './components/MovieList';
import MoviePage from './pages/MoviePage';
import NotFound from './pages/NotFound';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [apiUrl, setApiUrl] = useState([API_URL]);
  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  }, [apiUrl])
  // console.log({setApiUrl});
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
        <Route path="/404" exact component='NotFound'>
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}
