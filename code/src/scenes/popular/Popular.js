import React from 'react';

import { POPULAR_URL } from './../../constants';
import { MovieGrid } from './../../components/MovieGrid';

export const Popular = () => {
    return (
        <MovieGrid 
            url={POPULAR_URL}
            title="Popular" />
    )
}