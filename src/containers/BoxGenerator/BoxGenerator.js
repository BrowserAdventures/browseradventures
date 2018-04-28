import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/UI/Header/Header'
import Modal from '../../components/UI/Modal/Modal'

import BoxGenBuilder from '../../components/BoxGenBuilder/BoxGenBuilder'


class BoxGenerator extends Component
{
    state = {

    }

    componentWillMount()
    {
        this.setState({
            modal: false,
            date: new Date(),
            counter: 1,
            increment: 1,
            boxes: [],
            array: [
                {id: Math.random(), row: 4, column: 1},
                {id: Math.random(), row: 2, column: 4},
            ]
        })
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
        let updateBoxes = [...this.state.boxes]
        let boxPos = {
            id: Math.random(),
            row: Math.floor(Math.random() * 20) + 1,
            column: Math.floor(Math.random() * 20) + 1,
        }
        this.state.counter === 2 && updateBoxes.push(boxPos)



        this.setState({date: new Date()})
        this.setState((prevState, props) => ({
            counter: prevState.counter >= 2 ? 1 : prevState.counter + this.state.increment,
            boxes: updateBoxes
        }));
    }

    newBox=()=>
    {
        this.stop()
    }

    deleteBoxHandler=(box)=> {
        let updatBoxes = [...this.state.boxes]
        
    }

    render()
    {
        return(<div>
            <Header title='Box Generator' imgStore='blueOrb'
                backButtonClicked={()=> this.props.history.push('/')}
                click={this.start}
                nextButtonClicked={this.newBox}
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>
            </Modal>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <h2>{this.state.counter}</h2>
            <BoxGenBuilder
                boxes={this.state.boxes}
                delete={this.deleteBoxHandler}
            />
        </div>)
    }
}


const mapStateToProps=(state)=>
{
    return{

    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{

    }
}


const log=(self)=> console.log(self)




export default connect(mapStateToProps, mapDispatchToProps)(BoxGenerator);
