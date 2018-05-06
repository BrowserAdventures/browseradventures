import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
const W = canvas.width = window.innerWidth;
const H = canvas.height;







function square()
{
    this.x = 20;
    this.y = 20;

    this.draw=()=> {
        ctx.fillStyle = 'white',
        ctx.fillRect(this.x, this.y, 20, 20)
    }
}

const circle=(x, y)=>
{
    this.x = x;
    this.y = y;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 20, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}


var player = new square()

const mouseMoveHandler=(E)=> {
    var mouseX = E.clientX - canvas.offsetLeft;
    var mouseY = E.clientY - canvas.offsetLeft;

	mouseX -= circle.x;
	mouseY -= circle.y;
}
document.addEventListener("mousemove", mouseMoveHandler, false);

const update=(props)=>
{
    circle(20, 20)
}

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


const setup=()=> {

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
        return(<div>
            {this.state.gameLoop()}
        </div>)
    }
}




export default ParticleSystem;
