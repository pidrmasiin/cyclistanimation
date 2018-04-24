

import React from 'react';
import {TweenMax, SteppedEase, TweenLite} from "gsap";
import './test.css';
import bicycle from './css/bicycle.png';

class Cyclist extends React.Component {
   
    componentDidEnter () {
      const el = this.container;
      TweenLite.from(el, 0.3, {x: -500}, { ease: SteppedEase.config(15), x: 0, opacity: 1, delay: 2});
    setTimeout(() => {
        this.componentWillLeave()
    }, 1500);
    }
 
    componentWillLeave () {
      const el = this.container;
      if(el){
      TweenMax.fromTo(el, 0.3, {x: 0}, {ease: SteppedEase.config(15), x: 500, opacity: 0 });
      }
    }
  
    render () {
        
      return <div>
          {this.props.speak && <h1 className='speak'>{this.props.speak}</h1>}
          <div className="cyclist" ref={c => this.container = c}>
          <img src={bicycle} alt='Cyclist' className="cyclist" ref={c => this.container = c}/>
          </div>
          </div>
    }
  }

  export default Cyclist;