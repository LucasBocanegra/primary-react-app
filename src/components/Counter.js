import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import {Button, Overlay, Tooltip} from 'react-bootstrap';

class Counter extends Component{
    /**
     * Construtor da classe
     * 
     * @param {*} props 
     */
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true,
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * lifecycle hooks
     * 
     * Esse método é executado depois que um component foi renderizado no DOM
     */ 
    componentDidMount(){
         this.timerID = setInterval(
            () => {
                 if(this.state.isToggleOn){
                    this.setState((prevState, props) => {
                        return {
                            count: prevState.count + props.increment
                        }
                    });
                }     
            },
            1000
        );       
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    /**
     * lifecycle hooks
     * 
     * Esse método é executado depois que um component foi é retirado da tela
     */ 
    componentWillUnmount(){
    }

    render(){
        const sharedProps = {
            show: this.state.show,
            container: this,
            target: () => ReactDOM.findDOMNode(this.refs.target)
        };


        return(
            <div>
                <h2>Counter: {this.state.count} </h2>
                <Button ref="target" bsStyle={this.state.isToggleOn ? 'danger': 'warning'} onClick={this.handleClick}>
                     {this.state.isToggleOn ? 'Pause' : 'Start'}
                </Button>

                <Overlay placement="right">
                    <Tooltip id="overload-right">Tooltip overload!</Tooltip>
                </Overlay>
            </div>
        );
    }
}

export default Counter;