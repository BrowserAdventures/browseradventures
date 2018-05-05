import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
const W = canvas.width = window.innerWidth;
const H = canvas.height;



const update=(props)=>
{
    player.draw()
}



const Square=()=>
{
    this.x = 20;
    this.y = 20;

    this.draw=()=> {
        ctx.fillStyle = 'white',
        ctx.fillRect(this.x, this.y, 20, 20)
    }
}
const player = new Square

const mouseMoveHandler=(E)=> {
    var mouseX = E.clientX - canvas.offsetLeft;
    var mouseY = E.clientY - canvas.offsetLeft;

	mouseX -= player.x;
	mouseY -= player.y;
}

document.addEventListener("mousemove", mouseMoveHandler, false);

const loop=(lastTime)=> {
    const callback=(Mseconds)=> {
        ctx.clearRect(0, 0, W, H);
        if(lastTime)
            update((Mseconds -lastTime)/1000);
        lastTime = Mseconds;
        requestAnimationFrame(callback);
    }
    callback();
}

class ParticleSystem extends Component
{
    componentWillMount() {
        this.setState({
            gameLoop: loop
        })
    }

    componentDidMount() {

    }



    // update(DT)
    // {}
    //
    // loop(lastTime) { // creates main loop
    //     const callback=(Mseconds)=> {
    //         if(lastTime)
    //             this.update((Mseconds -lastTime)/1000);
    //         lastTime = Mseconds;
    //         requestAnimationFrame(callback);
    //     }
    //     callback();
    // }

    render()
    {
        return(<Fragment>
            {this.state.gameLoop()}
        </Fragment>)
    }
}




export default ParticleSystem;
