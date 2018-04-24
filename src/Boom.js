

import React from 'react';
import { SteppedEase, TweenLite} from "gsap";
import './test.css';
import boom from './css/boom.png';
import flip from './css/flip.png';
class Boom extends React.Component {
  
    componentDidEnter () {
      const el = this.container;
      TweenLite.from(el, 0.3, {x: 500}, { ease: SteppedEase.config(15), x: 0, opacity: 1, delay: 2});
      setTimeout(() => {
        this.componentWillLeave()
      }, 4000);
      
    }
 
  
    componentWillLeave () {
      const el = this.container;
      if(el){
        TweenLite.fromTo(el, 0.3, {x: 0}, { ease: SteppedEase.config(15), x: 500, opacity: 0});
      }
    }
  
    render () {
        
      return <div className="boom" ref={c => this.container = c}>
          <img src={boom} alt='BOOM' className="logo"/>
          <img src={flip} alt='Accident' className="flip"/>
          </div>
    }
  }

  export default Boom;