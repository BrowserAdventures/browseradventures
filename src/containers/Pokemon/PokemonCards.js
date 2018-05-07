import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'

import Header from '../../components/UI/Header/Header'
import PokemonCardsBuilder from '../../components/PokemonBuilder/PokemonCardsBuilder'


class PokemonCards extends Component
{
    render()
    {
        return(<Fragment>
            <Header
                title={this.props.pokemon.name} backButton
                backButtonClicked={()=> this.props.history.push('/pokemonpage')}
            />
            <PokemonCardsBuilder currentPokemon={this.props.pokemon} />
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    return{
        pokemon: state.pokemonReducer.pokemon,
    }
}

export default connect(mapStateToProps)(PokemonCards);
