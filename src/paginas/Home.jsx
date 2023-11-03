import { useEffect, useState } from "react"
import { apiCall } from "../api/apiCall"
import { CircularProgress } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import { PokemonGrid } from "../componentes";


function Home() {

    const [urlCurrentPage, setUrlCurrentPage] = useState('/pokemon/')
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        const asyncFn = async () => {
            const pokemonPage = await apiCall(urlCurrentPage)
            setCurrentPage(pokemonPage)
        };
        asyncFn();
    }, [urlCurrentPage])

    function onChangePage(event, page) {
        let offset = (page - 1) * 20;
        setUrlCurrentPage(`/pokemon/?offset=${offset}&limit=20`)
    }

        
    return (
        <>
            <div>
                <h1>POKÉDEX</h1>
                {
                    currentPage === undefined
                        ? <CircularProgress />
                        : <PokemonGrid
                        pokemon_result={currentPage.results}
                        />
                }
                <Pagination
                    count={64}
                    variant="outlined"
                    onChange={onChangePage}
                />
            </div>
        </>
    )
}

export default Home;

