import React, { Component, Fragment } from 'react'

import Header from '../../components/UI/Header/Header'
import HomePageBuilder from '../../components/HomePageBuilder/HomePageBuilder'
import googleMapImage from '../../assets/imgs/HomePageImages/googleMapImage.png'
import flashcardsImage from '../../assets/imgs/HomePageImages/flashcards.png'
import reptilianImage from '../../assets/imgs/HomePageImages/reptilian.jpg'
import FlipBook from '../../assets/imgs/HomePageImages/reptilian.jpg'


class Home extends Component
{
    openPage=(pathname)=>
    {
        this.props.history.push(`/${pathname}`)
    }

    render()
    {
        return(<Fragment>
            <Header
                title='Home'
                imgStore='greenFire'
            />
            <HomePageBuilder
                title='Weather Map'
                pathname='weathermap'
                open={this.openPage}
                instructions='click header to look up a city on GoogleMap and see the current weather'
                image={googleMapImage}
            />
            <HomePageBuilder
                title='Picture Book'
                pathname='picturebook'
                open={this.openPage}
                instructions='click header to upload an image and create descriptions'
                image={reptilianImage}
            />
            <HomePageBuilder
                title='Pokemon'
                pathname='pokemonpage'
                open={this.openPage}
                instructions='A page full of pokemon!'
                image='http://static.pokemonpets.com/images/monsters-images-800-800/94-Gengar.png'
            />
            <HomePageBuilder
                title='Animations'
                pathname='boxgenerator'
                open={this.openPage}
                instructions='a collection of random animations'
                image='https://vignette.wikia.nocookie.net/denaruto3/images/4/42/Juubi.png/revision/latest?cb=20111121203959&path-prefix=de'
            />
        </Fragment>)
    }
}


export default Home;
