import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { API_URL, POSTER_URL } from './components/Urls';

import MovieListPage from './pages/MovieListPage';
import MoviePage from './pages/MoviePage';
import NotFound from './pages/NotFound';
import Header from './components/Header';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [apiUrl, setApiUrl] = useState(API_URL);
  const [filterValue, setFilterValue] = useState('popular');
  const history = useHistory();
  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err))
      .finally(() => {
        if (movies.length > 0) {
          history.push('/');
        }
      });
  }, [apiUrl])
  return (
    <React.Fragment>
      <Header setApiUrl={setApiUrl} setFilterValue={setFilterValue} filterValue={filterValue}/>
      <Switch>
        <Route path='/' exact>
        <div className='movie-list'>
          {movies.map((movie) => {
            return (
              <MovieListPage
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
        <Route path="/404" exact>
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </React.Fragment>
  )
}
