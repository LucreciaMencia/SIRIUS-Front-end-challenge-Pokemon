import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function DetailCard(props) {

  const [expandedMoves, setExpandedMoves] = React.useState(false);
  const [expandedAbilities, setExpandedAbilities] = React.useState(true);

  const handleMovesExpandClick = () => {
    setExpandedMoves(!expandedMoves);
  };

  const handleAbilitiesExpandClick = () => {
    setExpandedAbilities(!expandedAbilities);
  };


  const [urlPokemonSprites, setUrlPokemonSprites] = useState();

  useEffect(() => {

    const asyncFn = async () => {
      const pokemonFormData = await fetch(props.url_imagen_pokemon)
        .then((res) => res.json());
      const pokemonSprites = pokemonFormData.sprites.front_default
      setUrlPokemonSprites(pokemonSprites)
    };
    asyncFn();

  }, [props.url_imagen_pokemon])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.pokemon_name}
        sx={{
          color: 'white',
          backgroundColor: '#e63946',
          textTransform: 'capitalize',
          fontSize: '18pt'
        }}
      // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="400"
        image={urlPokemonSprites}
        alt={props.pokemon_name}
      />
       <CardActions disableSpacing>
        <h5>Abilities</h5>
        <ExpandMore
          expand={expandedAbilities}
          onClick={handleAbilitiesExpandClick}
          aria-expanded={expandedAbilities}
          aria-label="show more"
        ><ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expandedAbilities} timeout="auto" unmountOnExit>
        <CardContent>
          {
            props.pokemon_abilities.map(pokemon_ability =>
              <li>{pokemon_ability.ability.name}</li>
            )
          }
        </CardContent>
      </Collapse>


      <CardActions disableSpacing>
        <h5>Moves</h5>
        <ExpandMore
          expand={expandedMoves}
          onClick={handleMovesExpandClick}
          aria-expanded={expandedMoves}
          aria-label="show more"
        ><ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expandedMoves} timeout="auto" unmountOnExit>
        <CardContent>
          {
            props.pokemon_moves.map(pokemon_move =>
              <li>{pokemon_move.move.name}</li>
            )
          }
        </CardContent>
      </Collapse>
    </Card>
  );
}
