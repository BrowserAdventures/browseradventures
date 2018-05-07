import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'

import * as actions from './store/actions/pokemonActions'

import Header from '../../components/UI/Header/Header'
import LoadingAnimation from '../../components/UI/LoadingAnimation/LoadingAnimation'
import PokemonPageBuilder from '../../components/PokemonBuilder/PokemonPageBuilder'


class PokemonPage extends Component
{
    componentDidMount()
    {
        this.props.fetchPokemons()
    }

    openPokemon=(pokemon)=> {
        this.props.openPokemon(pokemon)
        this.props.history.push('/pokemoncards')
    }

    render()
    {
        const {pokemons, isFetched} = this.props

        const displayPokemons = isFetched ?
            <LoadingAnimation /> :
            <PokemonPageBuilder
                pokemons={pokemons}
                open={this.openPokemon}
            />

        return(<Fragment>
            <Header
                title='Pokemon Page' backButton
                backButtonClicked={()=> this.props.history.push('/')}
            />
            <ul>{displayPokemons}</ul>
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    const {pokemons, isFetched} = state.pokemonReducer

    return{
        pokemons: pokemons,
        isFetched: isFetched,
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        fetchPokemons: ()=> dispatch(actions.fetchPokemons()),
        openPokemon: (pokemon)=> dispatch({type: 'POKEMON_CARD', pokemon: pokemon}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);
