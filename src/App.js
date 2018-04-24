import React from 'react';
import Loop from './Loop.js';
import After from './After.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  
  render() {


    return (
      <Router>
        <div>
      <Route exact path="/" render={() => <Loop/>} />
      <Route exact path="/after" render={() => <After />} />
      </div>
      </Router>
    );
  }
}

export default App;
