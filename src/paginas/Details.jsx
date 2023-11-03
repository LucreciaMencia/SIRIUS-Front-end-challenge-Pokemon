import { useParams } from "react-router-dom";
import { DetailCard } from "../componentes";
import { useState, useEffect } from "react";
import { apiCall } from "../api/apiCall";

function Details(){

    const { pokemon_id } = useParams();

    const [pokemonData, setPokemonData] = useState();

    useEffect(() => {
        const asyncFn = async () => {
            const resObtained = await apiCall(`/pokemon/${pokemon_id}`)
            setPokemonData(resObtained)
            console.log(resObtained.forms[0].url)
        };
        asyncFn();
    }, [])

    


    return(
        <>
        {
            pokemonData && <DetailCard
            url_imagen_pokemon={pokemonData.forms[0].url}
            pokemon_name={pokemon_id}
            />
        }
        </>
    )
}

export default Details;