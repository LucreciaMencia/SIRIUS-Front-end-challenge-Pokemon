export function apiCall(pokemon_path){

    const BASE_URL = 'https://pokeapi.co/api/v2'
    const parameters = {
        method: 'GET'
    }
    
    return fetch(`${BASE_URL}${pokemon_path}`, parameters).then((res) => res.json());
} 