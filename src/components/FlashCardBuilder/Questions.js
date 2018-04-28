import React from 'react';
import styled from 'styled-components';
import Bar from '../UI/Bar/Bar';

const questions=(props)=>
{
    const bars = props.answers.map(self=> (<Bar
        key={self.title}
        click={()=> props.click(self)}
        content={self.answer}
    />))

    return(<Wrapper>{bars}</Wrapper>)
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`



export default questions;
