import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Details() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const movie = useSelector(store => store.currentMovie)

    const backButton = () => {
        console.log('test back');
        history.push('/');
    }

    useEffect(() => {
        console.log(params);
        dispatch({ type: 'FETCH_CURRENT_MOVIE', payload: { id: params.id }});
    }, [])

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card sx={{ mt: 5, ml: 5 }} elevation={3}>
                        <CardMedia
                            component="img"
                            height="auto"
                            sx={{ objectFit: "contain" }}
                            image={movie.poster}
                            title={movie.title}
                        />
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ m: 5 }} elevation={3}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {movie.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {movie.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={{ maxWidth: 'auto', mt: 5, mr:5, p: 3}} elevation={3}>
                        <Button variant="contained" sx={{ px: 4, py: 1 }} onClick={() => {
                            history.push('/');
                        }}>Back</Button>
                    </Paper>
                    <Card sx={{ maxWidth: 'auto', mt: 5, mr:5, p: 3}} elevation={3}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Genres:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {movie.genres}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Details;