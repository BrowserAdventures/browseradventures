import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'

import Layout from './components/Layout/Layout'

import Home from './containers/Home/Home'
import PictureBook from './containers/PictureBook/PictureBook'


class App extends Component
{
    render()
    {
        return(<Layout>
            <Switch>
            <Route path="/picturebook" component={PictureBook} />
                <Route path="/" component={Home} />
              </Switch>
        </Layout>)
    }
}

export default withRouter(App);
