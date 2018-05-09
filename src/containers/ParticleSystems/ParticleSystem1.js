import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Header from '../../components/UI/Header/Header'


















const setup=()=> {

}

class ParticleSystem1 extends Component
{
    componentWillMount()
    {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d');
        this.W = this.canvas.width = window.innerWidth;
        this.H = this.canvas.height = 500;
    }

    circle=(x, y)=>
    {


        this.x = x;
        this.y = y;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 20, 0, Math.PI*2, false);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

    update=(DT)=>
    {
        this.circle(20, 20)
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
            backButton nextButton
            backButtonClicked={()=> this.props.history.push('/')}
            nextButtonClicked={()=> this.props.history.push('/particlesystem2')}
        />)
    }
}




export default ParticleSystem1;
