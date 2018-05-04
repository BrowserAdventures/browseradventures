import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import ParticleSystem from './ParticleSystem'

import Home from './containers/Home/Home'
import Games from './containers/Games/Games'
import BirdPoo from './containers/Games/BirdPoo/BirdPoo'
import PictureBook from './containers/PictureBook/PictureBook'
import BookPage from './containers/PictureBook/BookPage/BookPage'
import FlashCards from './containers/FlashCards/FlashCards'
import BoxGenerator from './containers/BoxGenerator/BoxGenerator'
import SpriteAnimations from './containers/BoxGenerator/SpriteAnimations/SpriteAnimations'
import ReactCanvas from './containers/BoxGenerator/SpriteAnimations/ReactCanvas/ReactCanvas'
import WeatherMap from './containers/WeatherMap/WeatherMap'


class App extends Component
{
    render()
    {
        return(<Layout>
            <Switch>
                <Route path="/picturebook" component={PictureBook} />
                <Route path="/bookpage" component={BookPage} />
                <Route path="/flashcards" component={FlashCards} />
                <Route path="/BoxGenerator" component={BoxGenerator} />
                <Route path="/spriteanimations" component={SpriteAnimations} />
                <Route path="/reactcanvas" component={ReactCanvas} />
                <Route path="/weathermap" component={WeatherMap} />
                <Route path="/games" component={Games} />
                <Route path="/birdpoo" component={BirdPoo} />
                <Route path='/bird-poo' component={() => window.location = 'http://browseradventures.com/bird%20poo/'}/>
                <Route path='/archer' component={() => window.location = 'http://browseradventures.com/archer/'}/>
                <Route path='/lasers' component={() => window.location = 'http://browseradventures.com/ExplodingLasers/'}/>
                <Route path='/wizard' component={() => window.location = 'http://browseradventures.com/Wizard_platformer/'}/>
                <Route path='/shooter' component={() => window.location = 'http://browseradventures.com/shooter/'}/>
                <Route path="/" component={Home} />
              </Switch>
        </Layout>)
    }
}




export default withRouter(App);
