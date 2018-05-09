import React, { Component, Fragment } from 'react'

import {images} from '../../assets/imgs/HomePageImages'

import ParticleSystemHeader from './ParticleSystemHeader'
import Header from '../../components/UI/Header/Header'
import HomePageBuilder from '../../components/HomePageBuilder/HomePageBuilder'


class Home extends Component
{
    openPage=(pathname)=>
    {
        this.props.history.push(`/${pathname}`)
    }

    clicked=()=>
    {
        var someStr = 'He said Hello, my name is Foo';
        console.log(someStr.replace(/['']+/g, ''));
    }

    render()
    {
        return(<Fragment>
            <ParticleSystemHeader />
            <Header
                title='Home'
                triangle
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
                title='Pokemon'
                pathname='pokemonpage'
                open={this.openPage}
                instructions='A page full of pokemon!'
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


export default Home;
