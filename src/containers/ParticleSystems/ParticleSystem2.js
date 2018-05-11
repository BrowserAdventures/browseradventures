import React, { Component } from 'react'
import Header from '../../components/UI/Header/Header'





class ParticleSystem2 extends Component
{
    constructor()
    {
        super()
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d');
        this.W = this.canvas.width = window.innerWidth;
        this.H = this.canvas.height = 500;
    }

    componentWillMount()
    {}


    update=(DT)=>
    {}

    boundaryDetection=(id)=>
    {
        return id.left <= 0
            || id.right >= this.W
            || id.top <= 60
            || id.bottom >= this.H
    }

    componentDidMount(lastTime)
    {
        const callback=(Mseconds)=> {
            this.ctx.clearRect(0, 0, this.W, this.H);
            if(lastTime)
                this.update((Mseconds -lastTime)/1000);
            lastTime = Mseconds;
            requestAnimationFrame(callback);
        }
        callback();
    }

    render()
    {
        return(<Header
            title='Particle System 2'
            backButton={()=> this.props.history.push('/particlesystem1')}
        />)
    }
}


export default ParticleSystem2;
