import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../../components/UI/Header/Header'
import {Wrapper} from '../../../components/styles/Wrapper/Wrapper'

import GoogleMapBuilder from '../../../components/WeatherMapBuilder/GoogleMapBuilder/GoogleMapBuilder'
import WeatherForm from '../../../components/WeatherMapBuilder/WeatherBuilder/WeatherForm'
import WeatherDisplay from '../../../components/WeatherMapBuilder/WeatherBuilder/WeatherDisplay'



class Weather extends Component
{
    componentWillMount()
    {
        this.setState({
            marker: false,
        })
    }

    componentDidMount()
    {
        this.delayedShowMarker()
    }


    delayedShowMarker=()=> {
        setTimeout(() => {
            this.setState({marker: true })
        }, 3000)
    }

    handleMarkerClick=()=> {
        this.setState({marker: false })
        this.delayedShowMarker()
    }

    render()
    {
        const {coord} = this.props.location.state
        return(<div>
            <Header title='Weather' imgStore='arrow'
                backButtonClicked={()=> this.props.history.push('/weathermap')}
                nextButton='nextButton'
            />
            <GoogleMapBuilder
                isMarkerShown={this.state.marker}
                onMarkerClick={this.handleMarkerClick}
                coord={coord}
            />
            <Wrapper>
                <WeatherDisplay data={this.props.location.state} />
            </Wrapper>
            <p>lng: {coord.lon}</p>
            <p>lat: {coord.lat}</p>
            {log(coord)}
        </div>)
    }
}

const API_KEY = 'ec552f529b65a49792e789951518a724'



const mapStateToProps=(state)=>
{
    return{

    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{

    }
}


const log=(self)=> console.log(self)




export default connect(mapStateToProps, mapDispatchToProps)(Weather);
