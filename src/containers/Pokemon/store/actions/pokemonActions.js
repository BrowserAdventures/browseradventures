
const requestPokemons=()=>
{
    return{
        type: 'REQUEST_POKEMONS'
    }
}

const receivePokemons=(json)=>
{
    return{
        type: 'RECEIVE_POKEMONS',
        pokemons: json.results
    }
}

export const fetchPokemons=()=>
{
    return dispatch=> {
        dispatch(requestPokemons())

        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=784`)
            .then(response => response.json())
            .then(json => dispatch(receivePokemons(json)))
    }
}
