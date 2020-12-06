import React from 'react';
import {
    Link
  } from "react-router-dom";

class QuestionTwo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
        }
        this.sayHi = this.sayHi.bind(this);
    }

    sayHi(event) {
        let name = event.target.value;
        let message = `Hello ${name}!`;
        this.setState({ name: message});
    }

    render(){
        return (
            <div className="question">
                <Link to="/">Back to Questions</Link>

                <h1>Function to say hello to user</h1>
                <h4>Question</h4>
                <pre>{`
                    var testObject = {
                        sayHi = function(name) {
                            return 'Hello '+name+'!';
                        }
                    }
                    
                    // This function should return "Hello <name>!", but has an error
                    
                    testObject.sayHi('Piotr')
                `}   
                </pre>
                <h4>My Answer</h4>
                <pre>{`
                    var testObject = {
                        sayHi`}<span>:</span>{` function(name) {
                            return 'Hello '+name+'!';
                        }
                    }
                    
                    // This function should return "Hello <name>!", but has an error
                    
                    testObject.sayHi('Piotr');
                `}   
                </pre>
                <h4>Example of function working</h4>
                <p className='instruction'>Please input a name</p>
                <input onChange={this.sayHi}></input>
                <h4>Result</h4>
                <p className="result">{this.state.name}</p>
            </div>
        )
    }
}

export default QuestionTwo;