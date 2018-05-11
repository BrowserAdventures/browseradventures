import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'

import * as actions from './store/actions/pokemonActions'
import Header from '../../components/UI/Header/Header'
import PokemonCardsBuilder from '../../components/PokemonBuilder/PokemonCardsBuilder'


class PokemonCards extends Component
{
    componentWillMount()
    {
        this.props.fetchPokemonStats(this.props.pokemon)
    }

    render()
    {
        return(<Fragment>
            <Header
                title={this.props.pokemon.name}
                backButton={()=> this.props.history.push('/pokemonpage')}
            />
            <PokemonCardsBuilder currentPokemon={this.props.pokemon} />
            {log(this.props.pokemonStats)}
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    return{
        pokemon: state.pokemonReducer.pokemon,
        pokemonStats: state.pokemonReducer.pokemonStats,
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return{
        fetchPokemonStats: (id)=> dispatch(actions.fetchPokemonStats(id)),

    }
}
let log=(id)=> console.log(id)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCards);
