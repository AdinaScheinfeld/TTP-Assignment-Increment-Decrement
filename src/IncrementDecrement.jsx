import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './IncrementDecrement.css'

class IncrementDecrement extends Component {
    
    constructor(props){
        super(props);
        this.state={
            val: this.props.num
        };
    }

    increment() {
        this.setState({val: this.state.val+1});
    }

    decrement() {
        if(this.state.val !== 0){
            this.setState({
                val: this.state.val-1
            });
        }
        else{
            alert('Cannot be less than zero');
        }
    }

    render() {
        return (
            <div>
                <h1>{ this.state.val }</h1>
                <button type="button" onClick={ () => this.increment()}>Increment</button>
                <button type="button" onClick={ () => this.decrement()}>Decrement</button>
            </div>
        );
    }
}

IncrementDecrement.propTypes = {
    num: PropTypes.number.isRequired,
}

export default IncrementDecrement;