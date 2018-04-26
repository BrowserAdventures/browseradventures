import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/UI/Header/Header'
import Modal from '../../components/UI/Modal/Modal'

import FlashCardBuilder from '../../components/FlashCardBuilder/FlashCardBuilder'


class FlashCards extends Component
{
    state = {
        current: {},
        cards: [
            {title: 'title1', question: 'question1', answer: 'answer1'},
            {title: 'title2', question: 'question2', answer: 'answer2'},
        ]
    }
    componentWillMount()
    {

        const currentCards = this.state.cards;

        this.setState({
            modal: false,
            cards: currentCards,
            current: this.getRandomCard(currentCards)
        })
    }

    getRandomCard=(currentCards)=> {
        var card = currentCards[Math.floor(Math.random()*currentCards.length)]
        return(card)
    }

    newCard=()=> {
        this.setState({
            current: this.getRandomCard(this.state.cards)
        })
    }

    render()
    {
        const {cards, current, nextCard} = this.props

        return(<div>
            <Header title='FlashCards' imgStore='blueOrb'
                backButtonClicked={()=> this.props.history.push('/')}
                click={()=> this.setState({modal:true})}
                nextButtonClicked={this.newCard}
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>
            </Modal>
            <FlashCardBuilder
                title={this.state.current.title}
                question='question'
                answer='answer'
            />
            {log(cards.length)}
        </div>)
    }
}


const mapStateToProps=(state)=>
{
    const {current, cards} = state.flashCardsReducer

    return{
        current: current,
        cards: cards
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        nextCard: ()=> dispatch({type: 'NEXT'})
    }
}


const log=(self)=> console.log(self)




export default connect(mapStateToProps, mapDispatchToProps)(FlashCards);
