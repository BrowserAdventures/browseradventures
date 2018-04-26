import React from 'react';
import styled from 'styled-components';

const bookPageBuilder=(props)=>
{
    const descriptions = props.descriptions.filter(self=> (
        self.id !== 'title' && self.id !== 'url'
    )).map(self=> (
    <Container key={self.id}>
        <p>{self.description}</p>
        <div onClick={()=> props.delete(self.id)}>X</div>
    </Container>))

    return <Wrapper>{descriptions}</Wrapper>;
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0,0,0, 0.3);
    border-radius: 5px;
    border: 1px solid rgba(0,0,0, 0.4);
    width: 300px;
    text-align: center;
    padding:  0 10px;
    margin-bottom: 20px;

    :hover {
        cursor: pointer;
        background: rgba(0,0,0, 0.5);
    }

    img {
        width: 100%;
        height: 250px;
        border: 0px solid rgba(0,0,0, 0.2);
    }
    img:hover {
        cursor: pointer;
        border: 0px solid rgba(0,0,0, 0.2);
    }

    div {
        height: 20px;
        color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    div:hover {
        color: red;
        cursor: pointer;
        background: rgba(0,0,0, 0.3);
    }

    h3 {

    }
`


export default bookPageBuilder;
