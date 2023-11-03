import { CircularProgress, FormControlLabel, Switch } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from "react";
import { apiCall } from "../api/apiCall";
import { PokemonGrid, PokemonTable } from "../componentes";

const ITEMS_PER_PAGE = 8;

function Home() {

    const [currentPage, setCurrentPage] = useState();
    const [gridMode, setGridMode] = useState(true);
    const [page, setPage] = useState(1);

    console.log(currentPage)

    useEffect(() => {
        const asyncFn = async () => {
            setCurrentPage(undefined)
            let offset = (page - 1) * ITEMS_PER_PAGE;
            const pokemonPage = await apiCall(`/pokemon/?offset=${offset}&limit=${ITEMS_PER_PAGE}`)
            setCurrentPage(pokemonPage)
        };
        asyncFn();
    }, [page])

    function onChangePage(event, page) {
        setPage(page)
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
                        onChange={onGridModeChange} />
                } label="Grid/Table" />
                {
                    currentPage === undefined
                        ? <CircularProgress />
                        : gridMode
                            ? <PokemonGrid pokemon_result={currentPage.results} />
                            : <PokemonTable pokemon_result={currentPage.results} />
                }
                {
                    currentPage && (
                        <Pagination
                            page={page}
                            count={Math.trunc(currentPage.count / ITEMS_PER_PAGE)}
                            variant="outlined"
                            onChange={onChangePage}
                        />
                    )
                }
            </div>
        </>
    )
}

export default Home;

