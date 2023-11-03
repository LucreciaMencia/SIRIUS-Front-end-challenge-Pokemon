import * as React from 'react';
import { useEffect, useState } from "react"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';


const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));


export function GridCard(props) {

    const [urlPokemonSprites, setUrlPokemonSprites] = useState();
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const asyncFn = async () => {
            const pokemonData = await fetch(props.pokemon_url)
                .then((res) => res.json());

            const urlFormPokemon = await fetch(pokemonData.forms[0].url)
                .then((res) => res.json());

            const pokemonSprites = urlFormPokemon.sprites.front_default

            setUrlPokemonSprites(pokemonSprites)
            setTypes(pokemonData.types);
        };
        asyncFn();
    }, [props.pokemon_url])

    return (
        <Paper
            elevation={3}
            key={props.pokemon_name}>
            <Label sx={{
                color: 'white',
                backgroundColor: '#e63946',
                textTransform: 'capitalize',
                fontSize: '18pt'
            }}>{props.pokemon_name}</Label>
            {
                urlPokemonSprites === undefined
                    ? <CircularProgress />
                    : <img
                        // srcSet={`${urlPokemonSprites}`}
                        src={`${urlPokemonSprites}`}
                        alt={props.pokemon_name}
                        loading="lazy"
                        style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            display: 'block',
                            width: '100%',
                        }}
                    />
            }
            <div style={{
                color: 'white',
                backgroundColor: '#DC525D',
                textTransform: 'capitalize',
                fontFamily: 'sans-serif',
                fontSize: '12pt',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
                padding: '5px'
            }}>
                {
                    types.map(type => <span style={{margin: '4px 2px'}}>{type.type.name}</span>)
                }
            </div>
        </Paper>
    );
}







// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

// <Card sx={{ display: 'flex' }}>
// <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//     <CardContent sx={{ flex: '1 0 auto' }}>
//         <Typography component="div" variant="h5">
//             {props.pokemon_name}
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary" component="div">
//             Mac Miller
//         </Typography>
//     </CardContent>
//     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//         <IconButton aria-label="previous">
//             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//         </IconButton>
//         <IconButton aria-label="play/pause">
//             <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//         </IconButton>
//         <IconButton aria-label="next">
//             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//         </IconButton>
//     </Box>
// </Box>
// {
//     urlPokemonSprites === undefined
//         ? <CircularProgress />
//         : <CardMedia
//             component="img"
//             sx={{ width: 151 }}
//             image={urlPokemonSprites}
//             alt={props.pokemon_name}
//         />
// }
// </Card>