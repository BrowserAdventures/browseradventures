import React from 'react';
import styled from 'styled-components';
import './FlashCardBuilder.css';


const flashCardBuilder=(props)=>
{
    return(<Wrapper>
        <div className='flip'>
            <div className='back'>
                <h3>{props.question}</h3>
                <p>{props.answer}</p>
            </div>
            <div className='front'>
                <h3>{props.title}</h3>
                <p>{props.question}</p>
            </div>
        </div>
    </Wrapper>)
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px 0;
    width: 100%;
    text-align: center;

    .div .front {
        background: green;
    }
`

const Front = styled.div`
background: green;
position: absolute;
transform: perspective(600px) rotateY(0deg);
width: 240px;
height: 300px;
backface-visibility: hidden;
transition: transform 0.5s linear 0s;

:hover  {
    transform: perspective(600px) rotateY(-180deg);
}
`
const Back = styled.div`
background: blue;
position: absolute;
transform: perspective(600px) rotateY(180deg);
width: 240px;
height: 300px;
backface-visibility: hidden;
transition: transform 0.5s linear 0s;

:hover  {
    transform: perspective(600px) rotateY(0deg);
}
`
const Flip = styled.div`
    width: 240px;
    height: 300px;
    float: left;

    ${Front}  {

    }

    ${Back}  {

    }

    ${Front}

    ${Back}
`




export default flashCardBuilder;
