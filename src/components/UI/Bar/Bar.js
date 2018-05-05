import React from 'react';
import styled from 'styled-components';

const bar=(props)=>
{
    // const bars = props.bars.filter(self=> (
    //     self.id !== 'title' && self.id !== 'url'
    // )).map(self=> (
    // <Container key={self.id}>
    //     <p>{self.description}</p>
    //     <div onClick={()=> props.delete(self.id)}>
    //         <img
    //             src='http://downloadicons.net/sites/default/files/delete-button-icon-63568.png'
    //             alt=''
    //         />
    //     </div>
    // </Container>))

    return(<Container>
        <p>{props.content}</p>
        <div>
            <img
                src='https://img00.deviantart.net/6c29/i/2012/046/3/8/button_template_1_by_jemet49-d4pveq5.png'
                alt=''
                onClick={props.click}
            />
        </div>
    </Container>)
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    background: rgba(255,255,255, 0.3);
    border-bottom: 1px solid rgba(0,0,0, 0.4);
    border-top: 2px solid rgba(0,0,0, 0.2);
    box-shadow: 1px 1px 1px 0px black;
    max-width: 400px;

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
        background: rgba(0,0,0, 0.3);
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
`


export default bar;
