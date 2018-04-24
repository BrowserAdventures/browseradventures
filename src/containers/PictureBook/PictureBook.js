import React, { Component } from 'react'

import Header from '../../components/UI/Header/Header'
import Modal from '../../components/UI/Modal/Modal'


class PictureBook extends Component
{
    componentWillMount()
    {
        this.setState({modal: false})
    }

    newPictureBook=()=>
    {
        this.setState({modal: true})
    }

    render()
    {
        return(<div>
            <Header title='Picture Book' imgStore='arrow2'
                backButtonClicked={()=> this.props.history.push('/')}
                click={this.newPictureBook}
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})} />
        </div>)
    }
}

export default PictureBook;
