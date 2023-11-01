

export default function obtener20Pokemon(pokemon_path){

    const parametros = {
        method: 'GET'
    }
    
    return fetch(`${pokemon_path}`, parametros)
} 