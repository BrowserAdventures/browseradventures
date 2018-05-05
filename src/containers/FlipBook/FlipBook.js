import React, { Component } from 'react'

import Header from '../../components/UI/Header/Header'


class FlipBook extends Component
{
    openPage=(pathname)=>
    {
        this.props.history.push(`/${pathname}`)
    }

    render()
    {
        return(<div>
            <Header
                title='FlipBook'
                imgStore='greenFire'
            />


        </div>)
    }
}


export default FlipBook;
