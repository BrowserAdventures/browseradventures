import React from 'react';
import styled from 'styled-components';



const weatherForm=(props)=>
{
    return(<Form onSubmit={props.submit}>
        <h3>look up weather</h3>
        <label>City Name</label>
        <input
            type='input'
            name='city'
            placeholder='enter a city name...'
        />
        <label>Country Name</label>
        <input
            type='input'
            name='country'
            placeholder='enter a country name...'
        />
        <input type='submit' value='Submit' />
    </Form>)
}



const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin: 20px;
    width: 200px;
    text-align: center;

    input {
        margin-bottom: 20px;
    }
`



export default weatherForm;
