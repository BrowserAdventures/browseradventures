import React, { Component } from 'react'

import Header from '../../components/UI/Header/Header'
import HomePageBuilder from '../../components/HomePageBuilder/HomePageBuilder'
import birdpoo from '../../assets/imgs/GameImages/birdpoo.png'
import skeleton from '../../assets/imgs/GameImages/skeleton.png'
import lasers from '../../assets/imgs/GameImages/lasers.png'
import shooter from '../../assets/imgs/GameImages/shooter.png'
import wizard from '../../assets/imgs/GameImages/wizard.png'


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
            <HomePageBuilder
                title='skeleton archer'
                pathname='archer'
                open={this.openPage}
                instructions='use arrow keys to move and spacebar to shoot bow!'
                image={skeleton}
            />
            <HomePageBuilder
                title='Exploding Lasers'
                pathname='lasers'
                open={this.openPage}
                instructions='use arrow keys to move and spacebar to shoot laser!'
                image={lasers}
            />
            <HomePageBuilder
                title='Wizard Platformer'
                pathname='wizard'
                open={this.openPage}
                instructions='use arrow keys to move and spacebar to cast firebolt!'
                image={wizard}
            />
            <HomePageBuilder
                title='Square Shooter'
                pathname='shooter'
                open={this.openPage}
                instructions='use arrow keys to move and spacebar to shoot'
                image={shooter}
            />
        </div>)
    }
}


export default Games;
