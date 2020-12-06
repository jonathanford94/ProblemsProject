import React from 'react';
import {
    Link
  } from "react-router-dom";

class QuestionOne extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result: '',
        }
        this.multiplyByTen = this.multiplyByTen.bind(this);
    }

    multiplyByTen(event){
        let number = parseInt(event.target.value);
        let answer = number * 10;

        this.setState({ result: answer});

    }

    render(){
        return (
            <div className="question">
                <Link to="/">Back to Questions</Link>

                <h1>Function to multiply by 10</h1>
                <h4>Question</h4>
                <pre>{`
                    function multiplyByTen() {
                        return num * 10;
                    }
                    
                    // This function should multiply the original number by 10, but has an error
                    
                    multiplyByTen(15);
                `}   
                </pre>
                <h4>My Answer</h4>
                <pre>{`
                    function multiplyByTen(`}<span>num</span>{`) {
                        return num * 10;
                    }
                    
                    multiplyByTen(15);
                `}   
                </pre>
                <h4>Example of function working</h4>
                <p className='instruction'>Please input a number to be multiplied by 10</p>
                <input onChange={this.multiplyByTen}></input>
                <h4>Result</h4>
                <p className="result">{this.state.result}</p>
            </div>
        )
    } 
}

export default QuestionOne;