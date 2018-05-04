import React, { Component } from 'react'

import Header from '../../../components/UI/Header/Header'

import birdpoo from '../../../assets/imgs/GameImages/birdpoo.png'
import bird from '../../../assets/imgs/GameImages/bird.png'
import greyMan from '../../../assets/imgs/GameImages/greyMan.png'
////////////////
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
const W = canvas.width, H = canvas.height;


class Vec
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }
}

class Rect
{
    constructor(xWidth, yHeight)
    {
        this.pos = new Vec;
        this.size = new Vec(xWidth, yHeight);
    }
    get left() {
        return this.pos.x;
    }
    get right() {
        return this.pos.x + this.size.x;
    }
    get top() {
        return this.pos.y;
    }
    get bottom() {
        return this.pos.y + this.size.y;
    }

}

class Square extends Rect
{
    constructor(w, h)
    {
        super(w, h);
        this.vel = new Vec;
    }

    draw()
    {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.pos.x, this.pos.y,
                    this.size.x, this.size.y
        );
        this.wall();
    }

    wall()
    {
        if (this.left < 0 || this.right > W) {
            this.vel.x = -this.vel.x;
        }
        if (this.top < 0 || this.bottom > H) {
            this.vel.y = -this.vel.y;
        }
    }
}

class Sprite extends Square
{
    constructor(path, fwNumber, fhNumber)
    {
        super(50, 50);
        this.img = new Image();
        this.img.src = path;
        this.fwNumber = fwNumber; this.fhNumber = fhNumber;
        this.Fwidth = this.img.width / this.fwNumber;
        this.Fheight = this.img.height / this.fhNumber;
        this.cropX = 0; this.cropY = 0;
        // tracks animation interval
        this.Xcounter = 0; this.Ycounter = 0;
    }
    animate()
    {
        //  creates animation loop  //
        this.Xspeed = Math.floor(this.Xcounter) % this.Xsequence;
        this.Xspeed *= this.Fwidth; // amount to increase each frame
        this.Xcounter += 0.125; // animation speed
        //  boundaries loop  //
        if (this.right < 0) this.pos.x = W;
        if (this.left > W) this.pos.x = 0-this.size.x;
    }

    draw() {
        ctx.drawImage(this.img,
            this.cropX, this.cropY,
            this.Fwidth, this.Fheight,
            this.pos.x, this.pos.y,
            this.size.x, this.size.x);
    }

    update(columnX, rowY, Xsequence) {
        this.Xsequence = Xsequence;
        this.columnX = columnX * this.Fwidth;
        this.cropY = rowY * this.Fheight;
        this.cropX = this.columnX + this.Xspeed;
    }
}

class Player extends Sprite
{
    constructor()
    {
        super(bird, 12, 8);
        this.leftkey = false; this.rightkey = false;
        this.upkey = false; this.downkey = false;
        this.stop = true; this.start = false; this.spacebar = false;
        this.pos.x = W/2; this.pos.y = H/2;
    }
    init()
    {
        this.animate();
        this.controller();
        if(!this.start) this.update(6, 3, 3);
    }

    controller() {
        // LEFT //
        if(this.leftkey &&!(this.rightkey || this.upkey || this.downkey)) {
            this.update(6, 1, 3); // update animation
            this.draw();
            this.stop = false;
            this.start = true;
            this.dirRight = false; // set the direction
            this.pos.x -= 2.5;
            this.Xcounter += .09; // increase animation speed
        }
        // RIGHT //
        if(this.rightkey &&!(this.leftkey || this.upkey || this.downkey)) {
            this.update(6, 2, 3);
            this.draw();
            this.pos.x += 2.5;
            this.stop = false;
            this.start = true;
            this.dirRight = true;
            this.Xcounter += .09;
        }
        // UP //
        if(this.upkey &&!(this.leftkey || this.rightkey || this.downkey)) {
            this.update(6, 3, 3);
            this.draw();
            this.pos.y -=2.5;
            this.stop = false;
            this.start = true;
            this.dirUp = true;
            this.Xcounter += .09;
        }
        // DOWN //
        if(this.downkey &&!(this.leftkey || this.rightkey || this.upkey)) {
            this.update(6, 0, 3);
            this.draw();
            this.pos.y +=2.5;
            this.stop = false;
            this.start = true;
            this.dirUp = false;
            this.Xcounter += .09;
        }
        // SPACEBAR //
        if(this.spacebar &&!(this.leftkey || this.rightkey || this.upkey))
        {}
        if(this.stop) { // updates animation direction
            if(this.dirRight) this.update(6, 2, 3);
            if(!this.dirRight) this.update(6, 1, 3);
        }

        this.draw();
        this.stop = true;
    }
}

