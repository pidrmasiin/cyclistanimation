

import React from 'react';
import {SteppedEase, TweenLite} from "gsap";
import './test.css';
import { Grid, Image} from 'semantic-ui-react'

class Broken extends React.Component {
    componentDidEnter () {
      const el = this.container;
      TweenLite.from(el, 0.3, {x: -500}, { ease: SteppedEase.config(15), x: 500, opacity: 1, delay: 2});
    }
  
    render () {
        
      return (
      <div className='broken' ref={c => this.container = c}>
        <Grid>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row>
        <Grid.Column width={5}>
         </Grid.Column>
         <Grid.Column className='liiteri' width={6}>
         <Image src="http://liiteri.net/wp-content/uploads/2017/12/Liiteri-logo_700x300.png" alt="logo" />
         </Grid.Column>
         </Grid.Row>
        </Grid>
      
      <div className="box">
        
          <img src='http://www.gifmania.co.uk/Sports-Animated-Gifs/Animated-Cycling/Bicycles/Broken-Bike-87394.gif' alt='broken bike' className="brokenbike" />
          </div>
          </div>
      )
    }
  }

  export default Broken;