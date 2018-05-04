import React from 'react'
import TransitionGroup from 'react-addons-transition-group'
import './test.css'
import './css/App.css'
import Boom from './Boom.js'
import Swipe from './Swipe.js'
import Cyclist from './Cyclist.js'
import Broken from './Broken.js'
import { Link } from 'react-router-dom'
import { Grid, Image} from 'semantic-ui-react'

class Unbroken extends React.Component {
  state = {
      boom: false,
      cyclist: false,
      cyclist2: false,
      broken: false,
      speak: false
  };

  componentDidMount = () => {
      setTimeout(() => {
          this.setState({
              cyclist: !this.state.cyclist
          })
      }, 3000)
      setTimeout(() => {
          this.setState({
              cyclist2: !this.state.cyclist2
          })
      }, 8000)
      setTimeout(() => {
          this.setState({
              boom: !this.state.boom
          })
      }, 11200)
      setTimeout(() => {
          this.setState({
              broken: !this.state.broken
          })
      }, 13000)
      setTimeout(() => {
          this.setState({
              speak: !this.state.speak
          })
      }, 14500)
      
  }

  render () {
      return (  <Link to="/after"> 
          <div className="test">
              <Grid style={{height: '100vh'}}>
                  <Grid.Row style={{height:'10%'}}>
                      <Grid>
                          <Grid.Row>
                          </Grid.Row>
                          <Grid.Row>
                          </Grid.Row>
                          <Grid.Row>
                              <Grid.Column width={3}>
                              </Grid.Column>
                              <Grid.Column className='liiteri' width={10}>
                                  
                                  <Image src="http://liiteri.net/wp-content/uploads/2017/12/Liiteri-logo_700x300.png" alt="logo" />
                                  <TransitionGroup>
                                      { this.state.cyclist && <Cyclist speak={'Hey, its nice to be a cyclist'}/>}
                                  </TransitionGroup>
                              </Grid.Column>
                              <Grid.Column width={2}>
                                  <Swipe/>
                              </Grid.Column>
                          </Grid.Row>
                      </Grid>
                  </Grid.Row>
                  <Grid.Row style={{height:'60%'}}>
                      <Grid.Column width={3}>
                      </Grid.Column>
                      <Grid.Column width={10}>
                          <TransitionGroup>
                              { this.state.cyclist2 && <Cyclist/>}
                              { this.state.boom && <Boom/>}
                              { this.state.broken && <Broken/>}
                          </TransitionGroup>
                          { this.state.speak && <h1 className='speak'>Please, heal me with your gentle touch</h1>}
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
              
             
          </div></Link>)
  }
}


export default Unbroken