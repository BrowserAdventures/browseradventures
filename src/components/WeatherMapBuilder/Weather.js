import React, {Component} from 'react';
import styled from 'styled-components';




class Weather extends Component
{
    getWeather=(async)()=> {
        const api_call = await fetch(`
            api.openweathermap.org/data/2.5/weather?q=
            {Peoria},{us}&appid=${API_KEY}&units=metric`
        )
        const data = await api_call.json()
        console.log(data)
    }

    render()
    {
        return(<Wrapper>

        </Wrapper>)
    }
}

const API_KEY = 'ec552f529b65a49792e789951518a724'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`



export default Weather;

//
