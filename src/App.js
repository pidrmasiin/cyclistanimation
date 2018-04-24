import React from 'react';
import Loop from './Loop.js';
import After from './After.js';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  
  render() {


    return (
      <Router>
        <div className='mydiv'>
      <Route exact path="/" render={({history}) => <Loop history ={history}/>} />
      <Route exact path="/after" render={() => <After />} />
      </div>
      </Router>
    );
  }
}

export default App;
