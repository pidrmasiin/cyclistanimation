import React from 'react'
import Loop from './cyclist/Loop.js'
import After from './cyclist/After.js'
import './cyclist/css/App.css'
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
        )
    }
}

export default App
