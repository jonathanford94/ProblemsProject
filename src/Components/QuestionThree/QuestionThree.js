import React from 'react';
import {
    Link
  } from "react-router-dom";

class QuestionThree extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            price: '',
            vatRate: 0.2,
            result: 0,
        }
        this.calculateVAT = this.calculateVAT.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changeVAT = this.changeVAT.bind(this);
    }

    calculateVAT() {
        let answer = this.state.price * this.state.vatRate;
        this.setState({result: answer});
    }

    changePrice(event){
        let number = parseInt(event.target.value);   
        this.setState({price: number}, this.calculateVAT);
    }

    changeVAT(event){
        let number = parseInt(event.target.value);
        let rate = number / 100;
        this.setState({vatRate: rate}, this.calculateVAT);
    }

    render() {
        return (
            <div className="question">
                <Link to="/">Back to Questions</Link>

                <h1>Function to calculate VAT of a price</h1>
                <h4>Question</h4>
                <p>(changes in green)</p>
                <pre>{`
var calculateVAT = {
    rate: 0.2,
    getVATAmount: function(subTotal) {
        return subTotal * rate;
    }
}

// This function should get the VAT amount from the original cost, but has an error

calculateVAT.getVATAmount(67);
                    `}   
                </pre>
                <h4>My Answer</h4>
                <pre>{`
var calculateVAT = {
    rate: 0.2,
    getVATAmount: function(subTotal) {
        return subTotal * `}<span>this.rate</span>{`;
    }
}

// This function should get the VAT amount from the original cost, but has an error

calculateVAT.getVATAmount(67);
                    `}   
                </pre>
                <h4>Example of function working</h4>
                <p className='instruction'>Please input a price and a VAT rate(in percent ie 20% as 20)</p>
                <input onChange={this.changePrice} placeholder="price"></input>
                <input onChange={this.changeVAT} placeholder="20"></input>
                <h4>Result</h4>
                <p className="result">{this.state.result}</p>
            </div>
        )
    }
}

export default QuestionThree;