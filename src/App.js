import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './containers/Home/Home'

import Games from './containers/Games/Games'
import BirdPoo from './containers/Games/BirdPoo/BirdPoo'

import PictureBook from './containers/PictureBook/PictureBook'
import BookPage from './containers/PictureBook/BookPage/BookPage'

import WeatherMap from './containers/WeatherMap/WeatherMap'

import PokemonPage from './containers/Pokemon/PokemonPage'
import PokemonCards from './containers/Pokemon/PokemonCards'

import ParticleSystem1 from './containers/ParticleSystems/ParticleSystem1'
import ParticleSystem2 from './containers/ParticleSystems/ParticleSystem2'


class App extends Component
{
    render()
    {
        return(<Layout>
            <Switch>
                <Route path="/picturebook" component={PictureBook} />
                <Route path="/bookpage" component={BookPage} />

                <Route path="/weathermap" component={WeatherMap} />

                <Route path="/games" component={Games} />
                <Route path="/birdpoo" component={BirdPoo} />

                <Route path="/pokemonpage" component={PokemonPage} />
                <Route path="/pokemoncards" component={PokemonCards} />

                <Route path="/particlesystem1" component={ParticleSystem1} />
                <Route path="/particlesystem2" component={ParticleSystem2} />

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
