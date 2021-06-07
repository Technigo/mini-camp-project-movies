import React, { useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { BASE_IMAGE_POSTER_URL } from './../constants';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: '#fff',
    },
}));

export const MovieGrid = (props) => {
    const [movies, setMovies] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch(props.url)
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
    }, [props.url]);

    return (
        <GridList cellHeight={400} cols={3}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                <Typography variant="h5" gutterBottom>
                    {props.title}
                </Typography>
            </GridListTile>
            {movies.map((movie) => {
                return (
                    <GridListTile key={movie.id}>
                        <img 
                            src={`${BASE_IMAGE_POSTER_URL}${movie.poster_path}`}
                            alt={movie.title} />
                        <GridListTileBar
                            title={movie.title}
                            subtitle={movie.release_date}
                            actionIcon={
                                <IconButton 
                                    aria-label={`info about ${movie.title}`} 
                                    className={classes.icon} 
                                    component={Link}
                                    to={`/movie/${movie.id}`} >
                                    <InfoIcon />
                                </IconButton>
                            } /> 
                    </GridListTile>
                )
            })}
        </GridList>
    )
}