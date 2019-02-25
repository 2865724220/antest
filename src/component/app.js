import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import Main from './main/main';
import Question from './question/question';
import Test from './test/test';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route path="/" component={Main}/>
                        <Route path="/question" component={Question}/>
                        <Route path="/test" component={Test}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
