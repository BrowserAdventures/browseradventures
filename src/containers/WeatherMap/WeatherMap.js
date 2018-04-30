import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/UI/Header/Header'
import Modal from '../../components/UI/Modal/Modal'
import {Wrapper} from '../../components/styles/Wrapper/Wrapper'

import GoogleMapBuilder from '../../components/WeatherMapBuilder/GoogleMapBuilder/GoogleMapBuilder'
import WeatherForm from '../../components/WeatherMapBuilder/WeatherBuilder/WeatherForm'
import WeatherDisplay from '../../components/WeatherMapBuilder/WeatherBuilder/WeatherDisplay'


class WeatherMap extends Component
{
    state = {
        temperature: '',
        city: 'Miami',
        country: 'US',
        humidity: '',
        description: '',
        showWeather: true,
        coord: {
            lat: 25.77, lon: -80.19
        },
        error: undefined,
    }

    componentWillMount()
    {
        this.setState({
            modal: false,
            marker: false,
        })
    }

    componentDidMount()
    {
        this.delayedShowMarker()
    }

    getWeather=(async)(E)=> {
        E.preventDefault()
        const city = E.target.elements.city.value
        const country = E.target.elements.country.value

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
        const data = await api_call.json()
        log(data)

        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            coord: data.coord,
            showWeather: true,
            modal: false,
        })
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
        const map = !this.state.modal && <GoogleMapBuilder
            isMarkerShown={this.state.marker}
            onMarkerClick={this.handleMarkerClick}
            coord={this.state.coord}
        />

        const weather = this.state.showWeather && !this.state.modal && <Wrapper>
            <WeatherDisplay data={this.state} />
        </Wrapper>

        return(<div>
            <Header title={this.state.city} imgStore='arrow'
                backButtonClicked={()=> this.props.history.push('/')}
                click={()=> this.setState({modal:true})}
                nextButton='nextButton'
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>
                <WeatherForm submit={this.getWeather} />
            </Modal>
            {[map, weather]}
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




export default connect(mapStateToProps, mapDispatchToProps)(WeatherMap);
