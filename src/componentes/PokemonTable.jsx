import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react"
import { apiCall } from '../api/apiCall';
import { CircularProgress } from '@mui/material';



export function PokemonTable(props) {
    console.log(props.pokemon_result)
    // Recibis: Lista de Pokemones (Nombre y URL del detalle)
    // Necesitas: el detalle de cada pokemon

    // A list of the deails of every pokemon in this page
    const [pokemonDetails, setDetails] = useState();

    useEffect(() => {
        const asyncFn = async () => {
            const detailsPromise = props.pokemon_result.map(item => apiCall(`/pokemon/${item.name}`));

            const detailsList = await Promise.all(detailsPromise);

            setDetails(detailsList);
        };
        asyncFn();
    }, [])

    return (
        pokemonDetails === undefined
            ? <CircularProgress />
            : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <caption>Pokemon features</caption>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Weight</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pokemonDetails.map((pokemon) => (
                                <TableRow key={pokemon.name}>
                                    <TableCell sx={{ textTransform: 'capitalize' }} component="th" scope="row">
                                        {pokemon.name}
                                    </TableCell>
                                    <TableCell
                                        sx={{ textTransform: 'capitalize' }}
                                        align="right">{
                                            pokemon.types.map(item =>
                                                <span key={item.type.name} style={{ margin: '4px 2px' }}>{item.type.name}</span>
                                            )}
                                    </TableCell>
                                    <TableCell align="right">{pokemon.weight}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
    );
}
