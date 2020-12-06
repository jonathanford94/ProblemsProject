import React from 'react';
import {
    Link
  } from "react-router-dom";

class QuestionSix extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result: '',
        }
        this.isThisMonday = this.isThisMonday.bind(this);
    }

    isThisMonday() {
        let date = new Date();
        let number = date.getDay();
        let result = Boolean(number === 1);
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

                <h1>Function to check if it's currently monday</h1>
                <h4>Question</h4>
                <pre>{`
function isThisMonday() {

}

// this function should return true if the day of the week is Monday, but is incomplete

isThisMonday();
                    `}   
                </pre>
                <h4>My Answer</h4>
                <p>(changes in green)</p>
                <pre>{`
function isThisMonday() {
    `}<span>{`
    var date = new Date();
    var number = date.getDay();
    return Boolean(number === 1);`}
    </span>{`
}

// this function should return true if the day of the week is Monday, but is incomplete

isThisMonday();
                    `}   
                </pre>
                <h4>Example of function working</h4>
                <p className='instruction'>Click the button to see if it's monday</p>
                <button onClick={this.isThisMonday}>Monday?</button>
                <h4>Result</h4>
                <p className="result">{this.state.result}</p>
            </div>
        )
    }  
}

export default QuestionSix;