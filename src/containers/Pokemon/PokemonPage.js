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

    render()
    {
        const {displayedPokemons, isFetched} = this.props

        const pokemons = isFetched ?
            <p>Loading...</p> :
            <PokemonPageBuilder pokemons={displayedPokemons} />

        return(<Fragment>
            <Header
                title='Pokemon Page' backButton
                backButtonClicked={()=> this.props.history.push('/pokemoncards')}
            />
            <ul>{pokemons}</ul>
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    const {pokemons, displayedPokemons, isFetched} = state.pokemonReducer

    return{
        pokemons: pokemons,
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

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);
