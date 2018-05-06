const initialState =
{
    pokemons: [],
    displayedPokemons: [],
    isFetched: false,
}

const pokemonReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case ('REQUEST_POKEMONS'):
        return{
            ...state,
            isFetched: true
        }

        case ('RECEIVE_POKEMONS'):
            let pokemons = action.pokemons.map(pokemon=> {
                let { url } = pokemon
                pokemon.id = url.substring(34, url.length - 1)

                return pokemon
            })

        return {
            ...state,
            pokemons,
            displayedPokemons: pokemons.slice(0, 60),
            isFetched: false,
        }

        default: return state
    }
}





export default pokemonReducer;
