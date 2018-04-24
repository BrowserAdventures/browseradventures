import React from 'react';
import styled from 'styled-components';

const PictureBookBuilder=(props)=>
{
    return(<Wrapper>
        <img
            src={props.src || images[props.imgStore]}
            onClick={props.backButtonClicked}
            rotate={props.back}
            alt=''
        />
        <div onClick={props.click}><h3>{props.title}</h3></div>
        <img
            src={props.src || images[props.imgStore]}
            onClick={props.nextButtonClicked}
            rotate={props.next}
            alt=''
        />
    </Wrapper>)
}


const Wrapper = styled.div`
    background: rgba(0,0,0, 0.7);
    width: 100%;
    height: 60px;
    display: grid;
    grid-template-columns: 60px 1fr 60px;

    img {
        width: 60px;
        height: 100%;
        ${props=> props.rotate === props.back && 'transform: rotate(95deg)'};
        ${props=> props.rotate === props.next && 'transform: rotate(-180deg)'};
    }
    img:hover {
        cursor: pointer;
        background: rgba(0,0,0, 0.1);

    }

    div {
        height: 100%;
        text-align: center;
        color: white;
    }
    div:hover {
        color: rgb(65, 202, 244);
        cursor: pointer;
        background: rgba(0,0,0, 0.1);
    }
`


export default PictureBookBuilder;
