import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Details() {
    const params = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(store => store.currentMovie)

    useEffect(() => {
        console.log(params);
        dispatch({ type: 'FETCH_CURRENT_MOVIE', payload: { id: params.id }});
    }, [])

    return(
        <Box>
            <Card sx={{ maxWidth: 750, m: 5 }} elevation={3}>
                <CardMedia
                    sx={{ height: 'auto' }}
                    image={movie.poster}
                    title={movie.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.genres}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Details;