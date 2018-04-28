import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/UI/Header/Header'
import Modal from '../../components/UI/Modal/Modal'
import Bar from '../../components/UI/Bar/Bar'

import FlashCardBuilder from '../../components/FlashCardBuilder/FlashCardBuilder'
import Questions from '../../components/FlashCardBuilder/Questions'


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
        this.props.getCard(this.props.cards)
    }

    getRandomCard=(currentCards)=> {
        var card = currentCards[Math.floor(Math.random()*currentCards.length)]
        return(card)
    }

    newCard=()=> {
        this.setState({
            current: this.getRandomCard(this.state.cards)
        })
        //this.props.nextCard(this.props.cards, this.props.current)
        this.props.getCard(this.props.cards)
    }

    render()
    {
        const {cards, current, nextCard, answers} = this.props

        return(<div>
            <Header title='FlashCards' imgStore='blueOrb'
                backButtonClicked={()=> this.props.history.push('/')}
                click={()=> this.setState({modal:true})}
                nextButtonClicked={this.newCard}
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>
            </Modal>
            <FlashCardBuilder
                title={current.title}
                question={current.question}
                answer={current.answer}
            />
            <Questions answers={answers} />
        </div>)
    }
}


const mapStateToProps=(state)=>
{
    const {current, cards, answers} = state.flashCardsReducer

    return{
        current: current,
        cards: cards,
        answers: answers,
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        nextCard: (cards, current)=> dispatch({type: 'NEXT', cards: cards, current: current}),
        getCard: (cards)=> dispatch({type: 'GET_CARD', cards: cards}),
    }
}


const log=(self)=> console.log(self)




export default connect(mapStateToProps, mapDispatchToProps)(FlashCards);
