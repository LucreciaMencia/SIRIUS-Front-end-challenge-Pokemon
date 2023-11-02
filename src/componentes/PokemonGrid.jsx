import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { GridCard } from './GridCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function PokemonGrid(props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          props.pokemon_result.map(pokemon =>

            <Grid key={pokemon.name} item xs={2} sm={4} md={4}>
              <GridCard
                pokemon_name={pokemon.name}
                pokemon_url={pokemon.url}
              />
            </Grid>
          )
        }
      </Grid>
    </Box>
  );
}

