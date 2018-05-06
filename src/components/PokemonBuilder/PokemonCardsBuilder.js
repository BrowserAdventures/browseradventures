import React from 'react';
import styled, {keyframes} from 'styled-components';


const pokemonCardsBuilder=(props)=>
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

const Wrapper = styled.div`

`

const Flip = styled.div`
    width: 240px;
    height: 300px;
    text-align: center;

    div:nth-child(even)  {

        p{
            margin-top: 25%;
            padding: 0 20px;
        }
    }

    div:nth-child(odd) {

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



export default pokemonCardsBuilder;
