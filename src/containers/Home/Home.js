import React, { Component } from 'react'

import Header from '../../components/UI/Header/Header'


class Home extends Component
{
    openPage=(pathname)=>
    {
        this.props.history.push(`/${pathname}`)
    }

    render()
    {
        return(<div>
            <Header
                title='Home'
                imgStore='darkPlanet'
            />
            <h3 onClick={()=> this.openPage('picturebook')}>Picture Book</h3>
            <h3 onClick={()=> this.openPage('flashcards')}>FlashCards</h3>
            <h3 onClick={()=> this.openPage('boxgenerator')}>BoxGenerator</h3>
        </div>)
    }
}

export default Home;
