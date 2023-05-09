import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function MovieItem({movie}) {
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
        </Card>
    );
}

export default MovieItem;