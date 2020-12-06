import React from 'react';
import {
    Link
  } from "react-router-dom";

class QuestionFour extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            intervalId: 0,
        }
        this.countUp = this.countUp.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.stopCount = this.stopCount.bind(this);
    }

    id = 0;

    changeNumber(){
        this.setState({ number: this.state.number + 1});
    }

    countUp() {
        this.id = setInterval(this.changeNumber, 1000);
    }

    stopCount(){
        clearInterval(this.id);
    }

    componentWillUnmount() {
        this.stopCount();
    }
    
    render(){
        return (
            <div className="question">
                <Link to="/">Back to Questions</Link>

                <h1>Function to return an incrementing number every second</h1>
                <h4>Question</h4>
                <p>(changes in green)</p>
                <pre>{`
var countup = {
    i: 0,
    startCount: function () {
        return i++;
    }
}

// This function should return an incrementing number every second, but is incomplete

countup.startCount();
                `}   
                </pre>
                <h4>My Answer</h4>
                <pre>{`
var countup = {
    i: 0,
    startCount: function () {
        `}<span>{`setInterval(function(){ return countup.i++;}, 1000)`}</span>{`
    }
}

// This function should return an incrementing number every second, but is incomplete

countup.startCount();
                `}   
                </pre>
                <h4>Example of function working</h4>
                <p className='instruction'>Press the start button to start the counter, and the stop button to stop the count</p>
                <button onClick={this.countUp}>Start</button>
                <button onClick={this.stopCount}>Stop</button>
                <h4>Result</h4>
                <p className="result">{this.state.number}</p>
            </div>
        )
    }
}

export default QuestionFour;