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
                imgStore='greenFire'
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
            <HomePageBuilder
                title='Box Generator'
                pathname='boxgenerator'
                open={this.openPage}
                instructions='generates random boxes'
                image='https://static.wixstatic.com/media/36694e_ba9478af875443839e786ff1eb4aa63f~mv2.png/v1/fill/w_784,h_521,al_c,usm_0.66_1.00_0.01/36694e_ba9478af875443839e786ff1eb4aa63f~mv2.png'
            />
            <HomePageBuilder
                title='bird poo'
                pathname='bird-poo'
                open={this.openPage}
                instructions='generates random boxes'
                image='https://static.wixstatic.com/media/36694e_ba9478af875443839e786ff1eb4aa63f~mv2.png/v1/fill/w_784,h_521,al_c,usm_0.66_1.00_0.01/36694e_ba9478af875443839e786ff1eb4aa63f~mv2.png'
            />
        </div>)
    }
}


export default Home;
