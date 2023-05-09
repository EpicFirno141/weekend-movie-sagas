import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './MovieList.css'
import MovieItem from './MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section className="movies">
                <Box component="span" sx={{ p: 2, border: '1px solid lightgrey', backgroundColor: 'lightgray' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {movies.map(movie => {
                            return (
                                <Grid item xs={3}>
                                    <MovieItem 
                                        key={movie.id}
                                        movie = {movie}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </section>
        </main>

    );
}

export default MovieList;