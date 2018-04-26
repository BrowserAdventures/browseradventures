import React from 'react';
import styled from 'styled-components';

const pictureBookBuilder=(props)=>
{
    const books = props.books.map(self=> (
    <Container key={self.id}>
        <span onClick={()=> props.open(self)}>
        <h3>{self.title}</h3>
        <img
            src={self.url}
            alt=''
        />
        </span>
        <div onClick={()=> props.delete(self.id)}>Delete</div>
    </Container>))

    return <Wrapper>{books}</Wrapper>;
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`
const Span = styled.span`

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0,0,0, 0.3);
    border-radius: 5px;
    border: 1px solid rgba(0,0,0, 0.4);
    width: 300px;
    height: 350px;
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
        height: 40px;
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


export default pictureBookBuilder;
