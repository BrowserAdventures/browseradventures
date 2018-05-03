import React, { Component, Fragment } from 'react'
import styled, {keyframes} from 'styled-components'

import Header from '../../../../components/UI/Header/Header'

//import BoxGenBuilder from '../../components/BoxGenBuilder/BoxGenBuilder'


function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}



class ReactCanvas extends Component
{
    componentWillMount() {
        this.setState({
            x: 10,
            y: 10,
            speedX: 1,
            speedY: 1,
        })

    }

    componentDidMount() {
        this.loop()
    }



    update(DT)
    {
        const {x, y, speedX, speedY} = this.state

        x > 0 && this.setState((prev, props)=> ({
            x:  prev.x+1,
        }));
        x > 180 && this.setState((prev, props)=> ({
            x: prev.x-1,
        }));
        //this.setState({x: x+speedX})
        // this.setState((prev, props)=> (prev.x >= 180 ? {
        //         x: prev.x -1,
        //         y: prev.y -1,
        //     } : {
        //         x: prev.x +1,
        //         y: prev.y +1,
        // }));
        // speedX: prev.x >= 180 ? -1 : this.state.speedX,
        // speedY: prev.y == 180 ? -1 : this.state.speedY,
        // prevState.y >= 100 ? prevState.y-(prevState.speed) :
        //     prevState.y + this.state.speed,
    }

    loop(lastTime) { // creates main loop
        const callback=(Mseconds)=> {
            if(lastTime)
                this.update((Mseconds -lastTime)/1000);
            lastTime = Mseconds;
            requestAnimationFrame(callback);
        }
        callback();
    }

    render()
    {
        return(<Fragment>
            <Header title='React Canvas' backButton
            backButtonClicked={()=> this.props.history.push('/spriteanimations')}
            click={this.start}
            />
            <Background>
            <Rect1 x={this.state.x} y={this.state.y} />
            </Background>
        </Fragment>)
    }
}


const Rect1 = styled.div`
    width: 20px;
    height: 20px;
    background: white;
    position: relative;
    top: ${props=> props.y}px;
    left: ${props=> props.x}px;;
`
const Background = styled.div`
    width: 200px;
    height: 200px;
    background: black;
    position: relative;
    top: 0px;
    left: 0px;;
`



export default ReactCanvas;
