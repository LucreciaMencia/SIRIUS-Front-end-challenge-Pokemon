import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router'

export default function ButtonSiguiente(props) {

    const navigate = useNavigate()

    function onClick() {
        navigate(`${props.urlSiguientePagina}`)

    }

    return (
        <ArrowForwardIosIcon
            onClick={onClick}
        />
    )
}