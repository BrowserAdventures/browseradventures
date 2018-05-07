import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'

import * as actions from './store/actions/pokemonActions'

import Header from '../../components/UI/Header/Header'
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
        log(pokemon)
    }

    render()
    {
        const {displayedPokemons, isFetched} = this.props

        const pokemons = isFetched ?
            <p>Loading...</p> :
            <PokemonPageBuilder
                pokemons={displayedPokemons}
                open={this.openPokemon}
            />

        return(<Fragment>
            <Header
                title='Pokemon Page' backButton
                backButtonClicked={()=> this.props.history.push('/')}
            />
            <ul>{pokemons}</ul>
            {log(this.props.currentSprites)}
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    const {pokemons, displayedPokemons, isFetched, currentSprites} = state.pokemonReducer

    return{
        pokemons: pokemons,
        displayedPokemons: displayedPokemons,
        isFetched: isFetched,
        currentSprites: currentSprites,
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        fetchPokemons: ()=> dispatch(actions.fetchPokemons()),
        openPokemon: (pokemon)=> dispatch({type: 'POKEMON_CARD', pokemon: pokemon}),
    }
}

const log=(id)=> console.log(id)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);
