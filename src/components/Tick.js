import React, { Component } from 'react';
import Counter from './Counter.js'

class Tick extends Component{
    /**
     * Construtor da classe
     * 
     * @param {*} props 
     */
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    /**
     * lifecycle hooks
     * 
     * Esse método é executado depois que um component foi renderizado no DOM
     */ 
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    /**
     * lifecycle hooks
     * 
     * Esse método é executado depois que um component foi renderizado no DOM
     */ 
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    /**
     * método que atualiza o estado
     * 
     */
    tick(){
        this.setState((prevState, props) => {
            return {
                date: new Date()
            }
        });
    }

    render(){
        return(
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>                
                <Counter increment={this.props.increment}/>
            </div>
        );
    }
}

export default Tick;