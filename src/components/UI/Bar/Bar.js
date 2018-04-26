import React from 'react';
import styled from 'styled-components';

const bar=(props)=>
{
    const images = {
        arrow: 'http://miniemeninstituut.org/5bi/med/image/pijllinks.png',
        arrow2: 'http://leadershipcentrecounty.org/wp-content/uploads/2014/10/dropdown_arrow.png',
    }

    return(<Wrapper>
        <Container>
            <p>{props.title}</p>
            <img
                src={props.src || images.arrow}
                onClick={props.delete}
                alt=''
            />
        </Container>
    </Wrapper>)
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`

const Container = styled.div`
    background: rgba(0,0,0, 0.7);
    width: 100%;
    height: 60px;
    display: grid;
    grid-template-columns: 60px 1fr 60px;

    img {
        width: 60px;
        height: 100%;
    }
    img:hover {
        cursor: pointer;
        background: rgba(0,0,0, 0.1);
    }

    div {
        height: 100%;
        text-align: center;
        color: white;
    }
    div:hover {
        color: rgb(65, 202, 244);
        cursor: pointer;
        background: rgba(0,0,0, 0.1);
    }
`


export default bar;
