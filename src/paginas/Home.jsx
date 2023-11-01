import { useEffect, useState } from "react"
import { obtener20Pokemon } from "../api"
import { ButtonSiguiente } from "../componentes";

function Home() {

    const pokemon_path = 'https://pokeapi.co/api/v2/pokemon/'

    const [pokemones, setPokemones] = useState([]);
    const [url, setUrl] = useState([]);


    useEffect(async () => {
        const paginasPokemon = await obtener20Pokemon(pokemon_path).then((res) => res.json())
        setPokemones(paginasPokemon.results)
        setUrl(paginasPokemon.next)
        console.log(paginasPokemon.next)
    }, [])

    return (
        <>
            <div>
                <h1>POKÈDEX</h1>
                {
                    pokemones.map(pokemon => <p>
                        {pokemon.name}
                    </p>)
                }
                <ButtonSiguiente 
                urlSiguientePagina={url}
                />
            </div>
        </>
    )
}

export default Home;