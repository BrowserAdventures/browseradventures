import React from 'react';
import styled from 'styled-components';



const weatherDisplay=(props)=>
{
    const {temperature, city, country, humidity, description} = props.data

    return(<Wrapper>
        <div>Location:</div><div>{city}, {country}</div>
        <div>Temperature:</div><div>{temperature}</div>
        <div>Humidity:</div><div>{humidity}</div>
        <div>Description:</div><div>{description}</div>
    </Wrapper>)
}



const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 10px 0px;
    justify-content: center;
    width: 300px;
    background: rgba(255,255,255, 0.0);
    padding-top: 10px;

    div:nth-child(odd) {
        width: 100px;
        background: rgba(255,255,255, 0.1);
        box-shadow: 1px 1px 1px 0px rgba(0,0,0, 0.5);
    }
    div:nth-child(even) {
        text-align: center;
        width: 200px;
        background: rgba(255,255,255, 0.4);
        box-shadow: 1px 1px 1px 0px rgba(0,0,0, 0.5);
    }
`



export default weatherDisplay;
