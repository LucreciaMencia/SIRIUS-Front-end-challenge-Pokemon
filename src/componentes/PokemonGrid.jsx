import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { GridCard } from './GridCard';
import { useNavigate } from 'react-router'
import Masonry from '@mui/lab/Masonry';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export function PokemonGrid(props) {

  const navigate = useNavigate()

  function onClickNavigate(pokemon_id) {
    navigate(`/details/${pokemon_id}`)
  }


  return (
    <Box
      sx={{ flexGrow: 1 }}>
      <Masonry columns={4} spacing={2}>
        {
          props.pokemon_result.map(pokemon =>

            <Grid key={pokemon.name} item xs={2} sm={4} md={4}
              onClick={() => onClickNavigate(pokemon.name)}>
              <GridCard
                pokemon_name={pokemon.name}
                pokemon_url={pokemon.url}
              />
            </Grid>
          )
        }
      </Masonry>
    </Box>
  );
}










{/* <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Label>{index + 1}</Label>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box> */}