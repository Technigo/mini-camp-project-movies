import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

import { MOVIE_URL, BASE_IMAGE_POSTER_URL } from './../../constants';
import { SimilarMovies } from './../../components/SimilarMovies';

const useStyles = makeStyles((theme) => ({
    poster: {
        maxWidth: '100%'
    },
}));

export const Movie = () => {
    let { id } = useParams();
    const classes = useStyles();

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    const movieUrl = MOVIE_URL(id);

    useEffect(() => {
        fetch(movieUrl)
            .then((res) => res.json())
            .then((jsonData) => {
                setMovie(jsonData);
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            {loading
                ?   <>Loading</>
                :   <Grid container spacing={1}>
                        <Grid item xs sm={3}>
                            <img 
                                src={`${BASE_IMAGE_POSTER_URL}${movie.poster_path}`}
                                alt={movie.title}
                                className={classes.poster} />
                        </Grid>
                        <Grid item xs sm={9}>
                            <Typography variant="h5" gutterBottom>
                                {movie.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {movie.overview}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Rating: <strong>{movie.vote_average}</strong>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Release date: <strong>{movie.release_date}</strong>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Genres: <strong>{movie.genres.map(genre => {
                                    return genre.name
                                }).join(", ")}</strong>
                            </Typography>
                        </Grid>
                        <hr />
                        <SimilarMovies id={movie.id} />
                    </Grid>
            }
        </>
    )
}