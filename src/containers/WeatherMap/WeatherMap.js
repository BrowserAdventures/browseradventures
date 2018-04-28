import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/UI/Header/Header'
import Modal from '../../components/UI/Modal/Modal'
import GoogleMaps from '../../components/WeatherMapBuilder/GoogleMaps/GoogleMaps'
import MapsSearchBox from '../../components/WeatherMapBuilder/GoogleMaps/MapSearchBox'


class WeatherMap extends Component
{
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
        return(<div>
            <Header title='Weather Map' imgStore='arrow'
                backButtonClicked={()=> this.props.history.push('/')}
                click={()=> this.setState({modal:true})}
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>
            </Modal>
            <GoogleMaps
                isMarkerShown={this.state.marker}
                onMarkerClick={this.handleMarkerClick}
            />
        
        </div>)
    }
}

const GOOGLE_MAP_API_KEY = 'AIzaSyARbQ01SC1s2r2tsnwineuU9-XbKXfSQ0s'


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
