import React from 'react';
import styled from 'styled-components';



const weatherDisplay=(props)=>
{
    const {temperature, city, country, humidity, description} = props.data

    return(<Wrapper>
        <p>Location: {city}, {country}</p>
        <p>Temperature: {temperature}</p>
        <p>Humidity: {humidity}</p>
        <p>Description: {description}</p>
    </Wrapper>)
}



const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
`



export default weatherDisplay;
