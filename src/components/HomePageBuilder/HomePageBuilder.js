import React from 'react';
import styled from 'styled-components';


const homePageBuilder=(props)=> (<Wrapper>
    <Container onClick={()=> props.open(props.pathname)}>
        <h3>{props.title}</h3>
        <img
            src={props.image}
            alt=''
        />
        <p>{props.instructions}</p>
    </Container>
</Wrapper>)


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
    background: rgba(0,0,0,0.7);
    border-radius: 5px;
    border: 1px solid #2ecc71;
    width: 350px;
    height: 500px;
    text-align: center;
    padding:  0 20px;
    margin-bottom: 20px;

    :hover {
        cursor: pointer;
        background: rgba(0,0,0,0.8);
    }

    img {
        height: 350px;
        border: 1px solid #2ecc71;
        background: rgba(0,0,0,0.3);
    }
    img:hover {
        cursor: pointer;
    }

    p {
        height: 40px;
        color: #2ecc71;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(0,0,0, 0.2);

    }
    p:hover {
        color: red;
        cursor: pointer;
        background: rgba(0,0,0, 0.5);
    }

    h3 {
        color: #2ecc71;
    }
`


export default homePageBuilder;
