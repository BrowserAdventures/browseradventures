import React, { Component } from 'react'

import Header from '../../components/UI/Header/Header'
import HomePageBuilder from '../../components/HomePageBuilder/HomePageBuilder'
import GoogleMapImage from '../../assets/imgs/HomePageImages/googleMapImage.png'


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
            <HomePageBuilder
                title='Weather Map'
                pathname='weathermap'
                open={this.openPage}
                instructions='click header to look up a city on GoogleMap and see the current weather'
                image={GoogleMapImage}
            />
            <HomePageBuilder
                title='Picture Book'
                pathname='picturebook'
                open={this.openPage}
                instructions='click header to upload an image and create descriptions'
                image='https://4.bp.blogspot.com/-q87bFHcbU5k/WWl9kn3K1YI/AAAAAAAAAI8/XbxDKV7kbVQmRzRLP62D1bQWZcH6Lyc4wCLcBGAs/s1600/Reptiliano%2B1.jpg'
            />
            <HomePageBuilder
                title='FlashCards'
                pathname='flashcards'
                open={this.openPage}
                instructions='play FlashCards to improve your JavaScript skills'
                image='http://www.stickpng.com/assets/images/580b585b2edbce24c47b27a6.png'
            />
            <h3 onClick={()=> this.openPage('boxgenerator')}>Box Generator</h3>
        </div>)
    }
}

export default Home;
