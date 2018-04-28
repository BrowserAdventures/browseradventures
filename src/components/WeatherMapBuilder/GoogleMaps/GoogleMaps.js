import React from 'react'
import styled from 'styled-components'
import {compose, withProps} from "recompose"
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"


const googleMaps=(props)=>
{
    const marker = props.isMarkerShown && <Marker
        position={{lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
    />

    return(<GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: -34.397, lng: 150.644 }}
    >
        {marker}
    </GoogleMap>)
}

const googleMapProps = {
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyARbQ01SC1s2r2tsnwineuU9-XbKXfSQ0s&callback=initMap',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
}


export default compose(withProps(googleMapProps),
    withScriptjs,
    withGoogleMap
)(googleMaps)
