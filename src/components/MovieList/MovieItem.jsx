import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function MovieItem({movie}) {
    const history = useHistory();

    const checkDetails = () => {
        history.push(`/details/${movie.id}`);
    }

    return(
        <Card sx={{ maxWidth: 345 }} elevation={3} >
            <CardMedia
                sx={{ height: 140 }}
                image={movie.poster}
                title={movie.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={checkDetails}>Details</Button>
            </CardActions>
        </Card>
    );
}

export default MovieItem;