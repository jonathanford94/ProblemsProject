import React from 'react';
import {
    Link
  } from "react-router-dom";

class QuestionFive extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result: '',
        }
        this.goesIntoFour = this.goesIntoFour.bind(this);
    }

    goesIntoFour(event){
        let number = parseInt(event.target.value);
        let result = Boolean(number % 4 === 0);
        if(result){
            result = 'true';
        } else {
            result = 'false';
        }
        this.setState({result: result});
    }

    render(){
        return (
            <div className="question">
                <Link to="/">Back to Questions</Link>

                <h1>Function to check if a number is divisble by four</h1>
                <h4>Question</h4>
                <pre>{`
                    function goesIntoFour(num) {
        
                    }

                    // this function should return a boolean, checking if the number is divisble by 4, but is incomplete

                    goesIntoFour(19);
                    goesIntoFour(20);
                `}   
                </pre>
                <h4>My Answer</h4>
                <pre>{`
                    function goesIntoFour(num) {
                        return `}<span>Boolean(num % 4 === 0);</span>{`
                    
                    }

                    // this function should return a boolean, checking if the number is divisble by 4, but is incomplete
                    
                    goesIntoFour(19);
                    goesIntoFour(20);
                `}   
                </pre>
                <h4>Example of function working</h4>
                <p className='instruction'>Please input a number to see if it is divisible by 4</p>
                <input onChange={this.goesIntoFour}></input>
                <h4>Result</h4>
                <p className="result">{this.state.result}</p>
            </div>
        )
    }
}

export default QuestionFive;