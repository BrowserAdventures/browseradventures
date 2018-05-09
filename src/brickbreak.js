import React, { Component } from 'react'
import styled from 'styled-components'

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const W = canvas.width = window.innerWidth;
var H = canvas.height = 60;




class Circle
{
    constructor(radius, x, y)
    {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.vel = {x: 5, y: 5};
        this.color = "#0095DD";
    }

    draw()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();
    }

    get left() {
        return this.x - this.r;
    }
    get right() {
        return this.x + this.r;
    }
    get top() {
        return this.y - this.r;
    }
    get bottom() {
        return this.y + this.r;
    }
}

class Particle extends Circle
{

}









class ParticleSystem extends Component
{
    constructor()
    {
        super()
        this.particle = new Circle(10, 10, 10)
        this.particles = []

        for (var i = 0; i < 5; i++) {
            this.particles.push(i);
        }
        for(var i = 0; i < this.particles.length; i++) {
            this.particles[i] = new Circle(10, 10, 10);
        }
    }

    draw=()=>
    {
        player.draw()
        this.particle.draw();
        this.particles.forEach(particle=> {
            particle.draw()
            particle.x += particle.vel.x
        })
        this.particle.x += this.particle.vel.x;
        this.particle.y += this.particle.vel.y;

        this.boundaryDetection(this.particle)
    }

    boundaryDetection=(id)=>
    {
        id.left < 0 || id.right > W ?
            id.vel.x = -id.vel.x :
            id.vel.x = id.vel.x
        ;

        id.top < 0 || id.bottom > H ?
            id.vel.y = -id.vel.y:
            id.vel.y = id.vel.y
        ;
    }

    componentDidMount(lastTime)
    {
        const callback=(Mseconds)=> {
            ctx.clearRect(0, 0, W, H);
            if(lastTime)
                this.draw((Mseconds -lastTime)/1000);
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

const player = new Circle(10, 10, 10);


const mouseMouse=(e)=>
{
    var mouseX = e.clientX - canvas.offsetLeft;
    var mouseY = e.clientY - canvas.offsetLeft;
    if(mouseX > 0 && mouseX < W  && mouseY > 0 && mouseY < W)
    {
        player.x = mouseX - player.r/2;
        player.y = mouseY - player.r/2;
    }
}



document.addEventListener("mousemove", mouseMouse, false);
export default ParticleSystem;
