import React, { Component } from 'react'
import { connect } from 'react-redux'

//import * as actions from './store/actions/pictureBookActions'

import Header from '../../../components/UI/Header/Header'
import Modal from '../../../components/UI/Modal/Modal'

//import PictureBookForm from '../../components/PictureBookBuilder/PictureBookForm/PictureBookForm'
//import PictureBookBuilder from '../../components/PictureBookBuilder/PictureBookBuilder'


class BookPage extends Component
{
    componentWillMount()
    {
        this.setState({modal: false})
    }

    submit=(description)=>
    {

    }

    render()
    {
        return(<div>
            <Header title='Picture Book' imgStore='arrow2'
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
    //const {} = state.pictureBookReducer

    return{

    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{

    }
}







export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
