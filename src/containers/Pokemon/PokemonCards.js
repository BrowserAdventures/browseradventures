import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'

import * as actions from './store/actions/pokemonActions'

import Header from '../../components/UI/Header/Header'
import PokemonCardsBuilder from '../../components/PokemonBuilder/PokemonCardsBuilder'


class PokemonCards extends Component
{
    componentDidMount()
    {
        this.props.fetchPokemons()
    }

    render()
    {
        const {pokemon, isFetched} = this.props

        return(<Fragment>
            <Header
                title={pokemon.name} backButton
                backButtonClicked={()=> this.props.history.push('/pokemonpage')}
            />
            <PokemonCardsBuilder currentPokemon={pokemon} />
            {log(pokemon)}
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    const {pokemon, displayedPokemons, isFetched} = state.pokemonReducer

    return{
        pokemon: pokemon,
        displayedPokemons: displayedPokemons,
        isFetched: isFetched,
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        fetchPokemons: ()=> dispatch(actions.fetchPokemons()),
    }
}

const log=(id)=> console.log(id)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCards);
