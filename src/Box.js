import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import {TweenMax, SteppedEase, TweenLite} from "gsap";
import './test.css';
import Cyclist from './Cyclist.js';

class Box extends React.Component {
    state = {
        cyclist: false
      };

    componentDidMount = () => {
        setTimeout(() => {
          this.setState({
              cyclist: !this.state.cyclist
            });
        }, 100);
      
    }

    componentDidEnter () {
      const el = this.container;
      TweenLite.from(el, 0.3, {x: -500}, { ease: SteppedEase.config(15), x: 0, opacity: 1,  delay: 2});
    setTimeout(() => {
        this.componentWillLeave()
    }, 2000);
      
    }

  
    componentWillLeave () {
      const el = this.container;
      if(el){
        TweenMax.fromTo(el, 0.3, {x: 0}, {ease: SteppedEase.config(15), x: 0, opacity: 0 });
      }
    }
  
    render () {
        
      return <div className="box" ref={c => this.container = c}>
      <TransitionGroup>
      { this.state.cyclist && <Cyclist speak={'Moi, its nice to be a cyclist'}/>}
    </TransitionGroup></div>;
    }
  }

  export default Box;
