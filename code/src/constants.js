const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'c8c8ac5de9e2d4382f575e3ad56135d9';
export const POPULAR_URL = `${BASE_URL}popular?api_key=${API_KEY}`
export const TOP_RATED_URL = `${BASE_URL}top_rated?api_key=${API_KEY}`
export const BASE_IMAGE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
export const MOVIE_URL = (movieId) => { return `${BASE_URL}${movieId}?api_key=${API_KEY}`; }