import React from 'react';
import styled from 'styled-components'

import {images} from '../../../assets/imgs/HeaderImages'

const header=(props)=>
{
    const buttonType = props.src
    ||  props.backButton && images['arrow.png']
    ||  props.nextButton && images['arrow.png']
    ||  props.triangle && images['dropdown_arrow.png']
    ||  props.greenFire && images['greenFire.png']


    const showNextButton = props.nextButton ?
        <Image
            src={buttonType}
            onClick={props.nextButton}
            alt=''
            nextButton={props.nextButton}
        /> :
        <Image
            src={''}
            alt=''
        />

    return(<Wrapper noMargin={props.noMargin}>
        <Image
            src={buttonType}
            onClick={props.backButton}
            alt=''
        />
        <div onClick={props.click}><h3>{props.title}</h3></div>
        {showNextButton}
    </Wrapper>)
}


const Wrapper = styled.div`
    background: rgba(0,0,0, 0.7);
    width: 100%;
    height: 60px;
    margin-bottom: ${props=> props.noMargin || '20px'};
    display: grid;
    grid-template-columns: 60px 1fr 60px;

    div {
        height: 100%;
        text-align: center;
        color: white;
    }
    div:hover {
        color: #44bd32;
        cursor: pointer;
        background: rgba(0,0,0, 0.3);
    }
`
const Image = styled.img`
    width: 60px;
    height: 100%;
    ${props=> props.nextButton && 'transform: rotate(-180deg)'};

    :hover {
        cursor: pointer;
        background: rgba(0,0,0, 0.3);
    }
`


export default header;
