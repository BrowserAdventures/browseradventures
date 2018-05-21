import React, { Component, Fragment } from 'react'

import {images} from '../../assets/imgs/HomePageImages'

import ParticleSystemHeader from '../ParticleSystems/ParticleSystemHeader'
import Header from '../../components/UI/Header/Header'
import HomePageBuilder from '../../components/HomePageBuilder/HomePageBuilder'


class Home extends Component
{
    openPage=(pathname)=>
    {
        this.props.history.push(`/${pathname}`)
    }

    render()
    {
        return(<Fragment>
            <ParticleSystemHeader />
            <Header
                title='BrowserAdventrues'
            />
            <HomePageBuilder
                title='Weather Map'
                pathname='weathermap'
                open={this.openPage}
                instructions='click header to look up a city on GoogleMap and see the current weather'
                image={images['googleMap.png']}
            />
            <HomePageBuilder
                title='Picture Book'
                pathname='picturebook'
                open={this.openPage}
                instructions='click header to upload an image and create descriptions'
                image={images['reptilian.jpg']}
            />
            <HomePageBuilder
                title='Pokedex'
                pathname='pokemonpage'
                open={this.openPage}
                instructions='click header to search for a pokemon and select it to get pokedex!'
                image={images['pokemon.png']}
            />
            <HomePageBuilder
                title='Particle Systems'
                pathname='particlesystem1'
                open={this.openPage}
                instructions='play with different particle systems by flipping through the pages'
                image={images['particleSystem.png']}
            />
        </Fragment>)
    }
}


export default Home
