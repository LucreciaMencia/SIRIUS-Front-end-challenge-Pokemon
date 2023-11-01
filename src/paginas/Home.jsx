import { useEffect, useState } from "react"
import { obtener20Pokemon } from "../api"

function Home() {

    const pokemon_path = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {

        obtener20Pokemon(pokemon_path)
            .then((res) => res.json())
            .then(
                
            )

    }, [])

    return (
        <>
            <h1>POKÈDEX</h1>
            <span>

            </span>
        </>
    )
}

export default Home;