import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Questions from '../Questions/Questions';
import QuestionOne from '../QuestionOne/QuestionOne';
import QuestionTwo from '../QuestionTwo/QuestionTwo';
import QuestionThree from '../QuestionThree/QuestionThree';
import QuestionFour from '../QuestionFour/QuestionFour';
import QuestionFive from '../QuestionFive/QuestionFive';
import QuestionSix from '../QuestionSix/QuestionSix';

function App(){
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Coding Challenge</h1>
      </header>
      <body>
        <Router>
            <Switch>
              <Route path="/" component={Questions} exact />
              <Route path="/01" component={QuestionOne} exact />
              <Route path="/02" component={QuestionTwo} exact />
              <Route path="/03" component={QuestionThree} exact />
              <Route path="/04" component={QuestionFour} exact />
              <Route path="/05" component={QuestionFive} exact />
              <Route path="/06" component={QuestionSix} exact />
            </Switch>
        </Router>
      </body>
      <footer>
        <a href="https://jonathan-ford.co.uk/" target='_blank' rel="noreferrer"><p className="portfolioLink">Check out my portfolio and other projects here</p></a>
      </footer>
    </div>
  );
}

export default App;
