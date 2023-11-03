import { useParams } from "react-router-dom";
import { DetailCard } from "../componentes";
import { useState, useEffect } from "react";
import { apiCall } from "../api/apiCall";

function Details(){

    const { pokemon_id } = useParams();

    const [pokemonData, setPokemonData] = useState();
    const [moves, setMoves] = useState();
    const [abilities, setAbilities] = useState();


    useEffect(() => {
        const asyncFn = async () => {
            const resObtained = await apiCall(`/pokemon/${pokemon_id}`)
            setPokemonData(resObtained)
            setMoves(resObtained.moves)
            setAbilities(resObtained.abilities)

        };
        asyncFn();
    }, [])

    


    return(
        <>
        {
            pokemonData && <DetailCard
            url_imagen_pokemon={pokemonData.forms[0].url}
            pokemon_name={pokemon_id}
            pokemon_moves={moves}
            pokemon_abilities={abilities}
            />
        }
        </>
    )
}

export default Details;