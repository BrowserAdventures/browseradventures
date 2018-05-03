import React, { Component, Fragment } from 'react'
import styled, {keyframes} from 'styled-components'

import Header from '../../../components/UI/Header/Header'

//import BoxGenBuilder from '../../components/BoxGenBuilder/BoxGenBuilder'


class SpriteAnimations extends Component
{
    componentWillMount()
    {
        this.setState({})
    }

    componentDidMount()
    {
        this.start()
    }

    componentDidUnmount()
    {
        this.stop()
    }

    start=()=> {
        this.timer = setInterval(this.tick, 1000)
    }

    stop=()=> {
        clearInterval(this.timer)
    }

    tick=()=> {

    }


    render()
    {
        return(<Fragment>
            <Header title='Sprite Animations' backButton nextButton
                backButtonClicked={()=> this.props.history.push('/boxgenerator')}
                nextButtonClicked={()=> this.props.history.push('/reactcanvas')}
                click={this.start}
            />
            <Sprite />
            <Sprite2 />
        </Fragment>)
    }
}

const SpriteKeyFrame = keyframes`
    from{
        background-position-x: 0px;
    }
    to{
        background-position-x: -500px;
    }
`
const Sprite = styled.div`
    width: 50px;
    height: 72px;
    background-image : url(http://i.imgur.com/xtk0SCC.png);
    animation: ${SpriteKeyFrame} 1s steps(10) infinite;
`

const Sprite2AnimationX = keyframes`
    from{
        background-position-x: 0px;
    }
    to{
        background-position-x: -710px;
    }
`
const Sprite2AnimationY = keyframes`
    from{
        background-position-y: 0px;
    }
    to{
        background-position-y: -355px;
    }
`
const Sprite2 = styled.div`
    width: 118.333px;
    height: 118.333px;
    background-image: url("http://i.imgur.com/MbT28qN.png");
    animation: ${Sprite2AnimationX} 1s steps(6) infinite,
               ${Sprite2AnimationY} 3s steps(3) infinite;
`



const Sprite3AnimationX = keyframes`
    from{
        background-position-x: 50px;
    }
    to{
        background-position-x: -1000px;
    }
`
const Sprite3 = styled.div`
    width: ${900/4}px;
    height: 321px;
    background-image : url(https://tag.hexagram.ca/wp-content/uploads/bear-spritesheet-small-1.png);
    animation: ${Sprite3AnimationX} 0.4s steps(4) infinite;
`


export default SpriteAnimations;
