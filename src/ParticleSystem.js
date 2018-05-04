import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
const W = canvas.width = window.innerWidth;
const H = canvas.height;


class Rect       // Rectangle - template
{
    constructor(width, height, x, y)
    {
        this.x = x || null;
        this.y = y || null;
        this.size = { w: width, h: height };
        this.vel = { x: null, y: null };
    }

    get right() {
        return this.x + this.size.w;
    }
    get bottom() {
        return this.y + this.size.h;
    }
}


class Particle extends Rect
{
    constructor()
    {
        super(20, 20, 20, 10)
        this.vel = {x: 5, y: 2}
    }

    draw()
    {
        ctx.fillStyle ='white';
        ctx.fillRect(this.x, this.y, 10, 10);
    }

    boundaryDetection()
    {
        this.x <= 0 || this.x+this.size.w >= W ? this.vel.x = -this.vel.x :
            this.vel.x = this.vel.x
        this.x += this.vel.x
    }
}

class Player extends Rect
{
    constructor()
    {
        super(20, 20, 20, 10)
        this.vel = {x: 5, y: 2}
    }

    draw()
    {
        ctx.fillStyle ='white';
        ctx.fillRect(this.x, this.y, 20, 20);
    }

    mouse=(E)=> {
        var mouseX = E.clientX - canvas.offsetLeft;
        var mouseY = E.clientY - canvas.offsetLeft;

    	mouseX = this.x;
    	mouseY = this.y;
    }
}


class Main        // MAIN
{
    constructor()
    {

        this.create();
        this.loop();
    }

    create() // creates an instance of object (outside of game loop)
    {
        // this.particle = new Particle
        // this.player = new Player
    }

    update(DT) // continuously updates - 60 fps
    {
        // this.particle.draw()
        // this.particle.boundaryDetection()
        // this.player.draw()
    }

    collisionHandler()
    {}

    collisionDetection(id_1, id_2)
    {
        return id_1.x+10 <= id_2.x + id_2.size.w
            && id_2.x+10 <= id_1.x + id_1.size.w
            && id_1.y+20 <= id_2.y + id_2.size.h
            && id_2.y+20 <= id_1.y + id_1.size.h
    }

    loop(lastTime) { // creates main loop
        const callback=(Mseconds)=> {
            ctx.clearRect(0, 0, W, H);
            if(lastTime)
                this.update((Mseconds -lastTime)/1000);
            lastTime = Mseconds;
            requestAnimationFrame(callback);
        }
        callback();
    }
}
//const player = new Player
const main = new Main




// document.onmousemove = function(E){
//
// }

// const mouse=(E)=> {
//     var mouseX = E.clientX - canvas.offsetLeft;
//     var mouseY = E.clientY - canvas.offsetLeft;
//
// 	mouseX -= main.player.x;
// 	mouseY -= main.player.y;
// }
//
// document.addEventListener('onmousemove', main.player.mouse, false)


class ParticleSystem extends Component
{
    componentWillMount() {
        this.setState({
            gameLoop: main
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
