import { useEffect, useState } from "react"
import { obtener20Pokemon } from "../api"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CircularProgress } from "@mui/material";


function Home() {

    const [urlPaginaActual, setUrlPaginaActual] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [paginaActual, setPaginaActual] = useState();

    useEffect(() => {
        const asyncFn = async () => {
            const paginasPokemon = await obtener20Pokemon(urlPaginaActual).then((res) => res.json())
            setPaginaActual(paginasPokemon)
        };
        asyncFn();

    }, [urlPaginaActual])

    function onClick() {
        setUrlPaginaActual(paginaActual.next)
    }

    return (
        <>
            <div>
                <h1>POKÈDEX</h1>
                {
                    paginaActual === undefined
                        ? <CircularProgress />
                        :
                        paginaActual.results.map(pokemon => <p>
                            {pokemon.name}
                        </p>)
                }
                <ArrowForwardIosIcon
                    onClick={onClick}
                />

            </div>
        </>
    )
}

export default Home;