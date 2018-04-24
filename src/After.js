import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import { SteppedEase, TweenLite} from "gsap";
import './test.css';
import './css/App.css';
import Cyclist from './Cyclist.js';
import { Grid, Image} from 'semantic-ui-react'


class After extends React.Component {
    state = {
        cyclist: false
      };

      componentDidMount = () => {
        setTimeout(() => {
          this.setState({
            cyclist: !this.state.cyclist
          })
        }, 2000);
      }

    componentDidEnter () {
        setTimeout(() => {
            this.setState({
                cyclist: !this.state.cyclist
              });
          }, 100);
      const el = this.container;
      TweenLite.from(el, 0.3, {x: -500}, { ease: SteppedEase.config(15), x: 0, opacity: 1, delay: 2});
    }

    render () {
      return <div className="test" ref={c => this.container = c}>
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
      <div className='box'>
      <TransitionGroup>
      { this.state.cyclist && <Cyclist speak={'Hey, thanks a lot. You showed me that repairing is easy. Just use Liiteri!'}/>}
    </TransitionGroup></div></div>;
    }
  }

  export default After;
