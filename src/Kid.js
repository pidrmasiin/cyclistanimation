

import React from 'react';
import {SteppedEase, TweenLite} from "gsap";
import './test.css';
class Kid extends React.Component {
    componentDidEnter () {
      const el = this.container;
      TweenLite.from(el, 0.3, {x: 500}, { ease: SteppedEase.config(15), x: 0, opacity: 1, delay: 2});
    }
 
  
    render () {
        
      return <div className='kid' ref={c => this.container = c}>
             <h1 className='speak'>Please, heal me with your gentle touch</h1>
          <img src='https://www.poole.nhs.uk/images/child%20hurt%20knee.png' alt='kid hurts' className="cyclist" ref={c => this.container = c}/></div>
         
    }
  }

  export default Kid;