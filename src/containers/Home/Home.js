import React, { Component } from 'react'

import Header from '../../components/UI/Header/Header'


class Home extends Component
{
    openPictureBook=()=>
    {
        this.props.history.push('/picturebook')
    }

    render()
    {
        return(<div>
            <Header
                title='Home'
                imgStore='planetSpin'
                click={this.openPictureBook}
            />

        </div>)
    }
}

export default Home;
