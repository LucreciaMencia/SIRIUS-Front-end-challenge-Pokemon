import { CircularProgress, FormControlLabel, Switch } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from "react";
import { apiCall } from "../api/apiCall";
import { PokemonGrid, PokemonTable } from "../componentes";


function Home() {

    const [urlCurrentPage, setUrlCurrentPage] = useState('/pokemon/')
    const [currentPage, setCurrentPage] = useState();
    const [gridMode, setGridMode] = useState(true);

    console.log(currentPage)

    useEffect(() => {
        const asyncFn = async () => {
            setCurrentPage(undefined)
            const pokemonPage = await apiCall(urlCurrentPage)
            setCurrentPage(pokemonPage)
        };
        asyncFn();
    }, [urlCurrentPage])

    function onChangePage(event, page) {
        let offset = (page - 1) * 20;
        setUrlCurrentPage(`/pokemon/?offset=${offset}&limit=20`)
    }

    function onGridModeChange(event) {
        setGridMode(event.target.checked);
    }

    return (
        <>
            <div>
                <h1>POKÉDEX</h1>
                <FormControlLabel control={
                    <Switch
                        checked={gridMode}
                        onChange={onGridModeChange}/>
                } label="Grid/Table" />
                {
                    currentPage === undefined
                        ? <CircularProgress />
                        : gridMode
                            ? <PokemonGrid pokemon_result={currentPage.results} />
                            : <PokemonTable pokemon_result={currentPage.results} />
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

