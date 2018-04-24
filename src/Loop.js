import React from 'react';
import Unbroken from './Unbroken.js';
import './css/App.css';

class App extends React.Component {
  state = {
    redirect:false
  };

componentDidMount = () => {
  setTimeout(() => {
    this.setState({
      redirect: !this.state.redirect
    })
  }, 18000);
}
  render() {
    if(window.location.pathname === '/after'){
        return(
        this.props.history.push('/after')
      )
    }
    if (this.state.redirect) {
      this.componentDidMount()
      window.location.reload(true);
      
    } 
    this.componentDidMount()
    return (
      
      <Unbroken/>
      
    );
  }
}

export default App;