import { useEffect, useState } from "react"
import { obtener20Pokemon } from "../api"
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CircularProgress } from "@mui/material";
import Pagination from '@mui/material/Pagination';


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

    //numero de pagina x 20

    function onChangePage(event, page){
        let offset = page*20;
        setUrlPaginaActual(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
    }

    // function onClickForward() {
    //     setUrlPaginaActual(paginaActual.next)
    // }

    // function onClickBack() {
    //     setUrlPaginaActual(paginaActual.previous)
    // }

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
                <Pagination 
                count={64} 
                variant="outlined" 
                color="secondary"
                onChange={onChangePage}
                />



                {/* <ArrowBackIosIcon
                    onClick={onClickBack}
                />
                <ArrowForwardIosIcon
                    onClick={onClickForward}
                /> */}

            </div>
        </>
    )
}

export default Home;