import React, { useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Redirect, Route, useHistory, Link  } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: '100%'
    }
}));

export const App = () => {
    return (
        <Container>
            <BrowserRouter>
                <Box>
                    <Link to={"/popular"}>
                        <Button 
                            variant="contained" 
                            color="primary">Popular movies</Button>
                    </Link>
                    <Link to={"/top-rated"}>
                        <Button 
                            variant="contained" 
                            color="primary">Top rated movies</Button>
                    </Link>
                </Box>
                <hr />
                <Switch>
                    <Route path="/popular">
                        <Popular />
                    </Route>
                    <Route path="/top-rated">
                        <TopRated />
                    </Route>
                    <Route path="/movie/:id">
                        Show movie here =)
                    </Route>
                    <Route path="/" exact>
                        <Redirect to="/popular" />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Container>
    )
}

function Popular() {
    const [movies, setMovies] = useState([]);
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c8c8ac5de9e2d4382f575e3ad56135d9&language=en-US&page=1';
    const classes = useStyles();

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
    }, []);

    return (
        <Grid container spacing={3}>
            {movies.map((movie) => {
                return (
                    <Grid item xs={12} sm={6} md={3} key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <Card>
                                <CardMedia 
                                    className={classes.media} 
                                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                <CardHeader 
                                    title={movie.title}
                                    subheader={movie.release_date} />
                                <CardContent>
                                    <Typography variant="body2">
                                        Average vote: <strong>{movie.vote_average}</strong>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    )
}

function TopRated() {
    const [movies, setMovies] = useState([]);
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c8c8ac5de9e2d4382f575e3ad56135d9&language=en-US&page=1';
    const classes = useStyles();

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
    }, []);

    return (
        <Grid container spacing={3}>
            {movies.map((movie) => {
                return (
                    <Grid item xs={12} sm={6} md={3} key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <Card>
                                <CardMedia 
                                    className={classes.media} 
                                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                <CardHeader 
                                    title={movie.title}
                                    subheader={movie.release_date} />
                                <CardContent>
                                    <Typography variant="body2">
                                        Average vote: <strong>{movie.vote_average}</strong>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    )
}