import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/bookPageActions'

import Header from '../../../components/UI/Header/Header'
import Modal from '../../../components/UI/Modal/Modal'

import BookPageForm from '../../../components/PictureBookBuilder/BookPageBuilder/BookPageForm'
//import PictureBookBuilder from '../../components/PictureBookBuilder/PictureBookBuilder'


class BookPage extends Component
{
    componentWillMount()
    {
        this.setState({modal: false})
    }

    submit=(description)=>
    {
        const passedState = this.props.location.state;
        this.props.addDescription(passedState.id, description)
        this.setState({modal: false})
    }

    render()
    {
        return(<div>
            <Header title='Book Page' imgStore='arrow2'
                backButtonClicked={()=> this.props.history.push('/picturebook')}
                click={()=> this.setState({modal:true})}
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>

            </Modal>
            <BookPageForm
                description={this.props.description}
                onChange={this.props.inputDescription}
                submit={this.submit}
            />
        </div>)
    }
}


const mapStateToProps=(state)=>
{
    const {description} = state.bookPageReducer

    return{
        description: description,
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        inputDescription: (input)=> dispatch({type: 'DESCRIPTION', description: input}),
        addDescription: (id, input)=> dispatch(actions.add_description(id, input))
    }
}







export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
