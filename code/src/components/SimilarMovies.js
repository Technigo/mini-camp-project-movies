import React from 'react';

import { MOVIE_URL } from './../constants';
import { MovieGrid } from './MovieGrid';

export const SimilarMovies = (props) => {
    const movieUrl = MOVIE_URL(`${props.id}/similar`);

    return (
        <MovieGrid 
            url={movieUrl}
            title="Similar" />
    )
}