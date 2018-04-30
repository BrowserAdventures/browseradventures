import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'

import Layout from './components/Layout/Layout'

import Home from './containers/Home/Home'
import PictureBook from './containers/PictureBook/PictureBook'
import BookPage from './containers/PictureBook/BookPage/BookPage'
import FlashCards from './containers/FlashCards/FlashCards'
import BoxGenerator from './containers/BoxGenerator/BoxGenerator'
import WeatherMap from './containers/WeatherMap/WeatherMap'
import Weather from './containers/WeatherMap/Weather/Weather'


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
                <Route path="/weathermap" component={WeatherMap} />
                <Route path="/weather" component={Weather} />
                <Route path="/" component={Home} />
              </Switch>
        </Layout>)
    }
}

export default withRouter(App);
