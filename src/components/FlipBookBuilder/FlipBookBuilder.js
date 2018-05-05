import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Wrapper} from '../styles/styles'


const flipBookBuilder=(props)=>
{
    return(<Wrapper margin='20px 0'>
        <Flip>
            <div>
                <h3>{props.question}</h3>
                <p>{props.answer}</p>
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.question}</p>
            </div>
        </Flip>
    </Wrapper>)
}


const Flip = styled.div`
    width: 240px;
    height: 300px;
    text-align: center;

    div:nth-child(even)  {
        background: #3498db;
        border-radius: 7px;
        border: 1px solid black;
        position: absolute;
        transform: perspective(600px) rotateY(0deg);
        width: 240px;
        height: 300px;
        backface-visibility: hidden;
        transition: transform 0.5s linear 0s;

        p{
            margin-top: 25%;
            padding: 0 20px;
        }
    }

    div:nth-child(odd) {
        background: #2ecc71;
        border-radius: 7px;
        border: 1px solid black;
        position: absolute;
        transform: perspective(600px) rotateY(180deg);
        width: 240px;
        height: 300px;
        backface-visibility: hidden;
        transition: transform 0.5s linear 0s;

        p{
            margin-top: 15%;
            padding: 0 20px;
        }
    }

    :hover div:nth-child(even)  {
        transform: perspective(600px) rotateY(-180deg);
    }
    :hover div:nth-child(odd) {
        transform: perspective(600px) rotateY(0deg);
    }
`



export default flipBookBuilder;
