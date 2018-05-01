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
        background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
        border: 1px solid rgba(0,0,0, 1);
    }

    img {
        height: 350px;
        border: 1px solid #2ecc71;
        background: rgba(0,0,0,0.3);
    }
    img:hover {
        cursor: pointer;
        border: 5px solid rgba(0,0,0, 0.6);
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
