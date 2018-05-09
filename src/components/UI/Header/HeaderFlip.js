import React from 'react';
import styled from 'styled-components'

import {images} from '../../../assets/imgs/HeaderImages'


const header3=(props)=>
{
    const buttonType = props.src
    ||  props.backButton && images['arrow.png']
    ||  props.nextButton && images['arrow.png']
    ||  props.triangle && images['dropdown_arrow.png']
    ||  images['greenFire.png']

    const showNextButton = props.nextButton ? <NextImage
        src={buttonType}
        onClick={props.nextButton}
        alt=''
    /> :
    <NextImage
        src={''}
        onClick={props.nextButton}
        alt=''
    />
    return(<Wrapper noMargin={props.noMargin}>
        <BackImage
            src={buttonType}
            onClick={props.backButton}
            alt=''
        />
        <Container>
            <div onClick={props.click}><h3>{props.instructions}</h3></div>
            <div><h3>{props.title}</h3></div>
        </Container>
        {showNextButton}
    </Wrapper>)
}


const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: ${props=> props.noMargin || '20px'};
    display: flex;
    justify-content: space-between;

    ${Container} {
        background: rgba(0,0,0, 0.7);
    }


`
const BackImage = styled.img`
    width: 60px;
    height: 100%;

    :hover {
        cursor: pointer;
        background: rgba(0,0,0, 0.2);
    }
`

const NextImage = styled.img`
    width: 60px;
    height: 100%;
    transform: rotate(-180deg);

    :hover {
        cursor: pointer;
        background: rgba(0,0,0, 0.2);
    }
`

const Container = styled.div`
    width: 100%;
    height: 60px;
    position: relative;

    :hover{
        background: rgba(0,0,0, 0.2);
    }

    div:nth-child(even) {
        height: 60px;
        width: 100%;
        text-align: center;
        color: white;
        position: absolute;
        transform: perspective(600px) rotateX(0deg);
        backface-visibility: hidden;
        transition: transform 0.5s linear 0s;
    }
    div:nth-child(odd) {
        height: 60px;
        width: 100%
        text-align: center;
        color: white;
        position: absolute;
        transform: perspective(600px) rotateX(180deg);
        backface-visibility: hidden;
        transition: transform 0.5s linear 0s;
    }

    :hover div:nth-child(even)  {
        cursor: pointer;
        transform: perspective(600px) rotateX(-180deg);
    }
    :hover div:nth-child(odd) {
        cursor: pointer;
        transform: perspective(600px) rotateX(0deg);
    }
`


export default header3;
