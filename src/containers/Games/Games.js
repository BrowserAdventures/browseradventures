import React, { Component } from 'react'

import Header from '../../components/UI/Header/Header'
import HomePageBuilder from '../../components/HomePageBuilder/HomePageBuilder'
import birdpoo from '../../assets/imgs/GameImages/birdpoo.png'


class Games extends Component
{
    openPage=(pathname)=>
    {
        this.props.history.push(`/${pathname}`)
    }

    render()
    {
        return(<div>
            <Header
                title='Games' backButton
                backButtonClicked={()=> this.props.history.push('/')}
            />

            <HomePageBuilder
                title='bird poo'
                pathname='bird-poo'
                open={this.openPage}
                instructions='use arrow keys to move bird and use spacebar to poop on people!'
                image={birdpoo}
            />
        </div>)
    }
}


export default Games;
