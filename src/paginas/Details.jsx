import { useParams } from "react-router-dom";
import { DetailCard } from "../componentes";

function Details(){

    const { pokemon_id } = useParams();

    console.log(pokemon_id)

    return(
        <>
        <DetailCard/>
        </>
    )
}

export default Details;