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
        this.props.getCard(this.props.cards, this.props.answers)
    }

    getRandomCard=(currentCards)=> {
        var card = currentCards[Math.floor(Math.random()*currentCards.length)]
        return(card)
    }

    newCard=()=> {
        this.setState({
            current: this.getRandomCard(this.state.cards)
        })
        var cardState = {
        }
        this.props.nextCard(this.props.cards, this.props.current, this.props.answers)
        //this.props.getCard(this.props.cards)
        log(this.props.test)
    }

    render()
    {
        const {cards, current, nextCard, answers, test} = this.props

        return(<div>
            <Header title='FlashCards' imgStore='arrow' nextButton
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
    const {current, cards, answers, test} = state.flashCardsReducer

    return{
        current: current,
        cards: cards,
        answers: answers,
        test: test,
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        nextCard: (cards, current, answers)=> dispatch({type: 'NEXT', cards: cards, current: current, answers: answers}),
        getCard: (cards)=> dispatch({type: 'GET_CARD', cards: cards}),
    }
}


const log=(id_1, id_2)=> console.log((id_1, id_2 || id_1))




export default connect(mapStateToProps, mapDispatchToProps)(FlashCards);
