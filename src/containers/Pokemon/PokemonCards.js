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
        const {displayedPokemons, isFetched} = this.props

        return(<Fragment>
            <Header
                title='Pokemon Cards' backButton nextButton
                backButtonClicked={()=> this.props.history.push('/')}
                nextButtonClicked={()=> this.props.history.push('/pokemonpage')}
            />

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

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCards);
