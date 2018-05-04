import React from 'react'
import {SteppedEase, TweenLite} from 'gsap'
import './test.css'
import { Image} from 'semantic-ui-react'
import fall from './css/fall.png'

class Broken extends React.Component {
    componentDidEnter () {
        const el = this.container
        TweenLite.from(el, 0.3, {x: -500}, { ease: SteppedEase.config(15), x: 500, opacity: 1, delay: 2})
    }
  
    render () {
        
        return (
            <div className='brokenä' ref={c => this.container = c}>
                <Image src={fall} alt="logo" />
            </div>
           
        )
    }
}

export default Broken