import React from 'react';
import styled from 'styled-components';

import Toolbar from './Toolbar/Toolbar'


const layout=(props)=> (<Wrapper background={props.background}>
    <Toolbar />
    <Content {...props} />
</Wrapper>)


const Wrapper = styled.div`
    margin-top: -4px;
    background: rgba(0,0,0, 0.5);
    min-height: 100vh;
`
const Content = styled.main`
    background: ${props=> props.background || 'rgba(255,255,255, 0.7)'};
    margin-left: 50px;
    margin-right: 50px;
    min-height: 100vh;

    @media (max-width: 500px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`

export default layout;
