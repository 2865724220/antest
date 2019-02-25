import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Route } from 'react-router-dom';

// import App from './component/app';
import Main from './component/main/main';
import Question from './component/question/question';
import Question02 from './component/question/question02';
import Question03 from './component/question/question03';
import Question04 from './component/question/question04';
import Question05 from './component/question/question05';
import Question06 from './component/question/question06';
import Question07 from './component/question/question07';
import Question08 from './component/question/question08';
import Face from './component/face/face';
import Speak from './component/speak/speak';
import Insurance from './component/insurance/insurance';
import Insurance01 from './component/insurance/insureance01';
import Suggestion from './component/result/suggestion';
import Result from './component/result/result';


import './App.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <HashRouter>
        <div className="App">
            <Route exact path="/" component={Main}/>
            <Route exact path="/question" component={Question}/>
            <Route exact path="/question02" component={Question02}/>
            <Route exact path="/question03" component={Question03}/>
            <Route exact path="/question04" component={Question04}/>
            <Route exact path="/question05" component={Question05}/>
            <Route exact path="/question06" component={Question06}/>
            <Route exact path="/question07" component={Question07}/>
            <Route exact path="/question08" component={Question08}/>
            <Route exact path="/face" component={Face}/>
            <Route exact path="/speak" component={Speak}/>
            <Route exact path="/insurance" component={Insurance}/>
            <Route exact path="/insurance01" component={Insurance01}/>
            <Route exact path="/result" component={Result}/>
            <Route exact path="/suggestion" component={Suggestion}/>
        </div>
    </HashRouter>,
    document.getElementById('root')
);
registerServiceWorker();
