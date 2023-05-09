import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './MovieList.css'
import MovieItem from './MovieItem';
import Paper from '@mui/material/Paper';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section className="movies">
                <Box component="span" sx={{ p: 2 }}>
                    <Paper sx={{ mx: 48, my: 2, p: 4, width: 'auto', fontSize: 32 }} elevation={3}>
                        Movie List
                    </Paper>
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