import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Wrapper} from '../styles/styles'


const pokemonCardsBuilder=(props)=>
{

    const frontImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.currentPokemon.id}.png`
    const backImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.currentPokemon.id}.png`
    const frontImg2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.currentPokemon.id}.png`
    const backImg2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${props.currentPokemon.id}.png`

    return(<Wrapper>
        <Container>
            <Cube>
            <div><img src={frontImg} /></div>
            <div><img src={frontImg2} /></div>
            <div><img src={backImg} /></div>
            <div><img src={backImg2} /></div>
            </Cube>
        </Container>
    </Wrapper>)
}


const rotateCube = keyframes`
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(360deg);
    }
`

const Container = styled.div`
    width: 100px;
    height: 100px;
    perspective: 800px;
`
const Cube = styled.div`
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    animation: ${rotateCube} 10s linear infinite;

    div{
        position: absolute;
        width: 100px;
        height: 100px;
        top: 20%;
    }

    div:nth-child(1){
        transform: translateZ(50px);
        backface-visibility: hidden;
        background: rgba(255,255,255, 0.3);
    }
    div:nth-child(2){
        transform: rotateY(180deg) translateZ(50px);
        backface-visibility: hidden;
        background: rgba(255,255,255, 0.3);
    }
    div:nth-child(3){
        transform: rotateY(-90deg) translateX(-50px);
        transform-origin: left;
        backface-visibility: hidden;
        background: rgba(255,255,255, 0.3);
    }
    div:nth-child(4){
        transform: rotateY(90deg) translateX(50px);
        transform-origin: right;
        backface-visibility: hidden;
        background: rgba(255,255,255, 0.3);
    }
`


export default pokemonCardsBuilder;
