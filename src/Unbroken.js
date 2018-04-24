import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import './test.css';
import './css/App.css';
import Box from './Box.js';
import Boom from './Boom.js';
import Cyclist from './Cyclist.js';
import Kid from './Kid.js';
import Broken from './Broken.js';
import { Link } from 'react-router-dom'
import After from './After.js';
import { Route } from 'react-router-dom'

class Unbroken extends React.Component {
  state = {
    shouldShowBox: false,
    boom: false,
    cyclist: false,
    back: false,
    kid: false
  };

  componentDidMount = () => {
      setTimeout(() => {
        this.setState({
            shouldShowBox: !this.state.shouldShowBox
          });
      }, 300);
      setTimeout(() => {
        this.setState({
            cyclist: !this.state.cyclist
          });
      }, 5000);
      setTimeout(() => {
        this.setState({
            boom: !this.state.boom
          });
      }, 6500);
      setTimeout(() => {
        this.setState({
            back: !this.state.back
          });
      }, 10000);
      setTimeout(() => {
        this.setState({
            kid: !this.state.kid
          });
      }, 11000);
  }

  render () {
        <Route exact path="/after" render={() => <After />} />
        return (  <Link to="/after"> 
        <div className="test">

    <TransitionGroup>
      { this.state.shouldShowBox && <Box/>}
      { this.state.cyclist && <Cyclist/>}
      { this.state.boom && <Boom/>}
      { this.state.back && <Broken/> }
      { this.state.kid && <Kid/> }
    </TransitionGroup>
    </div></Link>)
}
}


export default Unbroken;