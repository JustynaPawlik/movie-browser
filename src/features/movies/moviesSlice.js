import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genres: [],
    state: "loading"
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchPopularMovies: () => { },
        setMovies: (state, { payload: movies }) => {
            state.movies = movies;
        },
        setMoviesState: (state, { payload: stateName }) => {
            state.state = stateName;
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
    },
});

export const {
    fetchPopularMovies,
    setMovies,
    setMoviesState,
    setGenres,
} = moviesSlice.actions;

export const selectMovies = state => state.movies;
export const selectMoviesState = state => state.movies.state;
export const selectGenres = state => state.movies.genres;

export default moviesSlice.reducer;