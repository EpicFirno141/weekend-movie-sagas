import Paper from '@mui/material/Paper'
import { useState } from 'react';


function Header() {
    return(
        <Paper square elevation={3} sx={{ p: 3, fontSize: 32, textAlign: 'left'}}>Movies</Paper>
    );
}

export default Header;