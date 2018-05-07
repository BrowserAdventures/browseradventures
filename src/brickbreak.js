import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const W = canvas.width = window.innerWidth;
const H = canvas.height;
var ballRadius = 10;
var x = W/2;
var y = H-30;
var dx = 2;
var dy = -2;



document.addEventListener("mousemove", mouseMoveHandler, false);


function mouseMoveHandler(e) {
    var mouseX = e.clientX - canvas.offsetLeft;
    var mouseY = e.clientY - canvas.offsetLeft;
    if(mouseX > 0 && mouseX < W  && mouseY > 0 && mouseY < W)
    {
        x = mouseX - ballRadius/2;
        y = mouseY - ballRadius/2;
    }

}


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.strokeStyle = "#0095DD";
    ctx.stroke();
    ctx.closePath();
}



function draw()
{
    drawBall();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }

}

//setInterval(draw, 10);

// const loop=(lastTime)=> {
//     const callback=(Mseconds)=> {
//         ctx.clearRect(0, 0, W, H);
//         if(lastTime)
//             draw((Mseconds -lastTime)/1000);
//         lastTime = Mseconds;
//         requestAnimationFrame(callback);
//     }
//     callback();
// }

class ParticleSystem extends Component
{
    componentDidMount(lastTime)
    {
        const callback=(Mseconds)=> {
            ctx.clearRect(0, 0, W, H);
            if(lastTime)
                draw((Mseconds -lastTime)/1000);
            lastTime = Mseconds;
            requestAnimationFrame(callback);
        }
        callback();
    }

    render()
    {
        return(<div>

        </div>)
    }
}




export default ParticleSystem;
