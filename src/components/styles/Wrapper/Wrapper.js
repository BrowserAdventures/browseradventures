import React from 'react';
import styled from 'styled-components';



export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: ${props=> props.margin}%;
`

export const FlexBasis = styled.div`
    display: flex;
    flex-basis: ${props=> props.basis}%;
    padding: ${props=> props.padding};
`

export const MapContainer = styled.div`
    flex-grow: 1;
    height: 100vh;
`

export const Titleh3 = styled.div`
    display: flex;
    text-align: center;
    max-height: ${props=> props.height};
    padding: 5px;

    h3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(255,255,255, 0.4);
        box-shadow: 1px 1px 1px 0px black;
    }

`
