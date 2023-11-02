import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from "react"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import CircularProgress from '@mui/material/CircularProgress';



export function GridCard(props) {

    const [urlPokemonSprites, setUrlPokemonSprites] = useState();

    useEffect(() => {
        const asyncFn = async () => {
            const pokemonFormData = await fetch(props.pokemon_url)
                .then((res) => res.json());
            const urlFormPokemon = await fetch(pokemonFormData.forms[0].url)
                .then((res) => res.json());
            const pokemonSprites = urlFormPokemon.sprites.front_default
            setUrlPokemonSprites(pokemonSprites)
        };
        asyncFn();
    }, [props.pokemon_url])



    const theme = useTheme();
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.pokemon_name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
            </Box>
            {
                urlPokemonSprites === undefined
                    ? <CircularProgress />
                    : <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={urlPokemonSprites}
                        alt={props.pokemon_name}
                    />
            }
        </Card>
    );
}