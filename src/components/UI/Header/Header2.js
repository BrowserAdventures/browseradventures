import React from 'react';
import styled from 'styled-components'

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
        greenFire: 'http://www.fun-lover.com/graphic-shop/Halloween/images/FireSmoke/fire-023.png',
    }

    return(<Wrapper noMargin={props.noMargin}>
        <Image
            src={props.src || props.backButton && images.arrow || images[props.imgStore]}
            onClick={props.backButtonClicked}
            alt=''
        />
        <Container>
            <div onClick={props.click}><h3>{props.instructions}</h3></div>
            <div onClick={props.click}><h3>{props.title}</h3></div>
        </Container>
        <Image
            src={props.src || props.nextButton && images.arrow || images[props.imgStore]}
            onClick={props.nextButtonClicked}
            alt=''
            nextButton={props.nextButton}
        />
    </Wrapper>)
}


const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: ${props=> props.noMargin || '20px'};
    display: flex;
    justify-content: space-between;

    ${Image} {
        background: rgba(0,0,0, 0.7);
    }

    ${Container} {
        background: rgba(0,0,0, 0.7);
    }
`
const Image = styled.img`
    width: 60px;
    height: 100%;
    ${props=> props.nextButton && 'transform: rotate(-180deg)'};

    :hover {
        cursor: pointer;
        background: rgba(0,0,0, 0.2);
    }
`

const Container = styled.div`
    width: 100%;
    height: 60px;
    position: relative;

    :hover{
        background: rgba(0,0,0, 0.2);
    }

    div:nth-child(even) {
        height: 60px;
        width: 100%;
        text-align: center;
        color: white;
        position: absolute;
        transform: perspective(600px) rotateX(0deg);
        backface-visibility: hidden;
        transition: transform 0.5s linear 0s;
    }
    div:nth-child(odd) {
        height: 60px;
        width: 100%
        text-align: center;
        color: white;
        position: absolute;
        transform: perspective(600px) rotateX(180deg);
        backface-visibility: hidden;
        transition: transform 0.5s linear 0s;
    }

    :hover div:nth-child(even)  {
        cursor: pointer;
        transform: perspective(600px) rotateX(-180deg);
    }
    :hover div:nth-child(odd) {
        cursor: pointer;
        transform: perspective(600px) rotateX(0deg);
    }
`


export default header;
