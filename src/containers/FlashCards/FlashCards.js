import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/UI/Header/Header'
import Modal from '../../components/UI/Modal/Modal'

//import PictureBookForm from '../../components/PictureBookBuilder/PictureBookForm'
//import PictureBookBuilder from '../../components/PictureBookBuilder/PictureBookBuilder'


class FlashCards extends Component
{
    componentWillMount()
    {
        this.setState({modal: false})
    }

    render()
    {
        return(<div>
            <Header title='FlashCards' imgStore='blueOrb'
                backButtonClicked={()=> this.props.history.push('/')}
                click={()=> this.setState({modal:true})}
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>
            </Modal>

        </div>)
    }
}


const mapStateToProps=(state)=>
{
    const {card, cards} = state.flashCardsReducer

    return{
        card: card,
        cards: cards
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{

    }
}







export default connect(mapStateToProps, mapDispatchToProps)(FlashCards);
