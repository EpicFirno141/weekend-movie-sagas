import Paper from '@mui/material/Paper'
import { useState } from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import { Grid } from '@mui/material';

function Header() {
    return(
        <Paper square elevation={3} sx={{ p: 3, fontSize: 32, textAlign: 'left'}}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid item xs={1}>
                    <MovieIcon sx={{ fontSize: 48}} />
                </Grid>
                <Grid item xs={1}>
                    Movies
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Header;