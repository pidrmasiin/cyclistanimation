

import React from 'react';
import {SteppedEase, TweenLite} from "gsap";
import './test.css';

class Broken extends React.Component {
    componentDidEnter () {
      const el = this.container;
      TweenLite.from(el, 0.3, {x: -500}, { ease: SteppedEase.config(15), x: 500, opacity: 1, delay: 2});
    }
  
    render () {
        
      return (
      <div className='broken' ref={c => this.container = c}>
      <div className="box">
   
          <img src='http://www.gifmania.co.uk/Sports-Animated-Gifs/Animated-Cycling/Bicycles/Broken-Bike-87394.gif' alt='broken bike' className="brokenbike" />
          </div>
          </div>
      )
    }
  }

  export default Broken;