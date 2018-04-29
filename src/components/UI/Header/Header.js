import React from 'react';
import styled from 'styled-components';

const header=(props)=>
{
    const images = {
        plants: 'http://www.stickpng.com/assets/images/580b585b2edbce24c47b2627.png',
        blueOrb: 'https://vignette.wikia.nocookie.net/maski/images/b/bf/Wind.png/revision/latest?cb=20160105225724&path-prefix=ru',
        planet: 'https://pre00.deviantart.net/6d4f/th/pre/i/2017/121/9/1/red_and_blue_planet_stock_by_dadrian-db7qnbo.png',
        planetSpin: 'https://78.media.tumblr.com/b751d6a96b03d95cbc47dfecd88285e2/tumblr_miftaatAVW1qa19lvo1_250.gif',
        darkPlanet: 'http://i2.photobucket.com/albums/y17/slyke57/Anime/hj/Cybertron.png',
        arrow: 'http://miniemeninstituut.org/5bi/med/image/pijllinks.png',
        arrow2: 'http://leadershipcentrecounty.org/wp-content/uploads/2014/10/dropdown_arrow.png',
    }

    return(<Wrapper>
        <Image
            src={props.src || images[props.imgStore]}
            onClick={props.backButtonClicked}
            rotate={props.backButton}
            alt=''
        />
        <div onClick={props.click}><h3>{props.title}</h3></div>
        <Image
            src={props.src || images[props.imgStore]}
            onClick={props.nextButtonClicked}
            rotate={props.nextButton}
            alt=''
        />
    </Wrapper>)
}


const Wrapper = styled.div`
    background: rgba(0,0,0, 0.7);
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 60px 1fr 60px;

    div {
        height: 100%;
        text-align: center;
        color: white;
    }
    div:hover {
        color: rgb(65, 202, 244);
        cursor: pointer;
        background: rgba(0,0,0, 0.3);
    }
`
const Image = styled.img`
    width: 60px;
    height: 100%;
    ${props=> props.rotate === 'backButton' ? 'transform: rotate(95deg)':
              props.rotate === 'nextButton' && 'transform: rotate(-180deg)'
    };


    :hover {
        cursor: pointer;
        background: rgba(0,0,0, 0.3);
    }

`


export default header;
