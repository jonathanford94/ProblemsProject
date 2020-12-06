import React from 'react';
import {
    Link
  } from "react-router-dom";

function Questions(){
    return (
        <div>
            <p className="introduction">Hello recruitment team, I have completed the coding challenge and wanted to showcase the answers along with my skills in this website built with react. Click on each of the questions to see the question and my answer, along with a working demo of the function in said question. I have uploaded the code to github <a href="https://github.com/jonathanford94/ProblemsProject" target='_blank' rel="noreferrer">here</a> if you want to take a look.</p>
            <ul className="nav">
                <li><Link to="/01"><span className="number">01.</span> Function to multiply by ten</Link></li>
                <li><Link to="/02"><span className="number">02.</span> Function to say hello</Link></li>
                <li><Link to="/03"><span className="number">03.</span> Function to calculate VAT</Link></li>
                <li><Link to="/04"><span className="number">04.</span> Function to count up in seconds</Link></li>
                <li><Link to="/05"><span className="number">05.</span> Function to check if number is divisible by 4</Link></li>
                <li><Link to="/06"><span className="number">06.</span> Function to check if it is monday</Link></li>
            </ul>
        </div>
    )
}

export default Questions;