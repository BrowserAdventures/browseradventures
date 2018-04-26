import React from 'react';
import styled from 'styled-components';

const bookPageBuilder=(props)=>
{
    const descriptions = props.descriptions.filter(self=> (
        self.id !== 'title' && self.id !== 'url'
    )).map(self=> (
    <Container key={self.id}>
        <p>{self.description}</p>
        <div onClick={()=> props.delete(self.id)}>
            <img
                src='http://downloadicons.net/sites/default/files/delete-button-icon-63568.png'
                alt=''
            />
        </div>
    </Container>))

    return (<Wrapper>
        <Header>
            <img
                src={props.src}
                alt=''
            />
        </Header>
        {descriptions}
    </Wrapper>)
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`
const Header = styled.div`
    width: 100%
    background: black;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: -20px;
    padding: 20px 0px;

    img {
        max-height: 400px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: rgba(255,255,255, 0.3);
    border-bottom: 1px solid rgba(0,0,0, 0.4);
    border-top: 2px solid rgba(0,0,0, 0.2);
    box-shadow: 1px 1px 1px 0px black;
    width: 300px;

    text-align: center;
    padding:  0 10px;
    margin-bottom: 20px;

    :hover {
        cursor: pointer;
        background: rgba(25, 255, 25, 0.4);
        border-bottom: 1px solid rgba(0,0,0, 0.4);
        border-top: 2px solid rgba(0,0,0, 0.1);
        box-shadow: 1px 1px 1px 0px transparent;
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
        height: 100%;
        color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    div img {
        height: 50px;
        width: 50px;
        border: 1px solid transparent;
        border-radius: 90px;
    }
    div img:hover {
        border: 1px solid red;
        border-radius: 90px;
    }
    div:hover {
        color: red;
        cursor: pointer;
        background: rgba(0,0,0, 0.3);
    }
`

// const Wrapper = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
//     width: 100%;
// `
//
// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     background: rgba(255,255,255, 0.3);
//     border-radius: 5px;
//     border: 1px solid rgba(0,0,0, 0.4);
//     width: 300px;
//     text-align: center;
//     padding:  0 10px;
//     margin-bottom: 20px;
//
//     :hover {
//         cursor: pointer;
//         background: rgba(0,0,0, 0.5);
//     }
//
//     img {
//         width: 100%;
//         height: 250px;
//         border: 0px solid rgba(0,0,0, 0.2);
//     }
//     img:hover {
//         cursor: pointer;
//         border: 0px solid rgba(0,0,0, 0.2);
//     }
//
//     div {
//         height: 20px;
//         color: transparent;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//     }
//     div:hover {
//         color: red;
//         cursor: pointer;
//         background: rgba(0,0,0, 0.3);
//     }
// `


export default bookPageBuilder;
