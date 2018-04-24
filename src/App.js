import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './containers/Home/Home'


class App extends Component
{
    render()
    {
        return(<Layout>
            <Switch>
                <Route path="/" component={Home} />
              </Switch>
        </Layout>)
    }
}

export default App;