class Victim extends Sprite
{
    constructor(x)
    {
        super(greyMan, 8, 9);
        this.pos.y = H-50;
        this.row = Math.floor(Math.random()*(7 -4)+4);
        this.pos.x = Math.floor(Math.random()*((x) -0)+0);
        this.vel.x = Math.floor(Math.random()*(150 -80)+80);
        //this.pos.y = y; this.pos.x = x;
    }
    init() {
        this.animate();
        this.move();
        this.update(0, this.row, 8);
        this.draw();
    }
    move()
    {
        this.pos.x += Math.floor(Math.random()*(3 -0.1)+0.1);
        this.Xcounter += 0.03;
    }
}

class Spit extends Rect
{
    constructor()
    {
        super(2.5, 2.5);
        this.bullets = [];
        this.hit = false;
    }
    draw()
    {
        for (var i = 0; i < this.bullets.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'white';
            this.pos.x = this.bullets[i][0];
            this.pos.y = this.bullets[i][1];
            ctx.arc(this.pos.x, this.pos.y, this.size.x, 0, 2*Math.PI);
            ctx.fill();
            ctx.closePath();
        }
        this.move();
        this.shoot();
    }
    move()
    {
        for (var i = 0; i < this.bullets.length; i++) {
            if (this.bullets[i][1] < H+10) {
                this.bullets[i][1] +=7;
            }
            else if (this.bullets[i][1] > H+9) this.bullets.splice(i, 1);
            if (this.hit) this.bullets.splice(i, 1);
        }
    }
    shoot()
    {
        if (this.fire && this.bullets.length <= 0.1)
            this.bullets.push([player.pos.x+25, player.pos.y+player.size.y]);
    }
}



class Game
{
    constructor()
    {
        this.score = 0;
        this.spit = new Spit();
        this.victims = [];
        this.totalVictims = 10;

        for (var i = 0; i < this.totalVictims; i++) {
            this.victims.push(i);
        }
        for(var i = 0; i < this.victims.length; i++) {
            this.victims[i] = new Victim(W);
        }

        this.loop();
    }

    draw() // draw objects
    {
        player.init();
        this.spit.draw();

        this.victims.forEach(victim => {
            victim.init();
        })
        // draw score //
        ctx.font = '18px Arial';
        ctx.fillStyle = 'rgb(155, 125, 105)';
        //ctx.fillText('Score:  '+ this.score, W*0.46, H*0.1);
    }

    update(dt) // Game logic
    {
        for (var i = 0; i < this.victims.length; i++) {
        if(this.spit.bottom > this.victims[i].top+10
        && this.spit.bottom < this.victims[i].bottom-20
        && this.spit.left >= this.victims[i].left+15
        && this.spit.right <= this.victims[i].right-15)
        {
            this.victims.splice(i, 1);
            this.victims.push(new Victim(-50));
            this.score++;
        }
        }
        this.draw();
    }

    // Creates game loop //
    loop() {
        let lastTime;
        const callback = (Mseconds) => {
            ctx.clearRect(0, 0, W, H);
            if(lastTime) this.update((Mseconds -lastTime)/1000);
            lastTime = Mseconds;
            requestAnimationFrame(callback); }
        callback();
    }
}

const player = new Player();
const game = new Game;


/*_________________________________________________________*/


let KEY = {                 // KEY CONTROLS //
    press: function(e) {
        if (e.keyCode == 37) player.leftkey = true;
        if (e.keyCode == 39) player.rightkey = true;
        if (e.keyCode == 38) player.upkey = true;
        if (e.keyCode == 40) player.downkey = true;

        if (e.keyCode == 32) game.spit.fire = true; // poop //

    },
    release: function(e) {
        if (e.keyCode == 37) player.leftkey = false;
        if (e.keyCode == 39) player.rightkey = false;
        if (e.keyCode == 38) player.upkey = false;
        if (e.keyCode == 40) player.downkey = false;

        if (e.keyCode == 32) game.spit.fire = false; // poop //
    },
    touchMove: function(e) {
        if(e.touches) {
        player.pos.x = e.touches[0].pageX - canvas.offsetLeft - player.size.x / 2;
        player.pos.y = e.touches[0].pageY - canvas.offsetTop - player.size.y / 2;
        e.preventDefault();
        }
    },
    touch: function(e) {
        if(e.touches) game.spit.fire = true;
    }
}
document.addEventListener('keydown', KEY.press, false);
document.addEventListener('keyup', KEY.release, false);
document.addEventListener("touchstart", KEY.touch, false);
document.addEventListener("touchmove", KEY.touchMove, false);








///////////////
class Games2 extends Component
{
    openPage=(pathname)=>
    {
        this.props.history.push(`/${pathname}`)
    }

    render()
    {
        return(<div>
            <Header
                title='Games2' backButton
                backButtonClicked={()=> this.props.history.push('/')}
            />

        </div>)
    }
}


export default Games2;
