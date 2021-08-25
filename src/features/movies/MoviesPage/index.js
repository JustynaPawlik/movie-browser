import { useSelector, useDispatch } from "react-redux";
import Tile from "../../../common/Tile"
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { MoviesList } from "./styled";
import { useGetConfig } from "../../../useGetConfig";
import { useGetMovieGenres } from "../useGetMovieGenres";
import { useGetPopularMovies } from "../useGetPopularMovies";
import { selectMovieList, selectMovies, selectMoviesState, setMovieDetails } from "../moviesSlice";
import { selectImagesBaseURL, selectPosterSizes, selectPosterSize, setPosterSize } from "../../../configSlice";
import { useGetMovieDetails } from "../useGetMovieDetails";
import { useEffect } from "react";
import { useDispatchMovieDetails } from "../useDispatchMovieDetails";

const MoviesPage = () => {
        useGetConfig();
        useGetMovieGenres();
        useGetPopularMovies();
        const dispatch = useDispatch();
        const imgURL = useSelector(selectImagesBaseURL);
        const posterSizes = useSelector(selectPosterSizes);
        const moviesState = useSelector(selectMoviesState);
        const movies = useSelector(selectMovies);
        const movieList = useSelector(selectMovieList);
        const posterSize = useSelector(selectPosterSize);

        useDispatchMovieDetails(movieList);

        // useGetMovieDetails(497698);
    
    const onPageResize = () => {
        const maxwidth = window.innerWidth;
        if (maxwidth > "1280") {
            dispatch(setPosterSize(posterSizes[4]))
        } else if (maxwidth > "768") {
            dispatch(setPosterSize(posterSizes[3]))
        } else if (maxwidth > "480") {
            dispatch(setPosterSize(posterSizes[2]))
        } else {
            dispatch(setPosterSize(posterSizes[1]))
        };
    };

    window.addEventListener("resize", onPageResize);

    return (
        <MoviesList title="Movies" >
            {moviesState === "loading" ? (
                <LoadingPage />
            ) : (
                moviesState === "Error" ? (
                    <ErrorPage />
                ) : (
                    movies.movies.map((movie, index) => (
                        <Tile
                            key={movies.movies[index].id}
                            title={movies.movies[index].title}
                            subtitle={new Date(Date.parse(movies.movies[index].release_date)).getFullYear()}
                            releaseDate={movies.movies[index].release_date}
                            genreIds={movies.movies[index].genre_ids}
                            rating={movies.movies[index].vote_average}
                            votes={movies.movies[index].vote_count}
                            overview={movies.movies[index].overview}
                            posterUrl={`${imgURL}${posterSize}${movies.movies[index].poster_path}`}
                        />
                    ))))}
        </MoviesList>
    )
};

export default MoviesPage;