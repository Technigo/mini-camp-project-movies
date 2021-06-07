import React from 'react';

import { TOP_RATED_URL } from './../../constants';
import { MovieGrid } from './../../components/MovieGrid';

export const TopRated = () => {
    return (
        <MovieGrid 
            url={TOP_RATED_URL}
            title="Top Rated" />
    )
}